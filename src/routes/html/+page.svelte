<script>
// import "@picocss/pico/css/pico.classless.min.css";
import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
	import { onMount } from "svelte";
	import { page } from "$app/state";

	import { config } from "$lib/config";
	let article = $state("");
	let error = $state("");
	let loading = $state(true);

	onMount(async () => {
		// article changed to content
		const articleId = page.url.searchParams.get("content");

		if (!articleId) {
			error = "No article specified.";
			loading = false;
			return;
		}

		try {
			const res = await fetch(`${config.apiUrl}/article/${articleId}`);

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
	width: min(95vw, 1600px);
	margin: 0 auto;
	padding: 1rem 2rem;
	box-sizing: border-box;

	font-size: 1.2rem;
	line-height: 1.8;
}

	:global(.container img) {
		display: block;
		width: 100%;
		max-width: 100%;
		height: auto;
		margin: 1.5rem auto;
		border-radius: 8px;
	}

	:global(.container ul) {
		padding-left: 1.5rem;
	}

	:global(.container table) {
		display: block;
		overflow-x: auto;
		width: 100%;
	}

	@media (max-width: 768px) {
		.container {
			padding: 1rem;
			font-size: 1rem;
			line-height: 1.7;
		}

		:global(.container h1) {
			font-size: 2rem;
		}

		:global(.container h2) {
			font-size: 1.6rem;
		}

		:global(.container h3) {
			font-size: 1.3rem;
		}

		:global(.container img) {
			width: 100%;
			max-width: 100%;
		}
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

<ThemeSwitcher />
<main class="container">
		{@html article}
</main>

{/if}