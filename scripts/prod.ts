import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const CLASSES_DIR = path.join(process.cwd(), "classes");

const main = async () => {
  try {
    console.log("Seeding database...");

    // Only delete curriculum content (preserving user progress and subscriptions!)
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challenges);
    await db.delete(schema.lessons);
    await db.delete(schema.units);

    // Setup predefined courses (preserve existing courses to avoid cascading user deletions)
    const coursesMap: Record<string, number> = {};
    const predefinedCourses = [
      { title: "Basics of Code", imageSrc: "/basics.svg" },
      { title: "Java", imageSrc: "/java.svg" },
      { title: "C++", imageSrc: "/cpp.svg" },
      { title: "Python", imageSrc: "/python.svg" },
    ];

    const existingCourses = await db.select().from(schema.courses);
    for (const pre of predefinedCourses) {
      const found = existingCourses.find(c => c.title.toLowerCase() === pre.title.toLowerCase());
      if (found) {
        coursesMap[pre.title.toLowerCase().replace(/ /g, "-")] = found.id;
      } else {
        const [newCourse] = await db.insert(schema.courses).values(pre).returning();
        coursesMap[pre.title.toLowerCase().replace(/ /g, "-")] = newCourse.id;
      }
    }

    if (!fs.existsSync(CLASSES_DIR)) {
      console.log(`Directory ${CLASSES_DIR} not found. Skipping file-based seeding.`);
      console.log("Database seeded successfully with courses only");
      return;
    }

    // Read Course folders
    const courseFolders = fs.readdirSync(CLASSES_DIR).filter(f => fs.statSync(path.join(CLASSES_DIR, f)).isDirectory());

    for (const courseFolderName of courseFolders) {
      const courseId = coursesMap[courseFolderName];
      if (!courseId) {
        console.warn(`Course folder '${courseFolderName}' does not match any predefined course in DB. Skipping.`);
        continue;
      }

      const coursePath = path.join(CLASSES_DIR, courseFolderName);
      const unitFolders = fs
        .readdirSync(coursePath)
        .filter(f => f.startsWith("unit-") && fs.statSync(path.join(coursePath, f)).isDirectory())
        .sort((a, b) => parseInt(a.replace("unit-", ""), 10) - parseInt(b.replace("unit-", ""), 10));

      for (const unitFolderName of unitFolders) {
        const unitPath = path.join(coursePath, unitFolderName);
        const metadataPath = path.join(unitPath, "metadata.json");
        
        let unitTitle = unitFolderName;
        let unitDesc = "Description not found";
        let unitOrder = parseInt(unitFolderName.replace("unit-", ""), 10);
        let guidebookText: string | null = null;

        if (fs.existsSync(metadataPath)) {
          try {
            const meta = JSON.parse(fs.readFileSync(metadataPath, "utf-8"));
            unitTitle = meta.title || unitTitle;
            unitDesc = meta.description || unitDesc;
            unitOrder = meta.order || unitOrder;
            guidebookText = meta.guidebookText || null;
          } catch (e) {
            console.error(`Error parsing ${metadataPath}. Using fallback metadata.`, e);
          }
        }

        const [dbUnit] = await db.insert(schema.units).values({
          courseId,
          title: unitTitle,
          description: unitDesc,
          guidebookText,
          order: unitOrder,
        }).returning();

        // Read Lesson files (e.g. lesson-1.json)
        const lessonFiles = fs
          .readdirSync(unitPath)
          .filter(f => f.startsWith("lesson-") && f.endsWith(".json"))
          .sort((a, b) => parseInt(a.replace("lesson-", "").replace(".json", ""), 10) - parseInt(b.replace("lesson-", "").replace(".json", ""), 10));
        
        for (const lessonFile of lessonFiles) {
          const lessonPath = path.join(unitPath, lessonFile);
          try {
            const lessonData = JSON.parse(fs.readFileSync(lessonPath, "utf-8"));
            const lessonOrder = parseInt(lessonFile.replace("lesson-", "").replace(".json", ""));

            const [dbLesson] = await db.insert(schema.lessons).values({
              unitId: dbUnit.id,
              title: lessonData.title || `Lesson ${lessonOrder}`,
              order: lessonOrder,
            }).returning();

            if (lessonData.challenges && Array.isArray(lessonData.challenges)) {
              for (let i = 0; i < lessonData.challenges.length; i++) {
                const cData = lessonData.challenges[i];
                
                const [dbChallenge] = await db.insert(schema.challenges).values({
                  lessonId: dbLesson.id,
                  type: cData.type,
                  question: cData.question,
                  lessonText: cData.lessonText || null,
                  codeSnippet: cData.codeSnippet || null,
                  order: i + 1,
                }).returning();

                if (cData.options && Array.isArray(cData.options)) {
                  const optionsToInsert = cData.options.map((opt: any) => ({
                    challengeId: dbChallenge.id,
                    text: opt.text,
                    correct: !!opt.correct,
                    audioSrc: opt.audioSrc || null,
                    imageSrc: opt.imageSrc || null,
                  }));
                  
                  if (optionsToInsert.length > 0) {
                    await db.insert(schema.challengeOptions).values(optionsToInsert);
                  }
                }
              }
            }

          } catch (e) {
            console.error(`Error parsing ${lessonPath}. Skipping this lesson.`, e);
          }
        }
      }
    }

    console.log("Database seeded successfully with folder-based curriculum");
  } catch (error) {
    console.error("Failed to seed database:", error);
    throw error;
  }
};

void main();
