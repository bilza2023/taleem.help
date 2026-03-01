
<script>
	import { onMount } from 'svelte';
	import BottomNavBar from '../../routes/class/[classId]/[chapterId]/BottomNavBar.svelte';

	import {
		createTaleemPlayer,
		createAudioTimer,
		createSilentTimer,
		getDeckEndTime,
		startLoop
	} from '$lib/player/taleem-player-app.js';

	// Deck object comes from page level
	export let deck;

	export let onToggle;
	export let backHref = '/';

	let appEl;

	let playBtn;
	let pauseBtn;
	let stopBtn;
	let scrub;
	let timeEl;

	onMount(() => {
		if (!deck) return;

		// 1️⃣ Create player
		const player = createTaleemPlayer({
			mount: appEl,
			deck
		});

		// 2️⃣ Create timer
		const timer = deck.audio
			? createAudioTimer(`/audio/${deck.audio}`)
			: createSilentTimer();

		const duration = getDeckEndTime(deck);

		// 3️⃣ Start playback loop
		startLoop({
			player,
			timer,
			duration,
			ui: { playBtn, pauseBtn, stopBtn, scrub, timeEl }
		});
	});
</script>

<style>
.deck {
	position: relative;
	height: 100vh;
	overflow: hidden;
}

/* Player render surface */
.player-root {
	height: 100%;
}

/* Floating navbar */
.navbar-overlay {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 10;
	background: rgba(255, 255, 255, 0.95);
	backdrop-filter: blur(4px);
}
</style>

<div class="deck">

	<!-- Player Mount -->
	<div class="player-root" bind:this={appEl}></div>

	<!-- Floating NavBar -->
	<div class="navbar-overlay">
		<BottomNavBar
			{onToggle}
			{backHref}
			bind:playBtn
			bind:pauseBtn
			bind:stopBtn
			bind:scrub
			bind:timeEl
		/>
	</div>

</div>