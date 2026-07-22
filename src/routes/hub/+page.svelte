<script>
	import { onMount } from "svelte";
	import { config } from "$lib/config";

	let communications = $state([]);
	let loading = $state(true);
	let error = $state("");

	onMount(async () => {

		const token = localStorage.getItem("token");

		if (!token) {
			error = "Please sign in.";
			loading = false;
			return;
		}

		try {

			const res = await fetch(
				`${config.apiUrl}/communication/my`,
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			);

			if (!res.ok)
				throw new Error(`HTTP ${res.status}`);

			const data = await res.json();

			communications = data.sort(
				(a, b) =>
					new Date(b.createdAt) -
					new Date(a.createdAt)
			);

		}
		catch (err) {

			console.error(err);
			error = err.message;

		}
		finally {

			loading = false;

		}

	});

	function formatDate(date) {
		return new Date(date).toLocaleString();
	}
</script>

{#if loading}

	<div class="feed">
		<p>Loading...</p>
	</div>

{:else if error}

	<div class="feed">
		<p>{error}</p>
	</div>

{:else}

<div class="feed">

	<h1>💬 My Hub</h1>

	<p class="subtitle">
		Your questions and replies across all lessons.
	</p>

	{#if communications.length === 0}

		<div class="card">
			<p>You haven't sent any communications yet.</p>
		</div>

	{:else}

		{#each communications as c}

		<article class="card">

			<div class="header">

				<div>

					<div class="lesson">
						📘 {c.library?.title ?? c.librarySlug}
					</div>

					<div class="slug">
						{c.librarySlug}
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
					🟡 Waiting for reply
				</div>

			{/if}

		</article>

		{/each}

	{/if}

</div>

{/if}

<style>

.feed{
	max-width:800px;
	margin:2rem auto;
	padding:0 1rem;
}

.subtitle{
	color:var(--pico-muted-color);
	margin-bottom:2rem;
}

.card{

	background:var(--pico-card-background-color);

	border:1px solid var(--pico-muted-border-color);

	border-radius:14px;

	padding:1rem;

	margin-bottom:1rem;

	box-shadow:0 2px 8px rgba(0,0,0,.08);

}

.header{

	display:flex;

	justify-content:space-between;

	align-items:flex-start;

	margin-bottom:1rem;

	gap:1rem;

}

.lesson{

	font-weight:bold;

	font-size:1.05rem;

}

.slug{

	font-size:.85rem;

	opacity:.65;

	word-break:break-all;

}

.time{

	font-size:.8rem;

	opacity:.7;

	white-space:nowrap;

}

.message{

	font-size:1.05rem;

	line-height:1.7;

	margin-bottom:1rem;

}

.reply{

	border-left:4px solid var(--pico-primary);

	padding:.85rem 1rem;

	background:rgba(0,120,255,.05);

	border-radius:8px;

}

.reply-title{

	font-weight:bold;

	margin-bottom:.5rem;

}

.waiting{

	display:inline-block;

	padding:.35rem .75rem;

	border-radius:999px;

	background:#f6c34422;

	border:1px solid #f6c34466;

	font-size:.9rem;

}

</style>