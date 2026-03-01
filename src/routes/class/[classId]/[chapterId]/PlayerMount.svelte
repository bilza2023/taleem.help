
<script>
	import { onMount } from 'svelte';
	export let deckKey;

	let appEl;

	onMount(async () => {
		if (!deckKey) return;

		const {
			createTaleemPlayer,
			resolveAssetPaths,
			resolveBackground
		} = await import('$lib/player/taleem-player-app.js');

		const deckUrl = `/decks/${deckKey}.json`;
		const imageBase = `/images/`;

		const res = await fetch(deckUrl);
		if (!res.ok) return;

		const deck = await res.json();

		resolveAssetPaths(deck, imageBase);
		resolveBackground(deck, imageBase);

		createTaleemPlayer({
			mount: appEl,
			deck
		});
	});
</script>

<style>
.player-root {
	flex: 1;
	overflow: hidden;
	display: flex;
}
</style>

<div class="player-root">
	<div bind:this={appEl}></div>
</div>