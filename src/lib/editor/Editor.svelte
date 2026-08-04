<script>
  import Nav from './Nav.svelte';
  import { EditorRegistry } from "./js/editorRegistry.js";
  import { slideFactory } from './js/slideFactory';
  import { finalizeDeck } from "./js/finalizeDeck.js";
  import { assignMockTimings } from "./js/assignMockTimings.js";

  export let deck = { deck: [] };
  export let currentTime = 0;
  
  export let onExport = (deck) => {
  console.log("EXPORT CALLED", deck);
  };

  $: slides = deck?.deck || [];

  ///////////////////////////////////////////
  function addSlide(type) {
  const fn = slideFactory[type];
  if (!fn) return;

  const baseSlide = fn();

  const arr = deck.deck;
  const last = arr[arr.length - 1];

  const start = last ? last.end : 0;
  const duration = 5; // default seconds per slide
  const end = start + duration;

  const newSlide = {
    ...baseSlide,
    start,
    end
  };

  deck.deck = [...arr, newSlide];
}
  ///////////////////////////////////////////
  // ---- UI STATE ----
  let collapsed = {};
  let allCollapsed = false;

  // ---- FOLD ----
  function toggleSlide(i) {
    collapsed[i] = !collapsed[i];
    collapsed = { ...collapsed };
  }

  function toggleAll() {
    allCollapsed = !allCollapsed;

    const newState = {};
    slides.forEach((_, i) => {
      newState[i] = allCollapsed;
    });

    collapsed = newState;
  }

  // ---- MOVE ----
  function moveUp(i) {
    if (i === 0) return;

    const arr = deck.deck;

    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];

    deck.deck = [...arr]; // 🔥 trigger
  }

  function moveDown(i) {
    const arr = deck.deck;

    if (i === arr.length - 1) return;

    [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];

    deck.deck = [...arr]; // 🔥 trigger
  }

  // ---- DELETE ----
  function deleteSlide(i) {
    const arr = deck.deck;

    arr.splice(i, 1);

    deck.deck = [...arr]; // 🔥

    // fix collapsed map
    const newCollapsed = {};
    arr.forEach((_, idx) => {
      newCollapsed[idx] = collapsed[idx] || false;
    });

    collapsed = newCollapsed;
  }
  function handleDownload() {
  const result = finalizeDeck(deck);

  if (!result.ok) {
    console.error(result);
    alert("Deck invalid. Check console.");
    return;
  }

  const finalDeck = result.deck; // 🔥 THIS is the fix

  const blob = new Blob(
    [JSON.stringify(finalDeck, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "deck.json";
  a.click();

  URL.revokeObjectURL(url);
}

function handleSave() {
  const result = finalizeDeck(deck);

  if (!result.ok) {
    console.error(result);
    alert("Deck invalid. Check console.");
    return;
  }

  const finalDeck = result.deck;

  // 🔥 call parent
  onExport(finalDeck);

  alert("Deck exported to parent");
}
function handleMockTiming() {
  try {
    // if(deck){
      deck = assignMockTimings(deck);
    // }

    // update editor state (same pattern as others)
    // onExport(deck);

    alert("Mock timings applied");
  } catch (err) {
    console.error(err);
    alert("Failed to apply mock timings");
  }
}
</script>

<div class="editor">
  <!-- NAV -->
  <Nav
  add={addSlide}
  onDownload={handleDownload}
  onSave={handleSave}
  onMockTiming={handleMockTiming}
/>

  {#if slides.length === 0}
    <p class="empty">No slides</p>
  {/if}
  {#each slides as slide, i}
    <div class="slide">

      <!-- HEADER -->
      <div class="slide-header">

        <div class="left">
          <button on:click={() => toggleSlide(i)}>
            {collapsed[i] ? '▶' : '▼'}
          </button>

          <span>
            #{i + 1} — {slide.type}
            <small style="margin-left:10px; color:#888;">
              [{slide.start ?? 0} → {slide.end ?? 0}]
            </small>
          </span>
        </div>
        <div class="right">
          <button on:click={() => moveUp(i)}>⬆</button>
          <button on:click={() => moveDown(i)}>⬇</button>
          <button on:click={() => deleteSlide(i)}>🗑</button>
        </div>

      </div>

      <!-- BODY -->
      {#if !collapsed[i]}
        <div class="slide-body">

          {#if EditorRegistry[slide.type]}
            <svelte:component
              this={EditorRegistry[slide.type]}
              {slide}
              {currentTime}
            />
          {:else}
            <div class="fallback">
              Unknown type: {slide.type}
            </div>
          {/if}

        </div>
      {/if}

    </div>
  {/each}
</div>  

<style>
  .editor {
    padding: 20px;
  }

  .empty {
    color: #777;
  }

  .slide {
    border: 1px solid #333;
    margin-bottom: 14px;
    border-radius: 6px;
    overflow: hidden;
    background: #1a1a1a;
  }

  .slide-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0f172a;
    padding: 6px 10px;
    border-bottom: 1px solid #333;
  }

  .slide-header .left {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .slide-header .right {
    display: flex;
    gap: 6px;
  }

  .slide-body {
    padding: 10px;
  }

  button {
    background: #1e293b;
    border: 1px solid #334155;
    color: #fff;
    padding: 4px 6px;
    cursor: pointer;
  }

  button:hover {
    background: #334155;
  }

  .fallback {
    color: #777;
    font-size: 13px;
  }
</style>