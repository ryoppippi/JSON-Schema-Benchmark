import { $ } from "bun";
import { Bench } from "tinybench";
import { tschema } from "./libs/tschema";
import { zod } from "./libs/zod";
import { typebox } from "./libs/typebox";
import { typia } from "./libs/typia";

/* =================== */
const platform = await $`uname -mprs`.text();
console.log(`platform: ${platform.trim()}`);
const bunVersion = await $`bun --revision`.text();
console.log(`bun version: ${bunVersion.trim()}`);

console.log("benchmark start");
/* =================== */

const bench = new Bench({ time: 1000 });

bench
  .add("typia", () => {
    typia();
  })
  .add("tschema", () => {
    tschema();
  })
  .add("@sinclair/typebox", () => {
    typebox();
  })
  .add("zod", () => {
    zod();
  });

await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50

await bench.run();

console.table(bench.table());
