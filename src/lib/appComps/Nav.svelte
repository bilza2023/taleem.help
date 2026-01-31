<script>
  import { browser } from '$app/environment';
  
  const THEMES = [
  { key: 'royalBlue',    label: 'Royal Blue' },
  { key: 'pastel',       label: 'Pastel' },
  { key: 'darkTheme',    label: 'Dark' },
  { key: 'neonDark',     label: 'Neon Dark' },
  { key: 'highContrast', label: 'High Contrast' }
];


  const ALL_THEME_CLASSES = THEMES.map(t => `theme-${t.key}`);

  let currentTheme = 'light';
  let open = false;

  function setTheme(theme) {
    if (!browser) return;
    const root = document.documentElement;
    root.classList.remove(...ALL_THEME_CLASSES);
    root.classList.add(`theme-${theme}`);
    currentTheme = theme;
    try { localStorage.setItem('theme', theme); } catch {}
  }

  function toggle() {
    open = !open;
  }

  if (browser) {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) setTheme(saved);
    } catch {}
  }
</script>
<nav class="nav">
  <a href="/" class="brand">Taleem</a>

  <div class="spacer"></div>

  <div class="theme">
    <button class="pill" on:click={toggle}>
      Theme ▾
    </button>

    {#if open}
      <div class="menu">
        {#each THEMES as t}
          <button
            class:active={currentTheme === t.key}
            on:click={() => { setTheme(t.key); open = false; }}
          >
            {t.label}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</nav>

<style>
  .nav {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    
  background: var(--borderColor);   /* NOT backgroundColor */
    color: var(--baseTextColor);
    border-bottom: 1px solid var(--borderColor);
    font-family: var(--fontBase);
  }

  .brand {
    font-weight: 700;
    text-decoration: none;
    color: var(--headingColor);
  }

  .spacer {
    flex: 1;
  }

  .pill {
    border: 1px solid var(--borderColor);
    background: transparent;
    color: inherit;
    padding: 6px 10px;
    border-radius: 999px;
    cursor: pointer;
  }

  .menu {
    position: absolute;
    right: 16px;
    top: 52px;
    background: var(--backgroundColor);
    border: 1px solid var(--borderColor);
    border-radius: 8px;
    padding: 6px;
  }

  .menu button {
    display: block;
    width: 100%;
    text-align: left;
    padding: 6px 8px;
    background: none;
    border: 0;
    color: inherit;
    cursor: pointer;
  }

  .menu button.active {
    color: var(--primaryColor);
  }
</style>
