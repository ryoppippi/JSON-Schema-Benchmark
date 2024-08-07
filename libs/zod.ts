import { zodToJsonSchema } from "zod-to-json-schema";
import { z } from "zod";

export function zod() {
  let zod = z.object({
    uid: z.number().int(),
    name: z.string({
      description: "full name",
    }),
    isActive: z.boolean(),
    avatar: z.optional(
      z.string().url(),
    ),
    achievements: z.tuple([
      z.number().min(0), // points
      z.enum(["novice", "pro", "expert", "master"]),
    ]),
    interests: z.array(
      z.string().min(4).max(36),
    ),
    last_updated: z.number({
      description: "unix seconds",
    }).int().min(0),
  });

  let _ = zodToJsonSchema(zod);
}
