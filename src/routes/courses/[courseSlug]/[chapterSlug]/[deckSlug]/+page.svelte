<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  
  import {
    createTaleemPlayer,
    resolveAssetPaths,
    resolveBackground,
    getDeckEndTime,
    createAudioTimer,
    createSilentTimer,
    startLoop
  } from "$lib/player/taleem-player-app.js";
  
  let deckSlug;
  
  onMount(async () => {
  
    deckSlug = $page.params.deckSlug;
  
    if (!deckSlug) {
      document.body.innerHTML = "<h2>No deck specified</h2>";
      throw new Error("Missing deck key");
    }
  
    const contentBase = "/";
  
    const deckUrl = `${contentBase}decks/${deckSlug}.json`;
    const imageBase = `${contentBase}images/`;
    const audioBase = `${contentBase}audio/`;
  
    const res = await fetch(deckUrl);
  
    if (!res.ok) {
      document.body.innerHTML = "<h2>Deck not found</h2>";
      throw new Error("Deck not found");
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
      mount: "#app",
      deck
    });
  
    const duration = getDeckEndTime(deck);
  
    startLoop({
      player,
      timer,
      duration,
      ui: {
        playBtn: document.getElementById("play-btn"),
        pauseBtn: document.getElementById("pause-btn"),
        stopBtn: document.getElementById("stop-btn"),
        scrub: document.getElementById("scrub"),
        timeEl: document.getElementById("time")
      }
    });
  
  });
  </script>
  
  
  <svelte:head>
    <link rel="stylesheet" href="/player/themes/default.css" />
    <link rel="stylesheet" href="/player/taleem.css" />
  </svelte:head>
  
  
  <div id="app"></div>
  
  <div class="nav-test">
    <button id="play-btn">▶</button>
    <button id="pause-btn">⏸</button>
    <button id="stop-btn">⏹</button>
  
    <span id="time">0.0s</span>
  
    <div class="scrub-wrap">
      <input
        id="scrub"
        type="range"
        min="0"
        max="1"
        step="0.1"
      />
    </div>
  </div>