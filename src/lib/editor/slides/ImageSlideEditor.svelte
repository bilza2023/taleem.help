
<!-- src/lib/editor/slides/ImageSlideEditor.svelte -->

<script>
  export let slide;
</script>

<input
  bind:value={slide.data[0].content}
  placeholder="Image filename"
/>