import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// AI excuse: the context window ate the deadline.
const LINE =
  "I would have hit the deadline, but my context window filled up and I forgot what the deadline was for — or that deadlines exist.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
