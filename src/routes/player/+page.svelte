<script>
	import { useMath } from "./js/useMath.js";
	import { tick } from "svelte";
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
	import { getPlayerSize } from "./js/getPlayerSize.js";
	import { Howl }from "howler";
// import presentation from "$lib/taleem-specs/samples/golden-deck-8aug26.json";
// $: console.log("presentation",presentation);
//////////////////////////////////////////////////	
    let presentation = null;
    let timer = null;
    let currentTime = 0;

let PLAYER_WIDTH = 0;
let PLAYER_HEIGHT = 0;

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
setInterval(() => {if (!presentation) return;}, 2000);
//////////////////////////////////////////////////////////    

function resizePlayer() {
    const toolbarHeight = 54;
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight - toolbarHeight;

    const widthFromHeight = maxHeight * 16 / 9;

    PLAYER_WIDTH = Math.min(maxWidth, widthFromHeight);
    PLAYER_HEIGHT = PLAYER_WIDTH * 9 / 16;
}

onMount(async () => {
//  debugger;
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
	// --------------------------------------------------
	// Window size
	// --------------------------------------------------
	const playerSize = getPlayerSize();
	console.log(getPlayerSize());
	PLAYER_WIDTH = playerSize.width;
	PLAYER_HEIGHT = playerSize.height;

	 window.addEventListener("resize", resizePlayer);

	return () => window.removeEventListener("resize", resizePlayer);
});
</script>

{#if presentation}

<div
	class="player"
	style={`width:${PLAYER_WIDTH}px`}
>

	<div class="viewer">

	{#key `${PLAYER_WIDTH}x${PLAYER_HEIGHT}`}
    <TaleemUI
        theme={presentation.theme || "default"}
        deck={presentation}
        {currentTime}
        width={PLAYER_WIDTH}
        height={PLAYER_HEIGHT}
    />
	{/key}

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

</div>

{/if}



<style>
html,body{
    margin:0;
    padding:0;
    overflow:hidden;
}
	.player{
	width:fit-content;
	margin:0 auto;
}

.viewer{
	width:100%;
	height:auto;
}

.controls{
	width:100%;
	box-sizing:border-box;
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