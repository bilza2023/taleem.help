<!-- src/lib/editor/slides/ImageWithCaptionEditor.svelte -->

<script>
  export let slide;
</script>

<input
  bind:value={slide.data[0].content}
  placeholder="Image filename"
/>

<input
  bind:value={slide.data[1].content}
  placeholder="Caption"
/>