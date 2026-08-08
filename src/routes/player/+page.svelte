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

///////////////////////TICKER FUNCTION///////////////////////////////////
	let deckEndTime = 0;
	let ticker = null;

	function play() {
		timer?.play();
	}

	function pause() {
		timer?.pause();
	}

	function stop() {
		timer?.pause();
		timer?.seek(0);
		currentTime = 0;
	}

	function seek(time) {
		timer?.seek(time);
		currentTime = time;
	}

	function startTicker() {

		if (ticker) return;

		ticker = setInterval(() => {

			if (!timer) return;

			currentTime = timer.now();

			if (currentTime >= deckEndTime) {
				timer.pause();
				currentTime = deckEndTime;
			}

		}, 50);

	}    
//////////////////////////////////////////////////////////    
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
	deckEndTime = presentation?.deck?.[presentation.deck.length - 1]?.end || 0;
    startTicker();
	// const stopWatcher =
	// 	setInterval(() => {
	// 		if (!timer) return;
	// 		if (timer.now() >= endTime) {
	// 			timer.pause();
	// 			clearInterval(
	// 				stopWatcher
	// 			);
	// 		}

	// 	}, 200);
        // console.log(presentation,deckEndTime,audioFileName)
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

<div class="controls">

	<button onclick={play}>▶</button>
	<button onclick={pause}>⏸</button>
	<button onclick={stop}>⏹</button>

	<span class="time">
		{currentTime.toFixed(1)} / {deckEndTime}s
	</span>

	<input
		type="range"
		min="0"
		max={deckEndTime}
		step="0.1"
		value={currentTime}
		oninput={(e)=>seek(parseFloat(e.target.value))}
	/>

</div>

{/if}

<style>
.viewer{
	width:844px;
	height:390px;
	margin:auto;
}

.controls{
	display:flex;
	align-items:center;
	gap:10px;
	padding:8px 12px;
	background:#1b1b1b;
	color:#fff;
}

.controls button{
	width:34px;
	height:34px;
	display:flex;
	align-items:center;
	justify-content:center;
	padding:0;
	border:none;
	border-radius:6px;
	background:#333;
	color:#fff;
	cursor:pointer;
	font-size:18px;
	line-height:1;
}
.controls button:hover{
	background:#555;
}

.time{
	min-width:80px;
	font-family:monospace;
}

.controls input[type="range"]{
	flex:1;
}
</style>
