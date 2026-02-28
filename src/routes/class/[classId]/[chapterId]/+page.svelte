<svelte:head>
  <link rel="stylesheet" href="/player/themes/default.css" />
  <link rel="stylesheet" href="/player/taleem.css" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// Routing
	$: classId = $page.params.classId;
	$: chapterId = $page.params.chapterId;
	$: deckKey = $page.url.searchParams.get('deck');

	let showSidebar = true;

	// Player refs
	let appEl;
	let playBtn;
	let pauseBtn;
	let stopBtn;
	let scrub;
	let timeEl;

	function scrollToAnswers() {
		document.getElementById('answers')?.scrollIntoView({ behavior: 'smooth' });
	}

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

		const contentBase = '/';
		const deckUrl = `${contentBase}decks/${deckKey}.json`;
		const imageBase = `${contentBase}images/`;
		const audioBase = `${contentBase}audio/`;

		const res = await fetch(deckUrl);
		if (!res.ok) {
			console.error('Deck not found');
			return;
		}

		const deck = await res.json();

		resolveAssetPaths(deck, imageBase);
		resolveBackground(deck, imageBase);

		let timer;
		if (deck.audio) {
			timer = createAudioTimer(`${audioBase}${deck.audio}`);
		} else {
			timer = createSilentTimer();
		}

		const player = createTaleemPlayer({
			mount: appEl,
			deck
		});

		const duration = getDeckEndTime(deck);

		startLoop({
			player,
			timer,
			duration,
			ui: {
				playBtn,
				pauseBtn,
				stopBtn,
				scrub,
				timeEl
			}
		});
	});
</script>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.topbar {
		position: sticky;
		top: 0;
		z-index: 10;
		background: #111827;
		color: white;
		padding: 8px 16px;
		font-size: 14px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.main {
		display: flex;
		flex: 1;
	}

	.player-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.player-area {
		min-height: calc(100vh - 40px);
		background: #f8fafc;
		display: flex;
		flex-direction: column;
	}

	.nav-test {
		background: #e5e7eb;
		padding: 8px;
		display: flex;
		gap: 8px;
		align-items: center;
	}

	.sidebar {
		width: 280px;
		background: #e2e8f0;
		border-left: 1px solid #cbd5e1;
		padding: 16px;
	}

	.lesson-item {
		padding: 8px;
		margin-bottom: 6px;
		background: white;
		border: 1px solid #cbd5e1;
		cursor: pointer;
	}

	.answers {
		padding: 40px;
		background: #ffffff;
		border-top: 2px solid #e5e7eb;
	}

	.answer-block {
		margin-bottom: 24px;
		padding-bottom: 16px;
		border-bottom: 1px solid #e5e7eb;
	}

	.teacher {
		margin-top: 6px;
		color: #047857;
		font-weight: 500;
	}
</style>

<div class="app">

	<!-- Slim Topbar -->
	<div class="topbar">
		<div>🏠 Home | Class {classId} › Chapter {chapterId}</div>
		<button on:click={() => showSidebar = !showSidebar}>
			Toggle Lessons
		</button>
	</div>

	<div class="main">

		<div class="player-wrapper">

			<!-- Player Mount -->
			<div bind:this={appEl} class="player-area"></div>

			<!-- Bottom Player Controls -->
			<div class="nav-test">
				<button bind:this={playBtn}>▶</button>
				<button bind:this={pauseBtn}>⏸</button>
				<button bind:this={stopBtn}>⏹</button>

				<span bind:this={timeEl}>0.0s</span>

				<div class="scrub-wrap">
					<input
						bind:this={scrub}
						type="range"
						min="0"
						max="1"
						step="0.1"
					/>
				</div>
			</div>

			<!-- Answers Panel -->
			<div class="answers" id="answers">
				<h3>Answers & Clarifications</h3>

				<div class="answer-block">
					<p><strong>Q:</strong> Why is determinant zero?</p>
					<p class="teacher">Teacher: Because rows are proportional.</p>
				</div>

				<div class="answer-block">
					<p><strong>Q:</strong> How to avoid sign mistakes?</p>
					<p class="teacher">Teacher: Expand step-by-step.</p>
				</div>
			</div>

		</div>

		{#if showSidebar}
			<div class="sidebar">
				<h4>Lessons</h4>
				<div class="lesson-item">Intro</div>
				<div class="lesson-item">Exercise 1</div>
				<div class="lesson-item">Revision</div>
			</div>
		{/if}

	</div>
</div>