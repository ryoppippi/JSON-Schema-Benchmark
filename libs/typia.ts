import _typia, { tags } from "typia";

export function typia() {
  interface T {
    uid: number & tags.Type<"int32">;

    /** full name */
    name: string;

    isActive: boolean;

    avatar?: string & tags.Format<"url">;

    achievements: [number, "novice" | "pro" | "expert" | "master"];

    interests: Array<string & tags.MinLength<4> & tags.MaxLength<36>>;

    /** unix seconds */
    last_updated: number & tags.Type<"uint32"> & tags.Minimum<0>;
  }
  let _ = _typia.json.application<[T], "3.0">();
}
