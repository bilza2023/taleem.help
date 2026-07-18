<script>
import "@picocss/pico/css/pico.classless.min.css";
	import { onMount } from "svelte";
	import { page } from "$app/state";

	const SERVER = "http://142.93.218.121:9000";

	let article = $state("");
	let error = $state("");
	let loading = $state(true);

	onMount(async () => {
		const articleId = page.url.searchParams.get("article");

		if (!articleId) {
			error = "No article specified.";
			loading = false;
			return;
		}

		try {
			const res = await fetch(`${SERVER}/article/${articleId}`);

			if (!res.ok) {
				throw new Error("Article not found.");
			}

			article = await res.text();
		} catch (err) {
			console.error(err);
			error = err.message;
		} finally {
			loading = false;
		}
	});
</script>

<style>
	.container {
		padding: 0px;
		margin: 10px 50px;
		font-size: 1.4rem;
		line-height: 2.4rem;
	}
:global(.container img) {
    display: block;
    width: 60%;
    max-width: 60%;
    height: auto;
    margin: 1rem auto;
}
:global(.container ul) {
   margin-left:40px;
}
</style>
{#if loading}

<main class="container">
	<p>Loading article…</p>
</main>

{:else if error}

<main class="container">
	<h2>{error}</h2>
</main>

{:else}

<main class="container">
	<!-- <article> -->
		{@html article}
	<!-- </article> -->
</main>

{/if}