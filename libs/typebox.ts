import { Type } from "@sinclair/typebox";

export function typebox() {
  let _ = Type.Object({
    uid: Type.Integer(),
    name: Type.String({
      description: "full name",
      examples: ["Alex Johnson"],
    }),
    isActive: Type.Boolean(),
    avatar: Type.Optional(
      Type.String({ format: "uri" }),
    ),
    achievements: Type.Tuple([
      Type.Number({ minimum: 0 }), // points
      // NOTE: different
      // Type.Enum({
      // 	NOVICE: 'novice',
      // 	PRO: 'pro',
      // 	EXPERT: 'expert',
      // 	MASTER: 'master',
      // }),

      // NOTE: equivalent output
      Type.Unsafe<string>({
        enum: ["novice", "pro", "expert", "master"],
      }),
    ]),
    interests: Type.Array(
      Type.String({
        minLength: 4,
        maxLength: 36,
      }),
    ),
    last_updated: Type.Integer({
      minimum: 0,
      examples: [1722642982],
      description: "unix seconds",
    }),
  });
}
