<!-- src/lib/editor/slides/FillImageEditor.svelte -->

<script>
  export let slide;
</script>

<input
  bind:value={slide.data[0].content}
  placeholder="Background image filename"
/>