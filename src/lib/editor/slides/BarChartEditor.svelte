<!-- src/lib/editor/slides/BarChartEditor.svelte -->

<script>
  export let slide;

  function addBar() {
    slide.data = [
      ...slide.data,
      {
        name: "bar",
        label: "",
        value: 0
      }
    ];
  }

  function deleteBar(index) {
    if (slide.data.length <= 1) return;

    slide.data = slide.data.filter((_, i) => i !== index);
  }
</script>

{#each slide.data as bar, i}

  <div style="display:flex; gap:8px; margin-bottom:8px;">

    <input
      bind:value={bar.label}
      placeholder="Label"
    />

    <input
      type="number"
      min="0"
      max="100"
      bind:value={bar.value}
      style="width:90px;"
    />

    <button on:click={() => deleteBar(i)}>
      ✖
    </button>

  </div>

{/each}

<button on:click={addBar}>
  + Add Bar
</button>