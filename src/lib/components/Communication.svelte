<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/lib/components/Communication.svelte

	import apiFetch from "$lib/utils/fetch";

	let { librarySlug, type } = $props();

	let message = $state("");
	let sending = $state(false);
	let status = $state("");

	async function sendMessage() {

		if (!message.trim()) return;

		sending = true;
		status = "";

		try {

			await apiFetch("POST", "/user/communication", {
			librarySlug, type, message
			});

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
.communication {
	margin-top: 2rem;
	padding-top: 2rem;
	border-top: 1px solid var(--pico-muted-border-color);
}

textarea {
	width: 100%;
	min-height: 140px;
}
</style>