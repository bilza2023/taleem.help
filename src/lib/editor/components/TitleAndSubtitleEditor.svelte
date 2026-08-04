<script>
  export let slide;
  export let currentTime = 0;

  // ensure showAt exists
  $: {
    slide.data?.forEach(item => {
      if (typeof item.showAt !== "number") {
        item.showAt = slide.start ?? 0;
      }
    });
  }

  function setShowAt(item) {
    item.showAt = currentTime;
    slide = { ...slide }; // trigger reactivity
  }
</script>

<style>
  .row {
    display: flex;
    gap: 6px;
    align-items: center;
    margin-bottom: 8px;
  }

  input {
    flex: 1;
    background: #111;
    color: #fff;
    border: 1px solid #333;
    padding: 6px;
    border-radius: 4px;
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

  .time {
    font-size: 12px;
    color: #888;
    min-width: 30px;
    text-align: right;
  }
</style>

<!-- TITLE -->
<div class="row">
  <input
    bind:value={slide.data[0].content}
    placeholder="Enter title (required)"
  />

  <!-- <button on:click={() => setShowAt(slide.data[0])}>
    ⏱
  </button> -->

  <span class="time">{slide.data[0].showAt}</span>
</div>

<!-- SUBTITLE -->
<div class="row">
  <input
    bind:value={slide.data[1].content}
    placeholder="Enter subtitle (optional)"
  />

  <!-- <button on:click={() => setShowAt(slide.data[1])}>
    ⏱
  </button> -->

  <span class="time">{slide.data[1].showAt}</span>
</div>