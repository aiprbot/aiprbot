import { Elysia } from "elysia"
import githubhandlers from "@/github/handlers"

const app = new Elysia()
	.get("/", () => "hello elysia")
	.post("/webhooks/github", githubhandlers.handlewebhook)
	.listen(4321)

console.log(
	`🦊 elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
