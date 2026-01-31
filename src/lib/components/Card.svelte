


<script>
    export let href = null;       // if present → renders <a>
    export let title = '';
    export let description = '';
    export let image = null;
    export let tag = '';
  
    const as = href ? 'a' : 'div';
  </script>
  
  <svelte:element
    this={as}
    href={href || undefined}
    class={`card cardx ${href ? 'card--hover' : ''}`}
  >
    {#if image}
      <div class="thumb" style="aspect-ratio: var(--card-aspect, 16/9);">
        <img src={image} alt={title} loading="lazy" />
        {#if tag}<span class="badge">{tag}</span>{/if}
        <slot name="thumb-overlay" />
      </div>
    {/if}
  
    <div class="body">
      {#if title}<h3 class="title">{title}</h3>{/if}
      {#if description}<p class="desc">{description}</p>{/if}
      <slot /> <!-- optional extra content -->
    </div>
  
    {#if $$slots.footer || $$slots.meta}
      <div class="footer">
        <div class="meta"><slot name="meta" /></div>
        <div class="actions"><slot name="footer" /></div>
      </div>
    {/if}
  </svelte:element>
  
  <style>
    .cardx { display: flex; flex-direction: column; text-decoration: none; }
    .thumb { position: relative; overflow: hidden; border-radius: var(--radius-2);
             background: var(--surface-2); margin-bottom: var(--space-3); }
    .thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .badge { position: absolute; top: var(--space-2); left: var(--space-2);
             padding: 2px 8px; border-radius: 999px; background: rgba(0,0,0,.45);
             color:#fff; font-size:.8rem; }
    .body { display: flex; flex-direction: column; gap: var(--space-2); }
    .title { margin: 0; font-size: var(--font-5); color: var(--text); }
    .desc  { margin: 0; color: var(--muted); }
    .footer { margin-top: auto; display:flex; align-items:center; justify-content:space-between;
              gap: var(--space-3); padding-top: var(--space-3); }
    .meta { color: var(--muted); font-size: .9rem; }
  </style>
  