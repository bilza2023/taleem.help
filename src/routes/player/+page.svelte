<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { get } from "svelte/store";
	import apiFetch from "$lib/utils/fetch";
	import {config} from "$lib/config.js";
	import {getAudioFileName} from "./js/getAudioFileName.js";
	import {resolveAssetPaths} from "./js/resolveAssetPaths.js";
	import {getTimer} from "./js/getTimer.js";
	import TaleemUI from "$lib/taleemUI/TaleemUI.svelte";
	import {defaultTheme,blueTheme,brownTheme} from "$lib/taleem-themes";

	import { Howl }from "howler";

    let presentation = null;
    let timer = null;
    let currentTime = 0;

onMount(async () => {
 
	const params = get(page).url.searchParams;
	const lessonSlug =params.get("lesson");
	// --------------------------------------------------
	// load presentation from library
	// --------------------------------------------------
	const item = await apiFetch("GET",`/library/${lessonSlug}`);
	presentation = JSON.parse(item.body);
	// --------------------------------------------------
	// resolve image paths
	// --------------------------------------------------
	resolveAssetPaths(presentation,`${config.apiUrl}/content/images/`);
	// --------------------------------------------------
	// timer
	// --------------------------------------------------
	const audioFileName	= getAudioFileName(presentation);
	timer = await getTimer(audioFileName,Howl);
	// --------------------------------------------------
	// auto stop
	// --------------------------------------------------
	const endTime = presentation?.deck?.[presentation.deck.length - 1]?.end || 0;

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
        console.log(presentation,endTime,audioFileName)
});
</script>

{#if presentation}

<div class="viewer">
    <TaleemUI
        deck={presentation}
        {currentTime}
        width={844}
        height={390}
    />
</div>

<div class="debug">
    {currentTime}
</div>

{/if}

<style>
.viewer{
    width:844px;
    height:390px;
}
</style>
