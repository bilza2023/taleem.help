<!-- src/editor/components/FillImageEditor.svelte -->

<script>
    export let slide;
  
    $: items = slide.data || [];
    $: imageItem = items.find(d => d.name === "image");
  
    function update() {
      slide.data = [...items];
    }
  </script>
  
  <style>
    .slide-editor {
      padding: 16px;
      border-bottom: 1px solid #222;
    }
  
    input {
      width: 100%;
      padding: 10px;
      background: #111;
      border: 1px solid #333;
      color: #fff;
      border-radius: 6px;
      margin-bottom: 10px;
    }
  
    .preview {
      margin-top: 10px;
    }
  
    .preview img {
      width: 100%;
      border-radius: 6px;
      border: 1px solid #333;
    }
  
    .warning {
      color: #f87171;
      font-size: 12px;
    }
  </style>
  
  <div class="slide-editor">
  
    <input
      placeholder="Enter image URL (required)"
      bind:value={imageItem.content}
      on:input={update}
    />
  
    {#if !imageItem.content}
      <div class="warning">Image is required</div>
    {/if}
  
    {#if imageItem.content}
      <div class="preview">
        <img src={imageItem.content} alt="" />
      </div>
    {/if}
  
  </div>