<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { get } from "svelte/store";

	import Player from "$lib/player/Player.svelte";
	import { resolveAssetPaths } from "$lib/utils/resolveAssetPaths.js";

	import { getTimer } from "$lib/utils/getTimer.js";
	import { Howl } from "howler";

	const CONTENT_FOLDER = "/content";

	// --- state ---
	let deck = $state(null);
	let timer = $state(null);

	onMount(async () => {
		const params = get(page).url.searchParams;
		let deckSlug = params.get("deck") || "GoldenDeckV2-8Apr2026";

		// 1. load deck
		const res = await fetch(`${CONTENT_FOLDER}/decks/${deckSlug}.json`);
		const json = await res.json();

		deck = resolveAssetPaths(json, `${CONTENT_FOLDER}/images/`);

		// 2. get timer (audio or silent)
		timer = await getTimer({
			slug: deckSlug,
			deck,
			Howl
		});

		// 3. start playback
		const endTime = deck?.end || 0;

			const stopWatcher = setInterval(() => {
				if (!timer) return;

				if (timer.now() >= endTime) {
					timer.pause();   // stops audio OR timer
					clearInterval(stopWatcher);
				}
			}, 200);
	});
</script>

{#if deck && timer}
	<Player {deck} {timer} />
{/if}