import { JAVA_UNITS } from "./java-blocks";
import { writeUnits } from "./writer";

console.log("Generating Java FRC WPILib Curriculum (15 Units)...");
writeUnits(JAVA_UNITS, "java");
console.log("Java Curriculum generated successfully in classes/java!");
