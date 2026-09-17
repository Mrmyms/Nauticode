import fs from "fs";
import path from "path";
import { UnitDefinition, Challenge } from "./types";

const TARGET_DIR = path.join(process.cwd(), "classes", "basics-of-code");

export function validateChallenge(c: Challenge, unitSlug: string, lessonIndex: number, challengeIndex: number) {
  const prefix = `[${unitSlug} L${lessonIndex} C${challengeIndex} (${c.type})]`;

  if (!c.question) {
    throw new Error(`${prefix} Question is empty.`);
  }

  if (c.type === "THEORY" && !c.lessonText) {
    throw new Error(`${prefix} THEORY challenge requires lessonText.`);
  }

  if (["CODE_FILL", "CODE_TEST", "DEBUG", "PREDICT_OUTPUT"].includes(c.type) && !c.codeSnippet) {
    throw new Error(`${prefix} ${c.type} challenge requires codeSnippet.`);
  }

  if (c.type === "CODE_FILL" && !c.codeSnippet?.includes("_____")) {
    throw new Error(`${prefix} CODE_FILL codeSnippet must contain '_____'.`);
  }

  if (c.type === "MATCHING") {
    if (c.options.length < 2) {
      throw new Error(`${prefix} MATCHING challenge requires at least 2 pairs.`);
    }
    for (const opt of c.options) {
      if (!opt.text.includes("|||")) {
        throw new Error(`${prefix} MATCHING option must be formatted as 'Term|||Def', got: "${opt.text}"`);
      }
    }
  }

  if (c.type === "CODE_WRITE" || c.type === "PREDICT_OUTPUT") {
    const correctOpts = c.options.filter(o => o.correct);
    if (correctOpts.length !== 1) {
      throw new Error(`${prefix} ${c.type} must have exactly 1 correct option.`);
    }
  }

  if (["SELECT", "THEORY", "ASSIST", "CODE_FILL", "CODE_TEST", "DEBUG"].includes(c.type)) {
    const correctCount = c.options.filter(o => o.correct).length;
    if (correctCount !== 1) {
      throw new Error(`${prefix} ${c.type} must have exactly 1 correct answer, found ${correctCount}.`);
    }
  }

  if (c.type === "CODE_ORDER") {
    if (c.options.length < 2) {
      throw new Error(`${prefix} CODE_ORDER must have at least 2 lines.`);
    }
  }
}

export function writeUnits(units: UnitDefinition[]) {
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  let totalChallenges = 0;
  let totalLessons = 0;

  for (const unit of units) {
    const unitFolder = path.join(TARGET_DIR, unit.slug);
    if (!fs.existsSync(unitFolder)) {
      fs.mkdirSync(unitFolder, { recursive: true });
    }

    // Write metadata.json
    const metadata = {
      title: unit.title,
      description: unit.description,
      order: unit.order,
      guidebookText: unit.guidebookText,
    };
    fs.writeFileSync(path.join(unitFolder, "metadata.json"), JSON.stringify(metadata, null, 2), "utf-8");

    // Write lessons
    unit.lessons.forEach((lesson, lIdx) => {
      const lessonOrder = lIdx + 1;
      lesson.challenges.forEach((c, cIdx) => {
        validateChallenge(c, unit.slug, lessonOrder, cIdx + 1);
      });

      const lessonData = {
        title: lesson.title,
        challenges: lesson.challenges,
      };

      fs.writeFileSync(
        path.join(unitFolder, `lesson-${lessonOrder}.json`),
        JSON.stringify(lessonData, null, 2),
        "utf-8"
      );

      totalLessons++;
      totalChallenges += lesson.challenges.length;
    });

    console.log(`✅ [${unit.slug}] Order ${unit.order}: "${unit.title}" generated with ${unit.lessons.length} lessons.`);
  }

  console.log(`\n🎉 Success! Wrote ${units.length} units, ${totalLessons} lessons, ${totalChallenges} challenges.`);
}
