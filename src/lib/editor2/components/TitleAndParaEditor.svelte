<!-- src/editor/components/TitleAndParaEditor.svelte -->

<script>
    export let slide;
  
    $: items = slide.data || [];
  
    $: titleItem = items.find(d => d.name === "title");
    $: paraItem = items.find(d => d.name === "para");
  
    function update() {
      slide.data = [...items];
    }
  </script>

  
  <div class="slide-editor">
  
    <!-- Title (optional) -->
    <input
      placeholder="Enter title (optional)"
      bind:value={titleItem.content}
      on:input={update}
    />
  
    <!-- Para (optional) -->
    <textarea
      placeholder="Enter explanation (optional)"
      bind:value={paraItem.content}
      on:input={update}
    ></textarea>
  
    <!-- Soft validation (matches renderer rule) -->
    {#if !titleItem.content && !paraItem.content}
      <div class="warning">
        At least title or paragraph is required
      </div>
    {/if}
  
  </div>
  <style>
  .warning {
    color: #f87171;
    font-size: 12px;
    margin-top: -6px;
    margin-bottom: 10px;
  }
</style>