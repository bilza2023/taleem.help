<!-- src/editor/components/BarChartEditor.svelte -->

<script>
    export let slide;
  
    $: items = slide.data || [];
    $: bars = items.filter(d => d.name === "bar");
  
    function update() {
      slide.data = [...items];
    }
  
    function addBar() {
      items.push({ name: "bar", label: "", value: 0 });
      slide.data = [...items];
    }
  
    function deleteBar(i) {
      if (bars.length <= 1) return;
  
      const index = items.findIndex(
        d => d.name === "bar" && d === bars[i]
      );
  
      if (index !== -1) {
        items.splice(index, 1);
        slide.data = [...items];
      }
    }
  
    $: max = Math.max(...bars.map(b => Number(b.value) || 0), 1);
  </script>
  
  <style>
    .slide-editor {
      padding: 16px;
      border-bottom: 1px solid #222;
    }
  
    .row {
      display: flex;
      gap: 6px;
      margin-bottom: 6px;
      align-items: center;
    }
  
    input {
      padding: 8px;
      background: #111;
      border: 1px solid #333;
      color: #fff;
      border-radius: 6px;
    }
  
    .label {
      flex: 2;
    }
  
    .value {
      width: 80px;
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
      margin-top: 12px;
    }
  
    .bar-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
    }
  
    .bar-label {
      width: 80px;
      font-size: 12px;
      color: #aaa;
    }
  
    .bar-track {
      flex: 1;
      height: 10px;
      background: #222;
      border-radius: 6px;
      overflow: hidden;
    }
  
    .bar-fill {
      height: 100%;
      background: linear-gradient(90deg, #22c55e, #3b82f6);
    }
  
    .bar-value {
      width: 40px;
      font-size: 12px;
      color: #ccc;
      text-align: right;
    }
  
    .add-btn {
      margin-top: 6px;
    }
  
    .warning {
      color: #f87171;
      font-size: 12px;
    }
  </style>
  
  <div class="slide-editor">
  
    {#each bars as bar, i}
      <div class="row">
        <input
          class="label"
          placeholder="Label"
          bind:value={bar.label}
          on:input={update}
        />
  
        <input
          class="value"
          type="number"
          min="0"
          bind:value={bar.value}
          on:input={update}
        />
  
        <button on:click={() => deleteBar(i)}>✖</button>
      </div>
    {/each}
  
    <button class="add-btn" on:click={addBar}>+ Add Bar</button>
  
    {#if bars.length === 0}
      <div class="warning">At least one bar required</div>
    {/if}
  
    <!-- Preview -->
    <div class="preview">
      {#each bars as bar}
        <div class="bar-row">
          <div class="bar-label">{bar.label}</div>
  
          <div class="bar-track">
            <div
              class="bar-fill"
              style="width: {(Number(bar.value) / max) * 100}%"
            ></div>
          </div>
  
          <div class="bar-value">{bar.value}</div>
        </div>
      {/each}
    </div>
  
  </div>