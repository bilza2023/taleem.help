
<!-- src/lib/editor/slides/TitleAndSubtitle.svelte -->

<script>
  export let slide;
</script>

<input
  bind:value={slide.data[0].content}
  placeholder="Title"
/>

<input
  bind:value={slide.data[1].content}
  placeholder="Subtitle"
/>