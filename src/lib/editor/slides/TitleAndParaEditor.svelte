
<!-- src/lib/editor/slides/TitleAndParaEditor.svelte -->

<script>
  export let slide;
</script>

<input
  bind:value={slide.data[0].content}
  placeholder="Title"
/>

<textarea
  bind:value={slide.data[1].content}
  placeholder="Paragraph"
></textarea>