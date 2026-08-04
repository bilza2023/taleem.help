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


<!-- TITLE -->
 <div   style="background:red !important; width:800px;">
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
</div>

<style>

  .row {
    display: flex;
    gap: 6px;
    align-items: center;
    margin-bottom: 8px;
  }

  .time {
    font-size: 12px;
    color: #888;
    min-width: 30px;
    text-align: right;
  }
</style>