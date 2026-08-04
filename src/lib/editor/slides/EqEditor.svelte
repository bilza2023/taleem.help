<!-- src/lib/editor/slides/EqEditor.svelte -->

<script>
  export let slide;

  let active = 0;

  const lineTypes = ["heading", "text", "math"];
  const spTypes = ["spText", "spMath", "spImage"];

  function addLine(type) {
    slide.data = [
      ...slide.data,
      {
        name: "line",
        type,
        content: "",
        showAt: 0,
        spItems: []
      }
    ];

    active = slide.data.length - 1;
  }

  function deleteLine(i) {
    if (slide.data.length <= 1) return;

    slide.data = slide.data.filter((_, idx) => idx !== i);

    if (active >= slide.data.length) {
      active = slide.data.length - 1;
    }
  }

  function addSpItem(line, type) {
    if (!line.spItems) line.spItems = [];

    line.spItems = [
      ...line.spItems,
      {
        type,
        content: ""
      }
    ];

    slide.data = [...slide.data];
  }

  function deleteSpItem(line, i) {
    line.spItems = line.spItems.filter((_, idx) => idx !== i);
    slide.data = [...slide.data];
  }
</script>

{#each slide.data as line, i}

  <fieldset style="margin-bottom:20px;">

    <legend>

      <button on:click={() => active = i}>
        {active === i ? "▼" : "▶"} Line {i + 1}
      </button>

    </legend>

    {#if active === i}

      <div style="display:flex;gap:10px;margin-bottom:10px;">

        <select bind:value={line.type}>
          {#each lineTypes as t}
            <option value={t}>{t}</option>
          {/each}
        </select>

        <input
          style="width:90px;"
          type="number"
          bind:value={line.showAt}
        />

      </div>

      <textarea
        bind:value={line.content}
        placeholder="Content"
      ></textarea>

      <hr>

      <h4>Side Panel</h4>

      {#each line.spItems ?? [] as item, j}

        <div style="display:flex;gap:8px;margin-bottom:8px;">

          <select bind:value={item.type}>
            {#each spTypes as t}
              <option value={t}>{t}</option>
            {/each}
          </select>

          <input
            bind:value={item.content}
            placeholder="Content"
          />

          <button on:click={() => deleteSpItem(line, j)}>
            ✖
          </button>

        </div>

      {/each}

      <div style="display:flex;gap:6px;margin-top:10px;">

        <button
          style="background:#2563eb;color:white;font-size:12px;padding:4px 8px;"
          on:click={() => addSpItem(line,"spText")}
        >
          📝 Text
        </button>

        <button
          style="background:#059669;color:white;font-size:12px;padding:4px 8px;"
          on:click={() => addSpItem(line,"spMath")}
        >
          ∑ Math
        </button>

        <button
          style="background:#7c3aed;color:white;font-size:12px;padding:4px 8px;"
          on:click={() => addSpItem(line,"spImage")}
        >
          🖼 Image
        </button>

        <button
          style="margin-left:auto;background:#b91c1c;color:white;font-size:12px;padding:4px 8px;"
          on:click={() => deleteLine(i)}
        >
          🗑 Delete
        </button>

      </div>

    {/if}

  </fieldset>

{/each}

<hr>

<div style="display:flex;gap:8px;">

  <button on:click={() => addLine("heading")}>
    + Heading
  </button>

  <button on:click={() => addLine("math")}>
    + Math
  </button>

  <button on:click={() => addLine("text")}>
    + Text
  </button>

</div>