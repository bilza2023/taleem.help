<!-- src/editor/components/TwoColumnTextEditor.svelte -->

<script>
  export let slide;

  $: items = slide.data || [];

  $: titleItems = items.filter(d => d.name === "title");
  $: leftItems = items.filter(d => d.name === "left");
  $: rightItems = items.filter(d => d.name === "right");

  function update() {
    slide.data = [...items];
  }

  function addLeft() {
    items.push({ name: "left", content: "" });
    slide.data = [...items];
  }

  function addRight() {
    items.push({ name: "right", content: "" });
    slide.data = [...items];
  }

  function deleteLeft(i) {
    if (leftItems.length <= 1) return;

    const index = items.findIndex(
      (d) => d.name === "left" && d === leftItems[i]
    );

    if (index !== -1) {
      items.splice(index, 1);
      slide.data = [...items];
    }
  }

  function deleteRight(i) {
    if (rightItems.length <= 1) return;

    const index = items.findIndex(
      (d) => d.name === "right" && d === rightItems[i]
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

  .columns {
    display: flex;
    gap: 10px;
  }

  .col {
    flex: 1;
  }

  input {
    width: 100%;
    margin-bottom: 6px;
    padding: 8px;
    background: #111;
    border: 1px solid #333;
    color: #fff;
    border-radius: 6px;
  }

  .row {
    display: flex;
    gap: 6px;
    margin-bottom: 6px;
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

  .add-btn {
    margin-top: 6px;
  }

  .title {
    font-size: 13px;
    color: #aaa;
    margin-bottom: 6px;
  }
</style>

<div class="slide-editor">

  {#each titleItems as item}
    <input
      placeholder="Title (optional)"
      bind:value={item.content}
      on:input={update}
    />
  {/each}

  <div class="columns">

    <!-- LEFT -->
    <div class="col">
      <div class="title">Left</div>

      {#each leftItems as item, i}
        <div class="row">
          <input
            placeholder={`Left ${i + 1}`}
            bind:value={item.content}
            on:input={update}
          />
          <button on:click={() => deleteLeft(i)}>✖</button>
        </div>
      {/each}

      <button class="add-btn" on:click={addLeft}>
        + Add Left
      </button>
    </div>

    <!-- RIGHT -->
    <div class="col">
      <div class="title">Right</div>

      {#each rightItems as item, i}
        <div class="row">
          <input
            placeholder={`Right ${i + 1}`}
            bind:value={item.content}
            on:input={update}
          />
          <button on:click={() => deleteRight(i)}>✖</button>
        </div>
      {/each}

      <button class="add-btn" on:click={addRight}>
        + Add Right
      </button>
    </div>

  </div>

</div>