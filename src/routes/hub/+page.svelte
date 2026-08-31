
<script>
	import { onMount } from "svelte";
	import apiFetch from "$lib/utils/fetch";

	let communications = $state([]);
	let loading = $state(true);
	let error = $state("");

	onMount(load);

	async function load() {
		loading = true;
		error = "";

		try {
		communications = await apiFetch("GET", "/user/me");
		}
		catch (err) {
			console.error(err);
			error = err.message;
		}
		finally {
			loading = false;
		}
	}

	function formatDate(date) {
		return new Date(date).toLocaleString();
	}
</script>
{#if loading}

	<main class="feed">

		<h1>My Hub</h1>

		<p>Loading...</p>

	</main>

{:else if error}

	<main class="feed">

		<h1>My Hub</h1>

		<p>{error}</p>

	</main>

{:else}

<main class="feed">

	<h1>💬 My Hub</h1>

	<p class="subtitle">

		All of your questions, comments and author replies.

	</p>

	{#if communications.length === 0}

		<article class="card">

			You haven't sent any messages yet.

		</article>

	{:else}

		{#each communications as c}

			<article class="card">

				<div class="header">

					<div>

						<div class="lesson">

							📘 {c.referenceId}

						</div>

					</div>

					<div class="time">

						{formatDate(c.createdAt)}

					</div>

				</div>

				<div class="message">

					{c.message}

				</div>

				{#if c.authorResponse}

					<div class="reply">

						<div class="reply-title">

							✅ Author Reply

						</div>

						{c.authorResponse}

					</div>

				{:else}

					<div class="waiting">

						🟡 Waiting for a reply

					</div>

				{/if}

			</article>

		{/each}

	{/if}

</main>

{/if}

<style>
	.feed {
		width: min(95vw, 800px);
		min-height: 100vh;
		margin: 0 auto;
		padding: 2rem 1rem;
		box-sizing: border-box;
		background: var(--theme-panel);
		color: var(--theme-text);
	}

	h1 {
		margin-top: 0;
		color: var(--theme-text);
	}

	.subtitle {
		margin-bottom: 2rem;
		color: var(--theme-text);
		opacity: .7;
	}

	.card {
		margin-bottom: 1rem;
		padding: 1rem;
		border: 1px solid var(--theme-border);
		border-radius: 14px;
		background: var(--theme-panel);
		color: var(--theme-text);
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.lesson {
		font-weight: 700;
		word-break: break-word;
	}

	.time {
		font-size: .85rem;
		opacity: .7;
		white-space: nowrap;
	}

	.message {
		line-height: 1.7;
		margin-bottom: 1rem;
		white-space: pre-wrap;
	}

	.reply {
		padding: 1rem;
		border-left: 4px solid var(--theme-accent);
		border-radius: 8px;
		background: rgba(96, 165, 250, .08);
	}

	.reply-title {
		margin-bottom: .5rem;
		font-weight: 700;
		color: var(--theme-accent);
	}

	.waiting {
		display: inline-block;
		padding: .35rem .8rem;
		border-radius: 999px;
		font-size: .9rem;
		background: rgba(96, 165, 250, .08);
		border: 1px solid var(--theme-border);
		color: var(--theme-text);
	}

	@media (max-width: 600px) {
		.feed {
			padding: 1.25rem .75rem;
		}

		.header {
			flex-direction: column;
			gap: .4rem;
		}

		.time {
			font-size: .8rem;
		}
	}
</style>