<script>

	import { onMount, onDestroy } from "svelte";
	import { renderTaleemSlide } from "taleem-slides";
	import { runActions } from "taleem-action-runner";
	import { Timer } from "taleem-pam";

	import { getDeckEndTime } from "../../lib/utils/index.js";
	import { getSlideAtTime } from "../../lib/utils/getSlideAtTime.js";
	import { resolveAssetPaths } from "../../lib/utils/resolveAssetPaths.js";

	import SyllabusBar from "./SyllabusBar.svelte";

	// --- state ---
	let deck = $state(null);
	let timer = $state(null);
	let links = $state([]);

	let deckEndTime = $state(0);
	let root = $state(null);
	let html = $state('');
	let actions = $state([]);
	let groups = $state({});

	let currentTime = $state(0);
	let currentSlide = $state(null);
	let showSidebar = $state(true);

	// --- handlers ---
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
		const t = parseFloat(e.target.value) * (timer.duration ?? 1);
		timer.seek(t);
	}

	function toggleSidebar() {
		showSidebar = !showSidebar;
	}

	// --- load data ---
	onMount(async () => {
		timer = new Timer();

		const res = await fetch("/data/specs/GoldenDeckV2-8Apr2026.json");
		const json = await res.json();
		deck = resolveAssetPaths(json, "/content/images/");

		const resLinks = await fetch("/data/links.json");
		links = await resLinks.json();

		deckEndTime = getDeckEndTime(deck);
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

	// --- initial render (first slide) ---
	$effect(() => {
		if (!deck) return;

		const result = renderTaleemSlide(deck.deck[0]);
		html = result.html;
		actions = result.actions;
		groups = result.groups;
	});
</script>
<div class="root">
  <div class="left">
    <div class="stage" bind:this={root}>
      {@html html}
    </div>

    <!-- ============= Bottom NavBar ============= -->
    <div class="navbar">
      <!-- controls -->
      <div class="controls">
        <button on:click={handlePlayBtn}>▶</button>
        <button on:click={handlePauseBtn}>⏸</button>
        <button on:click={handleStopBtn}>⏹</button>
        <span class="time">{currentTime.toFixed(1)}/{deckEndTime}s</span>
      </div>

      <!-- scrub -->
      <div class="scrub-wrap">
        <input
          type="range"
          min="0"
          max={deckEndTime - 1}
          step="1"
          value={currentTime || 0}
          on:input={handleScrub}
        />
      </div>

      <!-- right -->
      <div class="right">
        <a href="/">←</a>
        <button on:click={toggleSidebar}>▥</button>
      </div>
    </div>
    <!-- ============= Bottom NavBar ============= -->
  </div>

  <div class="sidebar" class:hidden={!showSidebar}>
    <SyllabusBar {links} />
  </div>
</div>

<style>
  @import "../../css/themes/dark.css";
  @import "../../css/index.css";
  @import "../../app.css";

  .correct {
  border: 2px solid #4caf50;
  padding: 6px;
  border-radius: 6px;
}

/* wrong answer */
.wrong {
  border: 2px solid #f44336;
  padding: 6px;
  border-radius: 6px;
}

.remove {
  display:none
}

/* dimmed items */
.dim {
  opacity: 0.35;
  transform: scale(0.98);
}

/* optional future */
.visible {
  opacity: 1;
  transform: translateY(0);
}


/* core classes */
.hidden {
  opacity: 0;
  transform: translateY(8px);
}
  /* .hidden {
    display: none;
  } */

  :global(body) {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    background-color: #081b7a;
  }

  /* 🔥 GRID FIX (core change) */
  .root {
    display: grid;
    grid-template-columns: 1fr 260px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(16, 0, 0, 0.788);
    transition: grid-template-columns 0.28s ease;
  }

  /* when sidebar hidden → collapse column */
  .root:has(.sidebar.hidden) {
    grid-template-columns: 1fr 0px;
  }

  .left {
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
  }

  .stage {
    flex: 1;
    overflow: hidden;
    position: relative;
  }

  .sidebar {
    overflow: hidden;
    border-left: 1px solid #333;
    opacity: 1;
    transition: opacity 0.2s ease;
  }

  .sidebar.hidden {
    opacity: 0;
    border-left: none;
  }

  /* nav bar */

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
    flex-shrink: 0;
  }

  .time {
    font-size: 13px;
    color: white;
    white-space: nowrap;
  }

  .scrub-wrap {
    flex: 1;
    display: flex;
    align-items: center;
    min-width: 0;
  }

  .scrub-wrap input {
    width: 100%;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
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
