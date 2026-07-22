<script>
	import { config } from "$lib/config";

	let { librarySlug } = $props();

	let message = $state("");
	let sending = $state(false);
	let status = $state("");

	function authHeaders() {
		const token = localStorage.getItem("token");

		return {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		};
	}

	async function sendMessage() {

		if (!message.trim())
			return;

		sending = true;
		status = "";

		try {

			const res = await fetch(
				`${config.apiUrl}/communication`,
				{
					method: "POST",
					headers: authHeaders(),
					body: JSON.stringify({
						librarySlug,
						message
					})
				}
			);

			if (!res.ok)
				throw new Error("Unable to send message.");

			message = "";
			status = "✓ Thank you. Your message has been sent.";

		}
		catch (err) {

			status = err.message;

		}
		finally {

			sending = false;

		}
	}
</script>

<section class="communication">

	<h3>Questions / Feedback</h3>

	<textarea
		bind:value={message}
		rows="5"
		placeholder="Ask a question, report a mistake, or send feedback..."
	></textarea>

	<p>
		<button
			onclick={sendMessage}
			disabled={sending || !message.trim()}
		>
			{sending ? "Sending..." : "Send"}
		</button>
	</p>

	{#if status}
		<p>{status}</p>
	{/if}

</section>

<style>
.communication{
	margin-top:2rem;
	padding-top:2rem;
	border-top:1px solid var(--pico-muted-border-color);
}

textarea{
	width:100%;
	min-height:140px;
}
</style>