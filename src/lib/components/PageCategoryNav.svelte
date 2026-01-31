<script>
  export let items = [];
  export let active = '';
  export let evt = () => {};
  export let size = 14;
</script>

<nav class="nav">
  {#each items as item}
    <button
      class="tab"
      class:active={item.id === active}
      on:click={() => evt(item)}
    >
      {#if item.icon}
        <span class="icon">{item.icon}</span>
      {/if}
      <span>{item.label}</span>
    </button>
  {/each}
</nav>

<style>
  .nav {
    display: flex;
    gap: 12px;
    padding: 8px 0;
  }

  .tab {
    background: none;
    border: none;
    padding: 6px 10px;
    cursor: pointer;

    font-family: var(--fontBase);
    font-size: 0.85rem;
    color: var(--bulletColor);

    border-radius: 6px;
  }

  .tab:hover {
    background: var(--borderColor);
  }

  .tab.active {
    color: var(--headingColor);
    background: var(--borderColor);
  }

  .icon {
    margin-right: 6px;
    font-size: 0.9em;
  }
</style>
