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
  
  <style>
    .slide-editor {
      padding: 16px;
      border-bottom: 1px solid #222;
    }
  
    input, textarea {
      display: block;
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      background: #111;
      border: 1px solid #333;
      color: #fff;
      border-radius: 6px;
      font-size: 14px;
    }
  
    textarea {
      min-height: 100px;
      resize: vertical;
    }
  
    .warning {
      color: #f87171;
      font-size: 12px;
      margin-top: -6px;
      margin-bottom: 10px;
    }
  </style>
  
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