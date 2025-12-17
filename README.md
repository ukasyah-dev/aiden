# aiden

## Local development

```bash
# Create .env file
cp .env.example .env

# Create db on local triggered by a command
pnpm wrangler d1 execute DB --command "SELECT 1"

# Push db schema
pnpm drizzle-kit push

# Run dev server
pnpm dev
```
