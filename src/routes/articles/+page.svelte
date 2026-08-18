<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/routes/articles/+page.svelte
	import { onMount } from "svelte";
	import { page } from "$app/state";
import {config} from "$lib/config";
	import Communication from "$lib/components/Communication.svelte";
	import Discussion from "$lib/components/Discussion.svelte";
	import apiFetch from "$lib/utils/fetch";

	let librarySlug = $state("");
	let libraryItem = $state(null);
	let error = $state("");
	let loading = $state(true);


let articleBody = $derived.by(() => {
	if (!libraryItem?.body) return "";

	return libraryItem.body.replaceAll(
		'src="',
		`src="${config.apiUrl}/content/images/`
	);
});
	onMount(async () => {
		librarySlug = page.url.searchParams.get("article");

		if (!librarySlug) {
			error = "No article specified.";
			loading = false;
			return;
		}

		try {
			// libraryItem = await apiFetch("GET", `/library/${librarySlug}`);
			libraryItem = await apiFetch("GET", `/public/library/${librarySlug}`);
			console.log("libraryItem", libraryItem);
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});

</script>

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
	<!-- {@html libraryItem.body} -->
{@html articleBody}
	<!-- <Communication librarySlug={libraryItem.slug} type="user-comment" />
	<Discussion librarySlug={libraryItem.slug} /> -->
{#if libraryItem.allowCommunication}

	<Communication
		librarySlug={libraryItem.slug}
		type="user-comment"
	/>

{:else}

	<article class="secondary">
		🔒 Questions and comments are disabled for this lesson.
	</article>

{/if}

<Discussion
	librarySlug={libraryItem.slug}
/>
</main>

{/if}
<style>
	.container {
		width: min(95vw, 1600px);
		min-height: 100vh;
		margin: 0 auto;
		padding: 1rem 2rem;
		box-sizing: border-box;
		background: var(--theme-panel);
		color: var(--theme-text);
		font-size: 1.75rem;
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
		border-color: var(--theme-border);
	}

	:global(.container a) {
		color: var(--theme-accent);
	}

	:global(.container hr) {
		border-color: var(--theme-border);
	}

	:global(.container blockquote) {
		border-left: 4px solid var(--theme-accent);
		padding-left: 1rem;
	}

	:global(.container code) {
		background: var(--theme-panel);
		border: 1px solid var(--theme-border);
		color: var(--theme-text);
		padding: .1rem .3rem;
		border-radius: 4px;
	}

	.secondary {
		padding: 1rem;
		margin-top: 2rem;
		border: 1px solid var(--theme-border);
		border-radius: 8px;
		color: var(--theme-text);
		background: var(--theme-panel);
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