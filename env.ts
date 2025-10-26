import { z } from "zod"

const envzod = z.object({
	OPENROUTER_API_KEY: z.string(),
	GITHUB_APP_ID: z.string(),
	GITHUB_PRIVATE_KEY: z.string(),
	GITHUB_WEBHOOK_SECRET: z.string(),
	BOT_NAME: z.string().default("aiprbot"),
})

const env = envzod.parse(process.env)

export default env
