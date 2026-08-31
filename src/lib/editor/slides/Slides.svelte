<!-- /home/bilal-tariq/00--TALEEM/taleem.help/src/lib/editor/slides/Slides.svelte-->

<script>
  import TitleAndSubtitle from "./templates/TitleAndSubtitle.svelte";
  import TitleAndParaEditor from "./templates/TitleAndParaEditor.svelte";
  import BulletListEditor from "./templates/BulletListEditor.svelte";
  import TwoColumnTextEditor from "./templates/TwoColumnTextEditor.svelte";
  import ImageSlideEditor from "./templates/ImageSlideEditor.svelte";
  import FillImageEditor from "./templates/FillImageEditor.svelte";
  import ImageWithTitleEditor from "./templates/ImageWithTitleEditor.svelte";
  import ImageWithCaptionEditor from "./templates/ImageWithCaptionEditor.svelte";
  import ImageLeftBulletsRightEditor from "./templates/ImageLeftBulletsRightEditor.svelte";
  import ImageRightBulletsLeftEditor from "./templates/ImageRightBulletsLeftEditor.svelte";
  import TableEditor from "./templates/TableEditor.svelte";
  import BarChartEditor from "./templates/BarChartEditor.svelte";
  import ProgressbarEditor from "./templates/ProgressbarEditor.svelte";
  import QuoteEditor from "./templates/QuoteEditor.svelte";
  import KeyIdeasEditor from "./templates/KeyIdeasEditor.svelte";
  import EqEditor from "./templates/EqEditor.svelte";

  import SlideHeader from "./components/SlideHeader.svelte";
  export let deck;

  $: slides = deck?.deck || [];
  export let runningTime;

  let collapsed = {};

  function setStart(i) {

	deck.deck[i].start = runningTime;

	if (i > 0) {

		deck.deck[i - 1].end = runningTime;

	}

	deck.deck = [...deck.deck];

}
function startChanged(i, value) {
  deck.deck[i].start = Number(value);

  if (i > 0) {
    deck.deck[i - 1].end = Number(value);
  }

  deck.deck = [...deck.deck];
}
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

<SlideHeader

	slide={slide}
	index={i}
	collapsed={collapsed[i]}

	isLast={i === slides.length - 1}

	onToggle={() => toggleSlide(i)}
	onMoveUp={() => moveUp(i)}
	onMoveDown={() => moveDown(i)}
	onDelete={() => deleteSlide(i)}

	onSetStart={() => setStart(i)}
  onStartChange={(value) => startChanged(i, value)}
	onSetEnd={() => slide.end = runningTime}

/>

      <!-- Body -->

      {#if !collapsed[i]}

        <div class="slide-body">
          {#if slide.type === "titleAndSubtitle"}

            <TitleAndSubtitle {slide} {runningTime} />

          {:else if slide.type === "titleAndPara"}

            <TitleAndParaEditor {slide} {runningTime} />

          {:else if slide.type === "bulletList"}

            <BulletListEditor {slide} {runningTime} />

          {:else if slide.type === "twoColumnText"}

            <TwoColumnTextEditor {slide} {runningTime} />

          {:else if slide.type === "imageSlide"}

            <ImageSlideEditor {slide} {runningTime} />

          {:else if slide.type === "fillImage"}

            <FillImageEditor {slide} {runningTime} />

          {:else if slide.type === "imageWithTitle"}

            <ImageWithTitleEditor {slide} {runningTime} />

          {:else if slide.type === "imageWithCaption"}

            <ImageWithCaptionEditor {slide} {runningTime} />

          {:else if slide.type === "imageLeftBulletsRight"}

            <ImageLeftBulletsRightEditor {slide} {runningTime} />

          {:else if slide.type === "imageRightBulletsLeft"}

            <ImageRightBulletsLeftEditor {slide} {runningTime} />

          {:else if slide.type === "table"}

            <TableEditor {slide} {runningTime} />

          {:else if slide.type === "barChart"}

            <BarChartEditor {slide} {runningTime} />

          {:else if slide.type === "progressbar"}

            <ProgressbarEditor {slide} {runningTime} />

          {:else if slide.type === "quoteSlide"}

            <QuoteEditor {slide} {runningTime} />

          {:else if slide.type === "keyIdeasSlide"}

            <KeyIdeasEditor {slide} {runningTime} />

          {:else if slide.type === "eq"}

            <EqEditor {slide} {runningTime} />

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