<script>
	import { onMount } from 'svelte';
	export let deckKey;

	let appEl;
	let playBtn;
	let pauseBtn;
	let stopBtn;
	let scrub;
	let timeEl;

	onMount(async () => {
		if (!deckKey) return;

		const {
			createTaleemPlayer,
			resolveAssetPaths,
			resolveBackground,
			getDeckEndTime,
			createAudioTimer,
			createSilentTimer,
			startLoop
		} = await import('$lib/player/taleem-player-app.js');

		const deckUrl = `/decks/${deckKey}.json`;
		const imageBase = `/images/`;
		const audioBase = `/audio/`;

		const res = await fetch(deckUrl);
		if (!res.ok) return;

		const deck = await res.json();

		resolveAssetPaths(deck, imageBase);
		resolveBackground(deck, imageBase);

		let timer = deck.audio
			? createAudioTimer(`${audioBase}${deck.audio}`)
			: createSilentTimer();

		const player = createTaleemPlayer({
			mount: appEl,
			deck
		});

		const duration = getDeckEndTime(deck);

		startLoop({
			player,
			timer,
			duration,
			ui: { playBtn, pauseBtn, stopBtn, scrub, timeEl }
		});
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/player/themes/default.css" />
	<link rel="stylesheet" href="/player/taleem.css" />
</svelte:head>

<style>
.wrapper {
	position: relative;
	min-height: calc(100vh - 44px); /* subtract slim header */
	display: flex;
	flex-direction: column;
}

/* force player mount to stretch */
.wrapper > div:first-child {
	flex: 1;
}
/* constrain nav height without breaking player CSS */
:global(.nav-test) {
	max-height: 35px;
	overflow: hidden;
	display: flex;
	align-items: center;
	padding: 4px 8px !important;
}
</style>

<div class="wrapper">
	<div bind:this={appEl}></div>

	<div class="nav-test">
		<button bind:this={playBtn}>▶</button>
		<button bind:this={pauseBtn}>⏸</button>
		<button bind:this={stopBtn}>⏹</button>
		<span bind:this={timeEl}>0.0s</span>
		<div class="scrub-wrap">
			<input bind:this={scrub} type="range" min="0" max="1" step="0.1" />
		</div>
	</div>
</div>