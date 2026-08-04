<!-- src/lib/editor/slides/TableEditor.svelte -->

<script>
  export let slide;

  function addRow() {
    const cols = slide.data[0]?.length || 2;

    slide.data = [
      ...slide.data,
      Array(cols).fill("")
    ];
  }

  function deleteRow(index) {
    if (slide.data.length <= 1) return;

    slide.data = slide.data.filter((_, i) => i !== index);
  }

  function addColumn() {
    slide.data = slide.data.map(row => [...row, ""]);
  }

  function deleteColumn(index) {
    if ((slide.data[0]?.length || 0) <= 1) return;

    slide.data = slide.data.map(row =>
      row.filter((_, i) => i !== index)
    );
  }
</script>

<div class="toolbar">

  <button on:click={addRow}>
    + Row
  </button>

  <button on:click={addColumn}>
    + Column
  </button>

</div>

<table>

  <tbody>

    {#each slide.data as row, r}

      <tr>

        {#each row as cell, c}

          <td>

            <input
              bind:value={slide.data[r][c]}
            />

          </td>

        {/each}

        <td class="action">

          <button on:click={() => deleteRow(r)}>
            ✖
          </button>

        </td>

      </tr>

    {/each}

    <tr>

      {#each slide.data[0] as _, c}

        <td class="action">

          <button on:click={() => deleteColumn(c)}>
            ✖
          </button>

        </td>

      {/each}

      <td></td>

    </tr>

  </tbody>

</table>

<style>

.toolbar{
  margin-bottom:12px;
  display:flex;
  gap:10px;
}

table{
  width:100%;
  border-collapse:collapse;
}

td{
  border:1px solid #333;
  padding:0;
}

input{
  width:100%;
  border:none;
  padding:8px;
  box-sizing:border-box;
  background:transparent;
}

.action{
  width:42px;
  text-align:center;
}

button{
  padding:4px 8px;
}

</style>