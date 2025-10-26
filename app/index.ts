import { Elysia } from "elysia"
import githubhandlers from "@/github/handlers"

export default new Elysia()
	.get("/", () => "hello elysia")
	.post("/webhooks/github", githubhandlers.handlewebhook)
