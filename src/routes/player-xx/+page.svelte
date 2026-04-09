<script>
	import { onMount, onDestroy } from "svelte";
	import { renderTaleemSlide } from "taleem-slides";
	import { runActions } from "taleem-action-runner";
	import { Timer } from "taleem-pam";
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	import { getDeckEndTime } from "../../lib/utils/index.js";
	import { getSlideAtTime } from "../../lib/utils/getSlideAtTime.js";
	import { resolveAssetPaths } from "../../lib/utils/resolveAssetPaths.js";

	// --- state ---
	let deck = $state(null);
	let timer = $state(null);

	let deckEndTime = $state(0);
	let root = $state(null);
	let html = $state('');
	let actions = $state([]);
	let groups = $state({});

	let currentTime = $state(0);
	let currentSlide = $state(null);

	// --- controls ---
	function handlePlayBtn() {
		timer?.play();
	}

	function handlePauseBtn() {
		timer?.pause();
	}

	function handleStopBtn() {
		timer?.pause();
		timer?.seek(0);
	}

	function handleScrub(e) {
		if (!timer) return;
		const t = parseFloat(e.target.value);
		timer.seek(t);
	}

	// --- load data ---
  onMount(async () => {
	timer = new Timer();

	const params = get(page).url.searchParams;
	const deckId = params.get('deck');

	const res = await fetch(`/content/decks/GoldenDeckV2-8Apr2026.json`);
	const json = await res.json();
	deck = resolveAssetPaths(json, "/content/images/");

	deckEndTime = getDeckEndTime(deck);
	timer.duration = deckEndTime; // 🔥 critical fix
});

	// --- main loop ---
	let interval;

	onMount(() => {
		interval = setInterval(() => {
			if (!timer || !deck) return;

			currentTime = timer.now();

			if (deckEndTime < currentTime) {
				clearInterval(interval);
			}

			const slide = getSlideAtTime(deck, currentTime);

			if (slide !== currentSlide) {
				currentSlide = slide;

				if (slide) {
					const result = renderTaleemSlide(slide);
					html = result.html;
					actions = result.actions;
					groups = result.groups;
				}
			}

			runActions(actions, groups, currentTime, root);
		}, 100);
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});

	// --- initial render ---
	$effect(() => {
		if (!deck) return;

		const result = renderTaleemSlide(deck.deck[0]);
		html = result.html;
		actions = result.actions;
		groups = result.groups;
	});
</script>

<div class="root">
	<div class="stage" bind:this={root}>
		{@html html}
	</div>

	<!-- Bottom NavBar -->
	<div class="navbar">
		<div class="controls">
			<button on:click={handlePlayBtn}>▶</button>
			<button on:click={handlePauseBtn}>⏸</button>
			<button on:click={handleStopBtn}>⏹</button>
			<span class="time">{currentTime.toFixed(1)}/{deckEndTime}s</span>
		</div>

		<div class="scrub-wrap">
			<input
				type="range"
				min="0"
				max={deckEndTime}
				step="1"
				value={currentTime || 0}
				on:input={handleScrub}
			/>
		</div>

		<div class="right">
			<a href="/">←</a>
		</div>
	</div>
</div>

<style>
	@import "../../css/themes/dark.css";
	@import "../../css/index.css";
	@import "../../app.css";

	:global(body) {
		margin: 0;
		padding: 0;
		height: 100vh;
		overflow: hidden;
		background-color: #081b7a;
	}

	.root {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
	}

	.stage {
		flex: 1;
		overflow: hidden;
		position: relative;
	}

	.navbar {
		height: 40px;
		display: flex;
		align-items: center;
		padding: 0 10px;
		gap: 8px;
		border-top: 1px solid #333;
		color: white;
	}

	.controls {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.time {
		font-size: 13px;
		white-space: nowrap;
	}

	.scrub-wrap {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.scrub-wrap input {
		width: 100%;
	}

	.right {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	button,
	a {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 16px;
		text-decoration: none;
		color: white;
	}
</style>