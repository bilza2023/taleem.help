<!-- src/editor/components/ImageLeftBulletsRightEditor.svelte -->

<script>
    export let slide;
  
    $: items = slide.data || [];
    $: imageItem = items.find(d => d.name === "image");
    $: bullets = items.filter(d => d.name === "bullet");
  
    function update() {
      slide.data = [...items];
    }
  
    function addBullet() {
      items.push({ name: "bullet", content: "" });
      slide.data = [...items];
    }
  
    function deleteBullet(i) {
      if (bullets.length <= 1) return;
  
      const index = items.findIndex(
        d => d.name === "bullet" && d === bullets[i]
      );
  
      if (index !== -1) {
        items.splice(index, 1);
        slide.data = [...items];
      }
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
  
    .bullet-row {
      display: flex;
      gap: 6px;
      margin-bottom: 6px;
    }
  
    .bullet-row input {
      flex: 1;
      margin-bottom: 0;
    }
  
    button {
      background: #1e293b;
      border: 1px solid #334155;
      color: #fff;
      padding: 4px 6px;
      cursor: pointer;
    }
  
    button:hover {
      background: #334155;
    }
  
    .preview {
      margin-top: 10px;
      display: flex;
      gap: 10px;
    }
  
    .preview img {
      width: 40%;
      border: 1px solid #333;
      border-radius: 6px;
    }
  
    .preview ul {
      flex: 1;
      margin: 0;
      padding-left: 20px;
    }
  
    .warning {
      color: #f87171;
      font-size: 12px;
      margin-bottom: 10px;
    }
  </style>
  
  <div class="slide-editor">
  
    <!-- Image -->
    <input
      placeholder="Enter image URL (required)"
      bind:value={imageItem.content}
      on:input={update}
    />
  
    <!-- Bullets -->
    {#each bullets as b, i}
      <div class="bullet-row">
        <input
          placeholder={`Bullet ${i + 1}`}
          bind:value={b.content}
          on:input={update}
        />
        <button on:click={() => deleteBullet(i)}>✖</button>
      </div>
    {/each}
  
    <button on:click={addBullet}>+ Add Bullet</button>
  
    {#if !imageItem.content || bullets.length === 0}
      <div class="warning">Image and at least one bullet required</div>
    {/if}
  
    <!-- Preview -->
    {#if imageItem.content}
      <div class="preview">
        <img src={imageItem.content} alt="" />
        <ul>
          {#each bullets as b}
            {#if b.content}
              <li>{b.content}</li>
            {/if}
          {/each}
        </ul>
      </div>
    {/if}
  
  </div>