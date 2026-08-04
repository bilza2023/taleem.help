<!-- src/editor/components/KeyIdeasEditor.svelte -->

<script>
  import Icons from "../js/Icons.js";

  export let slide;

  $: items = slide.data || [];
  $: cards = items.filter(d => d.name === "card");

  const iconList = Object.values(Icons);

  function update() {
    slide.data = [...items];
  }

  function addCard() {
    if (cards.length >= 4) return;
    items.push({ name: "card", icon: iconList[0], label: "" });
    slide.data = [...items];
  }

  function deleteCard(i) {
    if (cards.length <= 1) return;

    const index = items.findIndex(
      d => d.name === "card" && d === cards[i]
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

  .card-row {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
    align-items: center;
  }

  input, select {
    padding: 8px;
    background: #111;
    border: 1px solid #333;
    color: #fff;
    border-radius: 6px;
  }

  .icon {
    width: 80px;
  }

  .label {
    flex: 1;
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

  .preview {
    display: flex;
    gap: 10px;
    margin-top: 12px;
    flex-wrap: wrap;
  }

  .card {
    width: 100px;
    padding: 10px;
    background: #111;
    border: 1px solid #333;
    border-radius: 8px;
    text-align: center;
  }

  .card .icon {
    font-size: 20px;
    margin-bottom: 4px;
  }

  .card .label {
    font-size: 12px;
    color: #aaa;
  }

  .warning {
    color: #f87171;
    font-size: 12px;
    margin-top: 6px;
  }
</style>

<div class="slide-editor">

  {#each cards as c, i}
    <div class="card-row">

      <!-- Icon dropdown -->
      <select
        class="icon"
        bind:value={c.icon}
        on:change={update}
      >
        {#each iconList as icon}
          <option value={icon}>
            {icon}
          </option>
        {/each}
      </select>

      <!-- Label -->
      <input
        class="label"
        placeholder={`Idea ${i + 1}`}
        bind:value={c.label}
        on:input={update}
      />

      <button on:click={() => deleteCard(i)}>✖</button>
    </div>
  {/each}

  <button class="add-btn" on:click={addCard}>
    + Add Idea
  </button>

  {#if cards.length === 0}
    <div class="warning">At least one idea required</div>
  {/if}

  {#if cards.length >= 4}
    <div class="warning">Maximum 4 ideas allowed</div>
  {/if}

  <!-- Preview -->
  <div class="preview">
    {#each cards as c}
      <div class="card">
        <div class="icon">{c.icon}</div>
        <div class="label">{c.label}</div>
      </div>
    {/each}
  </div>

</div>