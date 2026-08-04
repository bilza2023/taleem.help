<!-- src/editor/components/QuoteEditor.svelte -->

<script>
    export let slide;
  
    $: items = slide.data || [];
    $: quoteItem = items.find(d => d.name === "quote");
    $: authorItem = items.find(d => d.name === "author");
  
    function update() {
      slide.data = [...items];
    }
  </script>
  
  <style>
    .slide-editor {
      padding: 16px;
      border-bottom: 1px solid #222;
    }
  
    textarea, input {
      width: 100%;
      padding: 10px;
      background: #111;
      border: 1px solid #333;
      color: #fff;
      border-radius: 6px;
      margin-bottom: 10px;
    }
  
    textarea {
      min-height: 100px;
      resize: vertical;
    }
  
    .preview {
      margin-top: 10px;
      padding: 10px;
      border-left: 3px solid #555;
      background: #0f0f0f;
    }
  
    .preview p {
      margin: 0 0 6px 0;
      font-style: italic;
    }
  
    .preview footer {
      font-size: 12px;
      color: #aaa;
      text-align: right;
    }
  
    .warning {
      color: #f87171;
      font-size: 12px;
    }
  </style>
  
  <div class="slide-editor">
  
    <textarea
      placeholder="Enter quote (required)"
      bind:value={quoteItem.content}
      on:input={update}
    ></textarea>
  
    <input
      placeholder="Enter author (optional)"
      bind:value={authorItem.content}
      on:input={update}
    />
  
    {#if !quoteItem.content}
      <div class="warning">Quote is required</div>
    {/if}
  
    <!-- Preview -->
    {#if quoteItem.content}
      <div class="preview">
        <p>{quoteItem.content}</p>
        {#if authorItem.content}
          <footer>{authorItem.content}</footer>
        {/if}
      </div>
    {/if}
  
  </div>