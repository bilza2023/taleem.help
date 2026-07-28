<script>
	import { onMount } from "svelte";
	import { config } from "$lib/config";

	let communications = $state([]);
	let loading = $state(true);
	let error = $state("");

	onMount(load);

	async function load() {

		loading = true;
		error = "";

		const token = localStorage.getItem("taleem-token");

		if (!token) {

			error = "Please sign in to view your Hub.";
			loading = false;
			return;

		}

		try {

			const res = await fetch(
				`${config.apiUrl}/communication/me`,
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			);

			if (!res.ok)
				throw new Error(`HTTP ${res.status}`);

			communications = await res.json();

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

.feed{

	max-width:800px;

	margin:2rem auto;

	padding:0 1rem;

}

.subtitle{

	margin-bottom:2rem;

	color:var(--pico-muted-color);

}

.card{

	margin-bottom:1rem;

	padding:1rem;

	border:1px solid var(--pico-muted-border-color);

	border-radius:14px;

	background:var(--pico-card-background-color);

	box-shadow:0 2px 8px rgba(0,0,0,.08);

}

.header{

	display:flex;

	justify-content:space-between;

	align-items:flex-start;

	gap:1rem;

	margin-bottom:1rem;

}

.lesson{

	font-weight:700;

	word-break:break-word;

}

.time{

	font-size:.85rem;

	opacity:.7;

	white-space:nowrap;

}

.message{

	line-height:1.7;

	margin-bottom:1rem;

	white-space:pre-wrap;

}

.reply{

	padding:1rem;

	border-left:4px solid var(--pico-primary);

	border-radius:8px;

	background:rgba(0,120,255,.05);

}

.reply-title{

	margin-bottom:.5rem;

	font-weight:700;

}

.waiting{

	display:inline-block;

	padding:.35rem .8rem;

	border-radius:999px;

	font-size:.9rem;

	background:#f6c34422;

	border:1px solid #f6c34466;

}

</style>