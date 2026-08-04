
<!-- src/lib/editor/Editor.svelte -->

<script>
  import Nav from "./Nav.svelte";
  import { slideFactory } from "./js/slideFactory.js";

  let presentation = {
    version: "deck-v1",
    name: "",
    audio: "",
    background: {},
    deck: []
  };

  function addSlide(type) {
    presentation.deck = [
      ...presentation.deck,
      slideFactory[type]()
    ];
  }

  function handleMockTiming() {}
  function handleSave() {}
  function handleDownload() {}
</script>

<Nav
  add={addSlide}
  onDownload={handleDownload}
  onSave={handleSave}
  onMockTiming={handleMockTiming}
/>

<section class="presentation">

  <input
    bind:value={presentation.name}
    placeholder="Presentation name"
  />

  <input
    bind:value={presentation.audio}
    placeholder="Audio filename"
  />

</section>

{#each presentation.deck as slide}

  <div class="slide">

    <header>
      <strong>{slide.type}</strong>
    </header>

    {#if slide.type === "titleAndSubtitle"}

      <input
        bind:value={slide.data[0].content}
        placeholder="Title"
      />

      <input
        bind:value={slide.data[1].content}
        placeholder="Subtitle"
      />

    {:else if slide.type === "titleAndPara"}

      <input
        bind:value={slide.data[0].content}
        placeholder="Title"
      />

      <textarea
        bind:value={slide.data[1].content}
        placeholder="Paragraph"
      ></textarea>

    {:else if slide.type === "bulletList"}

      <div>Bullet List Editor</div>

    {:else if slide.type === "twoColumnText"}

      <div>Two Column Text Editor</div>

    {:else if slide.type === "imageSlide"}

      <div>Image Slide Editor</div>

    {:else if slide.type === "fillImage"}

      <div>Fill Image Editor</div>

    {:else if slide.type === "imageWithTitle"}

      <div>Image With Title Editor</div>

    {:else if slide.type === "imageWithCaption"}

      <div>Image With Caption Editor</div>

    {:else if slide.type === "imageLeftBulletsRight"}

      <div>Image Left Bullets Right Editor</div>

    {:else if slide.type === "imageRightBulletsLeft"}

      <div>Image Right Bullets Left Editor</div>

    {:else if slide.type === "table"}

      <div>Table Editor</div>

    {:else if slide.type === "barChart"}

      <div>Bar Chart Editor</div>

    {:else if slide.type === "progressbar"}

      <div>Progress Bar Editor</div>

    {:else if slide.type === "quoteSlide"}

      <div>Quote Editor</div>

    {:else if slide.type === "keyIdeasSlide"}

      <div>Key Ideas Editor</div>

    {:else if slide.type === "eq"}

      <div>EQ Editor</div>

    {:else}

      <div>Unknown slide type: {slide.type}</div>

    {/if}

  </div>

{/each}

<style>
  .presentation {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .presentation input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
  }

  .slide {
    margin: 16px;
    padding: 16px;
    border: 1px solid #333;
    border-radius: 8px;
    background: #1a1a1a;
  }

  .slide header {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: bold;
  }

  .slide input,
  .slide textarea {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
  }

  .slide textarea {
    min-height: 120px;
    resize: vertical;
  }
</style>