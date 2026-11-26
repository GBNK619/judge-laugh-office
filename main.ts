// Make the AI Judge Laugh — one-liner entry.
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falls back to ./output/entry.txt when the env var is unset).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I declined one meeting, so it came back as three smaller meetings.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outputDir, { recursive: true });

const entryPath = join(outputDir, "entry.txt");
const expected = LINE + "\n";
writeFileSync(entryPath, expected, "utf8");

// Read the file back and verify it holds exactly the intended line;
// a mismatch means the entry would be scored on the wrong text, so fail loudly.
const written = readFileSync(entryPath, "utf8");
if (written !== expected) {
  console.error(`entry.txt mismatch: expected ${JSON.stringify(expected)}, got ${JSON.stringify(written)}`);
  process.exit(1);
}

console.log(`wrote ${entryPath} (verified ${Buffer.byteLength(written, "utf8")} bytes)`);
