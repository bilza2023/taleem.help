<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { send } from "$lib/send";
	import { get } from "svelte/store";
	import { getAudioFileName } from "./js/getAudioFileName.js";
	import { resolveAssetPaths } from "./js/resolveAssetPaths.js";
	import { getTimer } from "./js/getTimer.js";
	import TaleemUI from "$lib/taleemUI/TaleemUI.svelte";
	import { getPlayerSize } from "./js/getPlayerSize.js";
	import { Howl } from "howler";
	import Communication from "$lib/components/Communication.svelte";
	import Discussion from "$lib/components/Discussion.svelte";
	import { config } from "$lib/config.js";

	let presentation = null;
	let timer = null;
	let currentTime = 0;
	let PLAYER_WIDTH = 0;
	let PLAYER_HEIGHT = 0;

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

	async function toggleFullscreen() {
		if (!document.fullscreenElement) {
			await document.documentElement.requestFullscreen();
		} else {
			await document.exitFullscreen();
		}
	}

	function resizePlayer() {
		const toolbarHeight = 54;
		const maxWidth = window.innerWidth;
		const maxHeight = window.innerHeight - toolbarHeight;
		const widthFromHeight = maxHeight * 16 / 9;

		PLAYER_WIDTH = Math.min(maxWidth, widthFromHeight);
		PLAYER_HEIGHT = PLAYER_WIDTH * 9 / 16;
	}

	const lessonSlug = get(page).url.searchParams.get("lesson");

	onMount(async () => {
		try {
			const item = await send("library", "get", { slug: lessonSlug });

			presentation = JSON.parse(item.body);

			console.log("presentation", presentation);

			resolveAssetPaths(
				presentation,
				`${config.basePath}/content/images/`
			);

			const audioFileName = getAudioFileName(presentation);

			timer = await getTimer(audioFileName, Howl);

			deckEndTime =
				presentation?.deck?.[presentation.deck.length - 1]?.end || 0;

			startTicker();

			const playerSize = getPlayerSize();

			PLAYER_WIDTH = playerSize.width;
			PLAYER_HEIGHT = playerSize.height;

			window.addEventListener("resize", resizePlayer);

		} catch (error) {
			console.error(error);
		}

		return () => {
			window.removeEventListener("resize", resizePlayer);

			if (ticker) {
				clearInterval(ticker);
				ticker = null;
			}
		};
	});

</script>

{#if presentation}

<div class="player" style={`width:${PLAYER_WIDTH}px`} >

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

    <button onclick={toggleFullscreen} title="Fullscreen">⛶</button>
	</div>

</div>

{/if}

{#if presentation}
<div class="lesson-interaction">

	<Communication
		librarySlug={lessonSlug}
		type="user-comment"
	/>

	<Discussion
		librarySlug={lessonSlug}
	/>

</div>
{/if}

<style>

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
/* ==================================================
   IMPORTANT: allow player page to scroll below player
   ================================================== */

:global(html),
:global(body) {
	overflow-y: auto !important;
	height: auto !important;
}

:global(main) {
	overflow: visible !important;
	height: auto !important;
	min-height: 100vh;
}

:global(.player-layout) {
	overflow: visible !important;
	height: auto !important;
	min-height: 100vh;
}
.lesson-interaction{
	width:min(95%,900px);
	margin:2rem auto 4rem;
	padding:1.5rem;
	box-sizing:border-box;
	background:var(--theme-panel);
	color:var(--theme-text);
	border:1px solid var(--theme-border);
	border-radius:14px;
}

.lesson-interaction :global(textarea){
	width:100%;
	box-sizing:border-box;
}

.lesson-interaction :global(.communication){
	margin-top:0;
}

@media(max-width:600px){
	.lesson-interaction{
		width:95%;
		padding:1rem;
	}
}
</style>