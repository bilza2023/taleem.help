<script>
    import '$lib/styles/tokens.css';
    import { createEventDispatcher } from 'svelte';
  
    // Base label/icon (used if *_On/Off not provided)
    export let label = 'Samples';
    export let icon  = '🎨';
  
    // Optional state-aware labels/icons
    export let labelOn  = '';
    export let labelOff = '';
    export let iconOn   = '';
    export let iconOff  = '';
  
    // State + sizing
    export let checked = false;
    export let size = 56;      // px height
    export let disabled = false;
  
    const dispatch = createEventDispatcher();
    function onClick() {
      if (disabled) return;
      checked = !checked;
      dispatch('change', { checked });
      dispatch('toggle', { checked });
    }
  
    // Derived display values
    $: displayLabel = (checked ? labelOn : labelOff) || label;
    $: displayIcon  = (checked ? iconOn  : iconOff)  || icon;
  </script>
  
  <button
    class="rt-btn {checked ? 'is-checked' : ''}"
    style="--rt-size:{size}px"
    aria-pressed={checked}
    {disabled}
    on:click={onClick}
  >
    <span class="rt-ic" aria-hidden="true">{displayIcon}</span>
    <span class="rt-lb">{displayLabel}</span>
  </button>
  
  <style>
    /* Token-aware capsule button */
    .rt-btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:.5rem;
  
      height: var(--rt-size);
      min-width: var(--rt-size);
      padding: 0 .9rem;
  
      border:none;
      border-radius:9999px;
  
      background: var(--primaryColor);
      color: var(--backgroundColor);
  
      font-weight:600;
      font-size: clamp(.95rem, 2.2vw, 1rem);
  
      cursor:pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,.25);
      transition: background .2s ease, transform .15s ease, box-shadow .15s ease, opacity .2s ease;
    }
    .rt-btn:hover{
      background: var(--secondaryColor);
      transform: translateY(-2px);
    }
    .rt-btn.is-checked{
      background: var(--accentColor);
    }
    .rt-btn:active{
      transform: translateY(0);
      box-shadow: 0 2px 6px rgba(0,0,0,.25);
    }
    .rt-btn:disabled{
      opacity:.6;
      cursor:not-allowed;
      transform:none;
      box-shadow:none;
    }
    .rt-btn:focus-visible{
      outline: 2px solid var(--primaryColor);
      outline-offset: 2px;
    }
  
    .rt-ic{
      display:inline-grid;
      place-items:center;
      line-height:1;
      font-size: calc(var(--rt-size) * 0.45); /* scales with size */
      color: var(--backgroundColor);
    }
    .rt-lb{
      white-space: nowrap;                /* single line */
      color: var(--backgroundColor);
    }
  </style>
  