<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { get } from "svelte/store";

	import Player from "$lib/player/Player.svelte";
	import { Timer } from "taleem-pam";

	import { resolveAssetPaths } from "$lib/utils/resolveAssetPaths.js";
    
	const CONTENT_FOLDER = "/content";
    // const CONTENT_IMAGES_FOLDER = "/workbench-content/images";
	
	// --- state ---
	let deck = $state(null);
	let timer = $state(null);

	onMount(async () => {
		timer = new Timer();

		const params = get(page).url.searchParams;
		let deckSlug = params.get("deck");

		if (!deckSlug) {
		deckSlug = "GoldenDeckV2-8Apr2026";
		}
		// const res = await fetch(`/content/decks/GoldenDeckV2-8Apr2026.json`);
		
		const res = await fetch(`${CONTENT_FOLDER}/decks/${deckSlug}.json`);
		const json = await res.json();

		deck = resolveAssetPaths(json, `${CONTENT_FOLDER}/images/`);
	});
</script>

{#if deck && timer}
	<Player {deck} {timer} />
{/if}