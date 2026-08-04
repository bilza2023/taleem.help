<script>
  export let slide;
  export let currentTime = 0;

  let activeIndex = 0;

  const lineTypes = ['heading', 'math', 'text'];
  const spTypes = ['spText', 'spImage', 'spMath'];

  $: lines = slide.data || [];
  $: activeLine = lines[activeIndex] || {};
  $: spItems = activeLine.spItems || [];

  function addLine(type = 'heading') {
    lines.push({
      name: "line",
      type,
      content: "New " + type,
      showAt: 0,
      spItems: []
    });

    slide.data = [...lines];
    activeIndex = lines.length - 1;
  }

  function deleteLine(i) {
    lines.splice(i, 1);
    slide.data = [...lines];

    if (activeIndex >= lines.length) {
      activeIndex = lines.length - 1;
    }
  }

  function setLineTime(line) {
    line.showAt = currentTime;
    slide.data = [...lines];
  }

  function addSpItem(type = 'spText') {
    if (!activeLine.spItems) activeLine.spItems = [];

    activeLine.spItems.push({
      type,
      content: "New " + type
    });

    slide.data = [...lines];
  }

  function deleteSpItem(i) {
    activeLine.spItems.splice(i, 1);
    slide.data = [...lines];
  }
</script>

<div class="eq-editor">

  <!-- LEFT -->
  <div class="left">

    {#each lines as line, i}
      <div class="eq-line {i === activeIndex ? 'active' : ''}" on:click={() => activeIndex = i}>

        <textarea bind:value={line.content}></textarea>

        <!-- TOOLBAR (BOTTOM NOW) -->
        <div class="toolbar">

          <select bind:value={line.type}>
            {#each lineTypes as t}
              <option value={t}>{t}</option>
            {/each}
          </select>

          <span class="time">⏱ {line.showAt}</span>

          <button class="time-btn" on:click|stopPropagation={() => setLineTime(line)}>⏱</button>
          <button class="delete-btn" on:click|stopPropagation={() => deleteLine(i)}>🗑</button>

        </div>

      </div>
    {/each}

    <!-- ADD LINE -->
    <div class="bottom-toolbar">
      <button on:click={() => addLine('heading')}>🅣</button>
      <button on:click={() => addLine('math')}>∑</button>
      <button on:click={() => addLine('text')}>✎</button>
    </div>

  </div>

  <!-- RIGHT -->
  <div class="right">

    <h4>Side Panel</h4>

    {#each spItems as item, i}
      <div class="sp-item">

        {#if item.type === 'spImage'}
          <input type="text" bind:value={item.content} />
          <img src={item.content} alt="" />
        {:else}
          <textarea bind:value={item.content}></textarea>
        {/if}

        <!-- TOOLBAR (BOTTOM NOW) -->
        <div class="toolbar">

          <select bind:value={item.type}>
            {#each spTypes as t}
              <option value={t}>{t}</option>
            {/each}
          </select>

          <button class="delete-btn" on:click={() => deleteSpItem(i)}>🗑</button>

        </div>

      </div>
    {/each}

    <!-- ADD SP -->
    <div class="bottom-toolbar">
      <button on:click={() => addSpItem('spText')}>📝</button>
      <button on:click={() => addSpItem('spMath')}>∑</button>
      <button on:click={() => addSpItem('spImage')}>🖼</button>
    </div>

  </div>

</div>

<style>
  .eq-editor {
    display: flex;
    gap: 20px;
  }

  .left {
    width: 60%;
  }

  .right {
    width: 40%;
    border-left: 1px solid #2a2a2a;
    padding-left: 14px;
  }

  /* LINE */
  .eq-line {
    border: 1px solid #262626;
    margin-bottom: 12px;
    border-radius: 10px;
    padding: 10px;
    background: #121212;
    transition: all 0.15s ease;
  }

  .eq-line:hover {
    border-color: #3a3a3a;
  }

  .eq-line.active {
    border-color: #4ade80;
    background: #052e1b;
  }

  /* SP */
  .sp-item {
    border: 1px solid #262626;
    margin-bottom: 12px;
    border-radius: 10px;
    padding: 10px;
    background: #121212;
  }

  textarea, input {
    width: 100%;
    background: #000;
    color: #fff;
    border: 1px solid #333;
    border-radius: 6px;
    padding: 6px;
    font-size: 13px;
  }

  /* TOOLBAR */
  .toolbar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    padding-top: 6px;
    border-top: 1px solid #222;
  }

  select {
    background: #000;
    color: #fff;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 3px 6px;
  }

  .time {
    font-size: 12px;
    color: #93c5fd;
    margin-left: auto;
  }

  .time-btn {
    background: #1e3a8a;
    color: #93c5fd;
    border-radius: 5px;
    border: none;
    padding: 4px 6px;
  }

  .delete-btn {
    background: #7f1d1d;
    color: #fca5a5;
    border-radius: 5px;
    border: none;
    padding: 4px 6px;
  }

  .bottom-toolbar {
    margin-top: 12px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .bottom-toolbar button {
    background: #1f2937;
    color: #ddd;
    border: none;
    padding: 7px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.15s;
  }

  .bottom-toolbar button:hover {
    background: #374151;
  }

  img {
    max-width: 100%;
    margin-top: 8px;
    border-radius: 6px;
  }

  h4 {
    margin-bottom: 12px;
    color: #ccc;
  }
</style>