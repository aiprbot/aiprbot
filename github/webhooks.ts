import type { App } from "@octokit/app"
import type { EmitterWebhookEvent } from "@octokit/webhooks"
import env from "@/env"

const bottag = `@${env.BOT_NAME}`

function handlemention(
	texts: (string | null | undefined)[],
	logmessage: string,
) {
	if (texts.some(text => text?.includes(bottag))) {
		console.log(logmessage, ...texts)
		// TODO: process mention and respond
	}
}

export default function setupwebhooks(githubapp: App) {
	githubapp.webhooks.on(
		"issue_comment",
		async (event: EmitterWebhookEvent<"issue_comment">) => {
			handlemention(
				[event.payload.comment.body],
				"mention detected in issue comment : ",
			)
		},
	)

	githubapp.webhooks.on(
		"pull_request_review_comment",
		async (event: EmitterWebhookEvent<"pull_request_review_comment">) => {
			handlemention(
				[event.payload.comment.body],
				"mention detected in pull request review comment : ",
			)
		},
	)

	githubapp.webhooks.on(
		"pull_request",
		async (event: EmitterWebhookEvent<"pull_request">) => {
			handlemention(
				[event.payload.pull_request.title, event.payload.pull_request.body],
				"mention detected in pull request title/body : ",
			)
		},
	)

	githubapp.webhooks.on(
		"issues",
		async (event: EmitterWebhookEvent<"issues">) => {
			handlemention(
				[event.payload.issue.title, event.payload.issue.body],
				"mention detected in issue title/body : ",
			)
		},
	)
}
