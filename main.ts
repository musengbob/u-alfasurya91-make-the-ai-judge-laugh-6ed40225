// Make the AI Judge Laugh — office-life one-liner.
// Writes a single joke line (1-200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function resolveOutputDir(): string {
  const env = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_PATH;
  if (env) return env;
  if (process.env.MAKEFUN_BOT_DIR) return "/output";
  return join(process.cwd(), "output");
}

const JOKE =
  "My boss calls us a family, so I asked HR for my allowance — turns out Dad blew the budget on pizza Fridays and a foosball table.";

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} chars to ${join(outDir, "entry.txt")}`);
