<!-- /src/lib/player/Player.svelte -->

<script>
	import { onMount, onDestroy } from "svelte";

	import { runActions } from "taleem-action-runner";

	import { getDeckEndTime } from "./utils/getDeckEndTime.js";
	import { getSlideAtTime } from "./utils/getSlideAtTime.js";
	import { useMath } from "./utils/useMath.js";

	// --- props ---
	let { presentation, timer } = $props();

	// --- state ---
	let deckEndTime = $state(0);

	let root = $state(null);

	let html = $state("");

	let actions = $state([]);
	let groups = $state({});

	let currentTime = $state(0);

	let currentSlide = $state(null);
	let mountedSlide = $state(null);

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

	// --- duration ---
	$effect(() => {
		if (!presentation || !timer) return;

		deckEndTime =
			getDeckEndTime(presentation);

		timer.duration = deckEndTime;
	});
// --- mount slide ---
	function mountSlide(slide) {
	if (!slide) return;

	html = slide.html;

	actions = slide.actions ?? [];

	groups = slide.groups ?? {};

	mountedSlide = slide;

	queueMicrotask(() => {
		if (root) {
			useMath(root);
		}
	});
}

	// --- loop ---
	let interval;

	onMount(() => {
		interval = setInterval(() => {
			if (!timer || !presentation) return;

			currentTime = timer.now();

			if (deckEndTime < currentTime) {
				clearInterval(interval);
			}

			const slide = getSlideAtTime(
				presentation,
				currentTime
			);

			if (slide !== currentSlide) {
				currentSlide = slide;

				if (
					currentSlide &&
					currentSlide !== mountedSlide
				) {
					mountSlide(currentSlide);
				}
			}

			const slideRoot =
	root?.querySelector(".slide");

runActions(
	actions,
	groups,
	currentTime,
	slideRoot
);
		}, 100);
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});

	// --- initial render ---
	$effect(() => {
		if (!presentation?.deck?.length) return;

		if (!mountedSlide) {
			mountSlide(presentation.deck[0]);
		}
	});
</script>

<div class="root">
	<div class="stage" bind:this={root}>
		{@html html}
	</div>

	<div class="navbar">
		<div class="controls">
			<button onclick={handlePlayBtn}>▶</button>

			<button onclick={handlePauseBtn}>⏸</button>

			<button onclick={handleStopBtn}>⏹</button>

			<span class="time">
				{currentTime.toFixed(1)}/{deckEndTime}s
			</span>
		</div>

		<div class="scrub-wrap">
			<input
				type="range"
				min="0"
				max={deckEndTime}
				step="0.1"
				value={currentTime || 0}
				oninput={handleScrub}
			/>
		</div>
	</div>
</div>

<style>
	@import "./css/themes/dark.css";
	@import "./css/index.css";
	@import "./css/app/app.css";
	@import "./css/bulletList.css";
	@import "./css/skeleton.css";
	@import "./css/eq.css";
	
	:global(body) {
		margin: 0;
		padding: 0;
		height: 100vh;
		overflow: hidden;
		background-color: #081b7a;
	}

	:global(.hidden) {
		display: none;
	}

	:global(.dim) {
		opacity: 0.3;
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

	button {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 16px;
		color: white;
	}
</style>