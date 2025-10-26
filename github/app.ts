import { App } from "@octokit/app"
import env from "@/env"
import setupwebhooks from "@/github/webhooks"

const githubapp = new App({
	appId: env.GITHUB_APP_ID,
	privateKey: env.GITHUB_PRIVATE_KEY,
	webhooks: {
		secret: env.GITHUB_WEBHOOK_SECRET,
	},
})

setupwebhooks(githubapp)

export default githubapp
