<!-- /src/routes/player/+page.svelte -->

<script>
	import "$lib/player/css/themes/dark.css";
	import "$lib/player/css/index.css";

	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { get } from "svelte/store";
	import apiFetch from "$lib/utils/fetch";
	import {config} from "$lib/config.js";
	import {getAudioFileName} from "./utils/getAudioFileName.js";

	import Player from "$lib/player/Player.svelte";

	import { resolveAssetPaths }
		from "./utils/resolveAssetPaths.js";

	import { getTimer }
		from "./utils/getTimer.js";

	import { Howl }
		from "howler";

	// --------------------------------------------------
	// state
	// --------------------------------------------------

	let presentation =
		$state(null);

	let timer =
		$state(null);

	// --------------------------------------------------

onMount(async () => {
//  debugger;
	const params =
		get(page).url.searchParams;

	const lessonSlug =
		params.get("lesson");

	// --------------------------------------------------
	// load presentation from library
	// --------------------------------------------------

	const item =
		await apiFetch(
			"GET",
			`/library/${lessonSlug}`
		);

	presentation =
		// JSON.parse(item.source);
		JSON.parse(item.body);
		console.log("presentation" ,presentation);
//  debugger;
	// --------------------------------------------------
	// resolve image paths
	// --------------------------------------------------

	resolveAssetPaths(
		presentation,
		`${config.apiUrl}/content/images/`
	);

	// --------------------------------------------------
	// timer
	// --------------------------------------------------
	const audioFileName	= getAudioFileName(presentation);

	timer = await getTimer(audioFileName,Howl);

	// --------------------------------------------------
	// auto stop
	// --------------------------------------------------

	const endTime =
		presentation?.deck?.[
			presentation.deck.length - 1
		]?.end || 0;

	const stopWatcher =
		setInterval(() => {

			if (!timer) return;

			if (timer.now() >= endTime) {

				timer.pause();

				clearInterval(
					stopWatcher
				);
			}

		}, 200);
});
</script>

{#if presentation && timer}

	<Player
		{presentation}
		{timer}
	/>

{/if}

{#if presentation && timer}

	<Player
		{presentation}
		{timer}
	/>

{/if}
