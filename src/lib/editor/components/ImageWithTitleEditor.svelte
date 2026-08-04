<!-- src/editor/components/ImageWithTitleEditor.svelte -->

<script>
    export let slide;
  
    $: items = slide.data || [];
    $: imageItem = items.find(d => d.name === "image");
    $: titleItem = items.find(d => d.name === "title");
  
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
  
    .preview img {
      max-width: 100%;
      border: 1px solid #333;
      border-radius: 6px;
    }
  
    .warning {
      color: #f87171;
      font-size: 12px;
      margin-bottom: 10px;
    }
  </style>
  
  <div class="slide-editor">
  
    <input
      placeholder="Enter title (required)"
      bind:value={titleItem.content}
      on:input={update}
    />
  
    <input
      placeholder="Enter image URL (required)"
      bind:value={imageItem.content}
      on:input={update}
    />
  
    {#if !titleItem.content || !imageItem.content}
      <div class="warning">Title and image are required</div>
    {/if}
  
    {#if imageItem.content}
      <div class="preview">
        <img src={imageItem.content} alt="" />
      </div>
    {/if}
  
  </div>