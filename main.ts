// Make the AI Judge Laugh — one-liner entry.
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falls back to ./output/entry.txt when the env var is unset).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I declined one meeting, so it came back as three smaller meetings.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outputDir, { recursive: true });

const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, LINE + "\n", "utf8");

console.log(`wrote ${entryPath}`);
