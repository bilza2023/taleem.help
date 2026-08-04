<!-- src/editor/components/TableEditor.svelte -->

<script>
    export let slide;
  
    // rows = array of arrays
    $: rows = slide.data || [];
  
    function update() {
      slide.data = rows.map(r => [...r]);
    }
  
    function addRow() {
      const cols = rows[0]?.length || 2;
      rows = [...rows, Array(cols).fill("")];
      update();
    }
  
    function deleteRow(i) {
      if (rows.length <= 1) return;
      rows = rows.filter((_, idx) => idx !== i);
      update();
    }
  
    function addCol() {
      rows = rows.map(r => [...r, ""]);
      update();
    }
  
    function deleteCol(j) {
      if ((rows[0]?.length || 0) <= 1) return;
      rows = rows.map(r => r.filter((_, idx) => idx !== j));
      update();
    }
  
    function updateCell(i, j, value) {
      rows[i][j] = value;
      update();
    }
  </script>
  
  <div class="slide-editor">
  
    <!-- Column controls -->
    <button class="mini" on:click={addCol}>+ Col</button>  
    <div class="col-actions">
      {#each rows[0] || [] as _, j}
        <button class="mini" on:click={() => deleteCol(j)}>✖ Col {j + 1}</button>
      {/each}
     
    </div>
  
    <!-- Table -->
    <table>
      <tbody>
        {#each rows as row, i}
          <tr>
            {#each row as cell, j}
              <td>
                <input
                  value={cell}
                  on:input={(e) => updateCell(i, j, e.target.value)}
                />
              </td>
            {/each}
  
            <!-- Row controls -->
            <td class="row-actions">
              <button class="mini" on:click={() => deleteRow(i)}>✖</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  
    <!-- Controls -->
    <div class="controls">
      <button on:click={addRow}>+ Row</button>
    </div>
  
    {#if !rows.length}
      <div class="warning">Table cannot be empty</div>
    {/if}
  
  </div>



  <style>
    .slide-editor {
  padding: 10px;
  background: #0b0f14;
  border-bottom: 1px solid #1f2937;
  font-family: system-ui, sans-serif;
}

/* ===== TABLE ===== */
table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  border: 1px solid #4b5563; /* OUTER BORDER */
}

/* CELLS = REAL BOXES */
td {
  border: 1px solid #4b5563; /* STRONG GRID */
  height: 34px;
  padding: 0;
  background: #111827;
}

/* INPUT = FULL CELL */
input {
  width: 100%;
  height: 100%;
  padding: 6px 8px;
  background: transparent;
  border: none;
  color: #f9fafb;
  outline: none;
  font-size: 13px;
}

/* HOVER (like sheets) */
td:hover {
  background: #1f2937;
}

/* ACTIVE CELL (IMPORTANT) */
input:focus {
  background: #1e293b;
  box-shadow: inset 0 0 0 2px #3b82f6;
}

/* ===== COLUMN CONTROLS ===== */
.col-actions {
  display: flex;
  gap: 4px;
  margin: 6px 0;
  flex-wrap: wrap;
}

/* ===== ROW ACTIONS ===== */
.row-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  background: #020617;
  border-left: 1px solid #4b5563;
}

/* ===== BUTTONS (minimal spreadsheet style) ===== */
button {
  background: #020617;
  border: 1px solid #374151;
  color: #cbd5f5;
  padding: 4px 6px;
  cursor: pointer;
  font-size: 11px;
}

button:hover {
  background: #1f2937;
  color: #fff;
}

/* SMALL BUTTONS */
.mini {
  padding: 2px 5px;
  font-size: 10px;
}

/* ===== CONTROLS ===== */
.controls {
  margin-top: 8px;
  display: flex;
  gap: 6px;
}

/* ===== WARNING ===== */
.warning {
  color: #f87171;
  font-size: 12px;
  margin-top: 6px;
}
  </style>