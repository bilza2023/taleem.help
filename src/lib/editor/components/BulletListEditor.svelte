<script>
  export let slide;

  $: items = Array.isArray(slide.data) ? slide.data : [];

  function update() {
    slide.data = items.map(item => ({
      name: item.name,
      content: item.content || ""
    }));
  }

  function addBullet() {
    items = [...items, { name: "bullet", content: "" }];
    update();
  }

  function deleteBullet(i) {
    const bullets = items.filter(item => item.name === "bullet");
    if (bullets.length <= 1) return;

    const bulletIndexes = items
      .map((item, idx) => ({ item, idx }))
      .filter(x => x.item.name === "bullet");

    const removeIndex = bulletIndexes[i].idx;

    items = items.filter((_, idx) => idx !== removeIndex);
    update();
  }
</script>

<style>
  .slide-editor {
    padding: 16px;
    border-bottom: 1px solid #222;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    padding: 10px;
    background: #111;
    border: 1px solid #333;
    color: #fff;
    border-radius: 6px;
    font-size: 14px;
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

  .add-btn {
    margin-top: 6px;
  }
</style>

<div class="slide-editor">

  {#each items.filter(item => item.name === "heading") as heading}
    <input
      placeholder="Heading (optional)"
      bind:value={heading.content}
      on:input={update}
    />
  {/each}

  {#each items.filter(item => item.name === "bullet") as b, i}
    <div class="bullet-row">
      <input
        placeholder={`Bullet ${i + 1}`}
        bind:value={b.content}
        on:input={update}
      />

      <button on:click={() => deleteBullet(i)}>✖</button>
    </div>
  {/each}

  <button class="add-btn" on:click={addBullet}>
    + Add Bullet
  </button>

</div>