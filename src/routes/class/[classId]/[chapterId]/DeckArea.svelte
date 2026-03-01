<script>
	import { onMount } from 'svelte';
	import PlayerMount from './PlayerMount.svelte';
	import BottomNavBar from './BottomNavBar.svelte';

	export let deckKey;
	export let onToggle;
	export let backHref = '/';

	let playBtn;
	let pauseBtn;
	let stopBtn;
	let scrub;
	let timeEl;

	onMount(async () => {
		if (!deckKey) return;

		const {
			createAudioTimer,
			createSilentTimer,
			getDeckEndTime,
			startLoop
		} = await import('$lib/player/taleem-player-app.js');

		const res = await fetch(`/decks/${deckKey}.json`);
		if (!res.ok) return;

		const deck = await res.json();

		let timer = deck.audio
			? createAudioTimer(`/audio/${deck.audio}`)
			: createSilentTimer();

		const duration = getDeckEndTime(deck);

		startLoop({
			player: null, // if your loop expects player, adjust accordingly
			timer,
			duration,
			ui: { playBtn, pauseBtn, stopBtn, scrub, timeEl }
		});
	});
</script>

<style>
.deck {
	flex: 1;
	display: flex;
	flex-direction: column;
	min-height: 0;
}
</style>

<div class="deck">
	<PlayerMount {deckKey} />

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