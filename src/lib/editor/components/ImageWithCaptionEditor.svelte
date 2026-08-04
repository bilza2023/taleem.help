<!-- src/editor/components/ImageWithCaptionEditor.svelte -->

<script>
    export let slide;
  
    $: items = slide.data || [];
    $: imageItem = items.find(d => d.name === "image");
    $: captionItem = items.find(d => d.name === "caption");
  
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
  
    .preview figcaption {
      color: #aaa;
      font-size: 13px;
      margin-top: 6px;
    }
  
    .warning {
      color: #f87171;
      font-size: 12px;
      margin-bottom: 10px;
    }
  </style>
  
  <div class="slide-editor">
  
    <input
      placeholder="Enter image URL (required)"
      bind:value={imageItem.content}
      on:input={update}
    />
  
    <input
      placeholder="Enter caption (required)"
      bind:value={captionItem.content}
      on:input={update}
    />
  
    {#if !imageItem.content || !captionItem.content}
      <div class="warning">Image and caption are required</div>
    {/if}
  
    {#if imageItem.content}
      <figure class="preview">
        <img src={imageItem.content} alt="" />
        {#if captionItem.content}
          <figcaption>{captionItem.content}</figcaption>
        {/if}
      </figure>
    {/if}
  
  </div>