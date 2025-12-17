import "dotenv/config";
import { Config, defineConfig } from "drizzle-kit";

let config: Config = {
  dialect: "sqlite",
  schema: "./app/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};

if (process.env.CLOUDFLARE_ACCOUNT_ID) {
  config = {
    ...config,
    driver: "d1-http",
    dbCredentials: {
      accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
      databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
      token: process.env.CLOUDFLARE_TOKEN!,
    },
  };
}

export default defineConfig(config);
