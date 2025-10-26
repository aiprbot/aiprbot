import { z } from "zod"

const envzod = z.object({
	OPENROUTER_API_KEY: z.string(),
})

const env = envzod.parse(process.env)

export default env
