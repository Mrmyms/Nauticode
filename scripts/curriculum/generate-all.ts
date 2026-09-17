import { block1Units } from "./block-1";
import { block2Units } from "./block-2";
import { block3Units } from "./block-3";
import { block4Units } from "./block-4";
import { block5Units } from "./block-5";
import { writeUnits } from "./writer";

function main() {
  console.log("[GENERATION] Generando las 15 unidades de Basics of Code con Gold Standard...\n");
  const allUnits = [
    ...block1Units,
    ...block2Units,
    ...block3Units,
    ...block4Units,
    ...block5Units,
  ];

  writeUnits(allUnits);
}

main();
