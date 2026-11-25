// The 3AM Fridge Text — make.fun entry
// Writes the one line a smart fridge would text its owner at 3am
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Gate: UTF-8 text, 1 to 140 characters, single line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "3am. Fourth visit tonight. The yogurt is scared, the butter is judging you, and honestly, so am I — and I'm just a fridge.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
