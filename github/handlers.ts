import githubapp from "@/github/app"

const handlewebhook = async (context: Record<string, unknown>) => {
	const { request, headers } = context as {
		request: Request
		headers: Record<string, string | undefined>
	}
	const payload = await request.text()
	await githubapp.webhooks.verifyAndReceive({
		id: headers["x-github-delivery"] as string,
		name: headers["x-github-event"] as string,
		signature: headers["x-hub-signature-256"] as string,
		payload,
	})
	return "ok"
}

const handlers = {
	handlewebhook,
}

export default handlers
