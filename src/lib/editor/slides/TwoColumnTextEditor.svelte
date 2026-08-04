<!-- src/lib/editor/slides/TwoColumnTextEditor.svelte -->

<script>
  export let slide;

  function addLeft() {
    slide.data = [
      ...slide.data,
      {
        name: "left",
        content: ""
      }
    ];
  }

  function addRight() {
    slide.data = [
      ...slide.data,
      {
        name: "right",
        content: ""
      }
    ];
  }

  function deleteLeft(index) {
    const leftItems = slide.data.filter(x => x.name === "left");
    if (leftItems.length <= 1) return;

    const item = leftItems[index];
    slide.data = slide.data.filter(x => x !== item);
  }

  function deleteRight(index) {
    const rightItems = slide.data.filter(x => x.name === "right");
    if (rightItems.length <= 1) return;

    const item = rightItems[index];
    slide.data = slide.data.filter(x => x !== item);
  }
</script>

<input
  bind:value={slide.data[0].content}
  placeholder="Title"
/>

<div style="display:flex; gap:20px;">

  <div style="flex:1;">

    <h4>Left</h4>

    {#each slide.data.filter(x => x.name === "left") as item, i}

      <div style="display:flex; gap:8px; margin-bottom:8px;">

        <input
          bind:value={item.content}
          placeholder={`Left ${i + 1}`}
        />

        <button on:click={() => deleteLeft(i)}>
          ✖
        </button>

      </div>

    {/each}

    <button on:click={addLeft}>
      + Add Left
    </button>

  </div>

  <div style="flex:1;">

    <h4>Right</h4>

    {#each slide.data.filter(x => x.name === "right") as item, i}

      <div style="display:flex; gap:8px; margin-bottom:8px;">

        <input
          bind:value={item.content}
          placeholder={`Right ${i + 1}`}
        />

        <button on:click={() => deleteRight(i)}>
          ✖
        </button>

      </div>

    {/each}

    <button on:click={addRight}>
      + Add Right
    </button>

  </div>

</div>