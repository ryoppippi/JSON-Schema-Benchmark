import * as t from "tschema";

export function tschema() {
  let _ = t.object({
    uid: t.integer(),
    name: t.string({
      description: "full name",
      examples: ["Alex Johnson"],
    }),
    isActive: t.boolean(),
    avatar: t.optional(
      t.string({ format: "uri" }),
    ),
    achievements: t.tuple([
      t.number({ minimum: 0 }), // points
      t.enum(["novice", "pro", "expert", "master"]),
    ]),
    interests: t.array(
      t.string({
        minLength: 4,
        maxLength: 36,
      }),
    ),
    last_updated: t.integer({
      minimum: 0,
      examples: [1722642982],
      description: "unix seconds",
    }),
  });
}
