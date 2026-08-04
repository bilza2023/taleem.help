<!-- src/lib/editor/slides/QuoteEditor.svelte -->

<script>
  export let slide;
</script>

<textarea
  bind:value={slide.data[0].content}
  placeholder="Quote"
></textarea>

<input
  bind:value={slide.data[1].content}
  placeholder="Author"
/>