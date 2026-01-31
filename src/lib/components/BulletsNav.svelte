<!-- /src/lib/appComps/IndexNav.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  export let types = [];

  const dispatch = createEventDispatcher();
  let active = 'videos';

  function pick(t) {
    active = t;
    dispatch('select', { type: t });
  }
</script>

<nav class="index-nav" role="tablist" aria-label="Feed categories">
  {#each types as t}
    <button
      type="button"
      class:active={t === active}
      aria-pressed={t === active}
      on:click={() => pick(t)}
    >
      {t}
    </button>
  {/each}
</nav>

<style>
  .index-nav {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.5rem 0;
  }

  .index-nav button {
    appearance: none;
    position: relative;
    padding: 0.5rem 0.75rem;
    border: 1.5px solid var(--borderColor);
    border-radius: 0.5rem;
    background: transparent;
    color: var(--secondaryText);
    font-size: 0.95rem;
    cursor: pointer;
    transition:
      background 0.15s ease,
      border-color 0.15s ease,
      color 0.15s ease,
      box-shadow 0.15s ease;
  }

  /* remove old bullet completely */
  .index-nav button::after { content: none; }

  /* hover */
  .index-nav button:hover {
    background: var(--surfaceColor);
    border-color: var(--borderColor);
    color: var(--primaryText);
  }

  /* keyboard focus */
  .index-nav button:focus-visible {
    outline: 2px solid var(--primaryColor);
    outline-offset: 2px;
  }

  /* active pill uses tokens only */
  .index-nav button.active {
    background: var(--primaryColor);
    border-color: var(--primaryColor);
    color: var(--backgroundColor);
    font-weight: 600;
    box-shadow:
      0 1px 0 rgba(0,0,0,0.12),
      0 0 0 3px color-mix(in oklab, var(--primaryColor) 25%, transparent);
  }
</style>
