<!-- /src/routes/player/+page.svelte -->

<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { get } from "svelte/store";

	import Player from "$lib/player/Player.svelte";

	import { getTimer } from "./utils/getTimer.js";

	import { Howl } from "howler";

	const CONTENT_FOLDER = "/content";

	// --- state ---
	let presentation = $state(null);
	let timer = $state(null);

	onMount(async () => {
		const params = get(page).url.searchParams;

		let deckSlug =
			params.get("deck") || "main";

		// --- load compiled presentation ---
		const res = await fetch(
			`${CONTENT_FOLDER}/decks/${deckSlug}.json`
		);

		presentation = await res.json();

		// --- timer ---
		timer = await getTimer({
			slug: deckSlug,
			deck: presentation,
			Howl
		});

		// --- auto stop ---
		const endTime =
			presentation?.deck?.[
				presentation.deck.length - 1
			]?.end || 0;

		const stopWatcher = setInterval(() => {
			if (!timer) return;

			if (timer.now() >= endTime) {
				timer.pause();

				clearInterval(stopWatcher);
			}
		}, 200);
	});
</script>

{#if presentation && timer}
	<Player {presentation} {timer} />
{/if}