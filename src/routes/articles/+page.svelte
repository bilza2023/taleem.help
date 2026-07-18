<script>
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

			console.log(article);

		} catch (err) {

			console.error(err);
			error = err.message;

		} finally {

			loading = false;

		}

	});
</script>
{#if loading}

	<p>Loading article...</p>

{:else if error}

	<h2>{error}</h2>

{:else}

	<h1>{article.title}</h1>
{@html article}
	<!-- <pre>{JSON.stringify(article, null, 2)}</pre> -->

{/if}