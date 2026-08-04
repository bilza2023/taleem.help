<!-- src/lib/editor/Slides.svelte -->

<script>
  import TitleAndSubtitle from "./slides/TitleAndSubtitle.svelte";
  import TitleAndParaEditor from "./slides/TitleAndParaEditor.svelte";
  import BulletListEditor from "./slides/BulletListEditor.svelte";
  import TwoColumnTextEditor from "./slides/TwoColumnTextEditor.svelte";
  import ImageSlideEditor from "./slides/ImageSlideEditor.svelte";
  import FillImageEditor from "./slides/FillImageEditor.svelte";
  import ImageWithTitleEditor from "./slides/ImageWithTitleEditor.svelte";
  import ImageWithCaptionEditor from "./slides/ImageWithCaptionEditor.svelte";
  import ImageLeftBulletsRightEditor from "./slides/ImageLeftBulletsRightEditor.svelte";
  import ImageRightBulletsLeftEditor from "./slides/ImageRightBulletsLeftEditor.svelte";
  import TableEditor from "./slides/TableEditor.svelte";
  import BarChartEditor from "./slides/BarChartEditor.svelte";
  import ProgressbarEditor from "./slides/ProgressbarEditor.svelte";
  import QuoteEditor from "./slides/QuoteEditor.svelte";
  import KeyIdeasEditor from "./slides/KeyIdeasEditor.svelte";
  import EqEditor from "./slides/EqEditor.svelte";

  export let deck;

  $: slides = deck?.deck || [];

  let collapsed = {};

  function toggleSlide(i) {

    collapsed[i] = !collapsed[i];
    collapsed = { ...collapsed };

  }

  function moveUp(i) {

    if (i === 0) return;

    const arr = deck.deck;

    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];

    deck.deck = [...arr];

  }

  function moveDown(i) {

    const arr = deck.deck;

    if (i === arr.length - 1) return;

    [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];

    deck.deck = [...arr];

  }

  function deleteSlide(i) {

    const arr = deck.deck;

    arr.splice(i, 1);

    deck.deck = [...arr];

    const map = {};

    arr.forEach((_, idx) => {

      map[idx] = collapsed[idx] || false;

    });

    collapsed = map;

  }
</script>



  {#if slides.length === 0}
    <p class="empty">No slides</p>
  {/if}

  {#each slides as slide, i}

    <div class="slide">

      <!-- Header -->

      <div class="slide-header">

        <div class="left">

          <button on:click={() => toggleSlide(i)}>
            {collapsed[i] ? "▶" : "▼"}
          </button>

          <span>
            #{i + 1} — {slide.type}
            <small style="margin-left:10px;color:#888;">
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

      <!-- Body -->

      {#if !collapsed[i]}

        <div class="slide-body">
          {#if slide.type === "titleAndSubtitle"}

            <TitleAndSubtitle {slide} />

          {:else if slide.type === "titleAndPara"}

            <TitleAndParaEditor {slide} />

          {:else if slide.type === "bulletList"}

            <BulletListEditor {slide} />

          {:else if slide.type === "twoColumnText"}

            <TwoColumnTextEditor {slide} />

          {:else if slide.type === "imageSlide"}

            <ImageSlideEditor {slide} />

          {:else if slide.type === "fillImage"}

            <FillImageEditor {slide} />

          {:else if slide.type === "imageWithTitle"}

            <ImageWithTitleEditor {slide} />

          {:else if slide.type === "imageWithCaption"}

            <ImageWithCaptionEditor {slide} />

          {:else if slide.type === "imageLeftBulletsRight"}

            <ImageLeftBulletsRightEditor {slide} />

          {:else if slide.type === "imageRightBulletsLeft"}

            <ImageRightBulletsLeftEditor {slide} />

          {:else if slide.type === "table"}

            <TableEditor {slide} />

          {:else if slide.type === "barChart"}

            <BarChartEditor {slide} />

          {:else if slide.type === "progressbar"}

            <ProgressbarEditor {slide} />

          {:else if slide.type === "quoteSlide"}

            <QuoteEditor {slide} />

          {:else if slide.type === "keyIdeasSlide"}

            <KeyIdeasEditor {slide} />

          {:else if slide.type === "eq"}

            <EqEditor {slide} />

          {:else}

            <div class="fallback">
              Editor not implemented yet: {slide.type}
            </div>

          {/if}


        </div>

      {/if}

    </div>

  {/each}



  <style>

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

  .fallback {
    color: #777;
    font-size: 13px;
  }
  </style>