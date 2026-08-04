<!-- src/lib/editor/slides/KeyIdeasEditor.svelte -->

<script>
  import Icons from "../js/Icons.js";

  export let slide;

  const iconList = Object.values(Icons);

  function addCard() {
    if (slide.data.length >= 4) return;

    slide.data = [
      ...slide.data,
      {
        name: "card",
        icon: iconList[0],
        label: ""
      }
    ];
  }

  function deleteCard(index) {
    if (slide.data.length <= 1) return;

    slide.data = slide.data.filter((_, i) => i !== index);
  }
</script>

{#each slide.data as card, i}

  <div style="display:flex; gap:8px; margin-bottom:8px;">

    <select bind:value={card.icon}>

      {#each iconList as icon}
        <option value={icon}>{icon}</option>
      {/each}

    </select>

    <input
      bind:value={card.label}
      placeholder={`Idea ${i + 1}`}
    />

    <button on:click={() => deleteCard(i)}>
      ✖
    </button>

  </div>

{/each}

<button on:click={addCard}>
  + Add Idea
</button>