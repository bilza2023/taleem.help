<!-- /src/lib/components/UQCard.svelte Universall Question Card-->
<script>
  
  
    export let questionType = 'deck';
    export let title = 'The Title';
    export let href = '';
    export let thumbnail = '/media/images/taleem.webp';
  
    export let bodyItems = [
    {label : "exercise" , value:""}, 
    {label : "chapter", value:""},
    {label : "questionType", value:""},
    {label : "status", value:""}
    ];


</script>

<a class="card-link" {href} aria-label={title}>
  <article class="q-card" title={title} >
    <!-- YouTube-style thumbnail -->
    <figure class="thumb">
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        decoding="async"
        on:error={(e) => (e.currentTarget.src = "/media/images/taleem.webp")}
      />
    </figure>

    <!-- Body -->
    <div class="q-body">
      <h3 class="q-title">{title}</h3>

      <div class="q-row">
        {#each bodyItems as item}
          {#if item?.value}
            <span class="chip {item.label === 'status' ? 'chip-accent' : ''}">
              {item.value}
            </span>
          {/if}
        {/each}
      </div>

    </div>
  </article>
</a>

<style>
     .thumb img, img.ucard-thumb { width: 100%; height: auto; object-fit: contain !important; object-position: center; display: block; 
     }
  /* Link wrapper stays neutral on hover */
  .card-link {
    display: block;
    color: inherit;
    text-decoration: none;
    font-size: inherit;
  }
  .card-link:hover {
    font-size: inherit; /* guard against any global a:hover font rules */
  }

  /* CARD (token-only, hover is visual only — no translate/resize) */
  .q-card {
    box-sizing: border-box;
    display: block;
    width: var(--q-card-w, 360px);
    max-width: 90%;
    border: 1px solid var(--borderColor);
    border-radius: 12px;
    background: var(--surfaceColor);
    color: var(--primaryText);
    overflow: hidden; /* clip image corners */
    transition:
      background 0.15s ease,
      border-color 0.15s ease,
      box-shadow 0.15s ease;
    contain: content; /* isolate this subtree */
    font-size: inherit; /* never upscale relative to ancestors */
  }
  .q-card:hover {
    background: var(--surfaceElevated, var(--surfaceColor));
    border-color: var(--primaryColor);
    /* soft shadow that doesn't affect layout */
    box-shadow: 0 2px 10px var(--shadowColor, rgba(0, 0, 0, 0.12));
  }

  /* THUMB (16:9 like YouTube) */
  .thumb {
    margin: 0;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: var(--surfaceElevated, var(--surfaceColor));
    overflow: hidden;
  }
  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* BODY (slim) */
  .q-body {
    padding: 10px 12px 12px;
  }
  .q-title {
    margin: 0 0 6px 0;
    font-size: 15.5px; /* fixed px to avoid fluid-typo jumps */
    line-height: 1.35;
    font-weight: 700;

    /* 2-line clamp like YouTube */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .q-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 6px;
  }

  .chip {
    font-size: 12px;
    line-height: 1;
    padding: 3px 8px;
    border-radius: 999px;
    background: var(--chipBg, var(--surfaceColor));
    color: var(--primaryText);
    border: 1px solid var(--borderColor);
  }
  .chip-accent {
    background: var(--accentColor);
    color: var(--onAccentColor, var(--backgroundColor));
    border-color: var(--accentColor);
  }

  .q-meta {
    font-size: 12px;
    margin-bottom: 6px;
  }
  .muted {
    opacity: 0.7;
  }

  .q-desc {
    margin: 6px 0 0 0;
  }
  /* 
  @media (max-width: 640px){
    .q-card { width: 100%; }
  } */
</style>
