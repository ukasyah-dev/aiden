import { drizzle } from "drizzle-orm/d1";

import * as schema from "~/db/schema";
import type { Route } from "./+types/hello";

export async function loader({ context }: Route.LoaderArgs) {
  const db = drizzle(context.cloudflare.env.DB, { schema });
  return db.query.users.findMany();
}
