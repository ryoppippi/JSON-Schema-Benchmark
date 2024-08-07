# json-schema-benchmark

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

## Result

```sh
~/g/g/r/JSON-Schema-Benchmark main• ❱ bun run index.ts
platform: Darwin 23.5.0 arm64 arm
bun version: 1.1.21+70ca2b76c
benchmark start
┌───┬───────────────────┬────────────┬────────────────────┬────────┬──────────┐
│   │ Task Name         │ ops/sec    │ Average Time (ns)  │ Margin │ Samples  │
├───┼───────────────────┼────────────┼────────────────────┼────────┼──────────┤
│ 0 │ typia             │ 32,816,961 │ 30.4720474430912   │ ±1.79% │ 32816962 │
│ 1 │ tschema           │ 3,475,386  │ 287.73780848206604 │ ±1.20% │ 3475387  │
│ 2 │ @sinclair/typebox │ 2,689,724  │ 371.7852713569184  │ ±0.98% │ 2689725  │
│ 3 │ zod               │ 71,656     │ 13955.375169085659 │ ±1.52% │ 71709    │
└───┴───────────────────┴────────────┴────────────────────┴────────┴──────────┘
```

## Related

This benchmark code is based on [lukeed/tschema](https://github.com/lukeed/tschema)

## License
[MIT](./LICENSE)
