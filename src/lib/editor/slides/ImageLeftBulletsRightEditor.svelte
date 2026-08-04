<!-- src/lib/editor/slides/ImageLeftBulletsRightEditor.svelte -->

<script>
  export let slide;

  function addBullet() {
    slide.data = [
      ...slide.data,
      {
        name: "bullet",
        content: ""
      }
    ];
  }

  function deleteBullet(index) {
    const bullets = slide.data.filter(x => x.name === "bullet");
    if (bullets.length <= 1) return;

    const bullet = bullets[index];
    slide.data = slide.data.filter(x => x !== bullet);
  }
</script>

<input
  bind:value={slide.data[0].content}
  placeholder="Image filename"
/>

{#each slide.data.filter(x => x.name === "bullet") as bullet, i}

  <div style="display:flex; gap:8px; margin-bottom:8px;">

    <input
      bind:value={bullet.content}
      placeholder={`Bullet ${i + 1}`}
    />

    <button on:click={() => deleteBullet(i)}>
      ✖
    </button>

  </div>

{/each}

<button on:click={addBullet}>
  + Add Bullet
</button>