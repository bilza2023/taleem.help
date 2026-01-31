<script>
  import { createEventDispatcher } from 'svelte';

  export let label    = 'Upload';
  export let target   = 'images';                 // 'images' | 'sounds'
  export let accept   = 'image/*';
  export let multiple = true;
  export let endpoint = '/admin/settings';
  export let showStatus = true;                   // built-in success/error UI
  export let statusDuration = 3000;               // ms to auto-hide

  const dispatch = createEventDispatcher();
  let inputEl, uploading = false;
  let statusText = '';                            // message text
  let statusKind = 'info';                        // 'success' | 'error' | 'info'
  let hideTimer;

  function pick(){ inputEl.click(); }

  function setStatus(kind, text) {
    clearTimeout(hideTimer);
    statusKind = kind;
    statusText = text;
    if (statusDuration > 0) {
      hideTimer = setTimeout(() => (statusText = ''), statusDuration);
    }
  }

  function summarize(results) {
    const ok = results?.filter(r => r.ok).length ?? 0;
    const fail = results?.length ? (results.length - ok) : 0;
    if (results?.length > 1) return `${ok} uploaded${fail ? `, ${fail} failed` : ''}`;
    if (results?.length === 1) return ok ? `Uploaded: ${results[0].name}` : `Failed: ${results[0].name}`;
    return 'Done';
  }

  async function onPick(e) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    uploading = true;
    const fd = new FormData();
    fd.set('target', target);
    for (const f of files) fd.append('files', f, f.name);

    let ok=false, json=null, error=null;
    try {
      const res = await fetch(endpoint, { method: 'POST', body: fd });
      json = await res.json().catch(() => ({}));
      ok = res.ok;
    } catch (err) {
      error = String(err);
    } finally {
      uploading = false;
      inputEl.value = '';
      // built-in notice
      if (showStatus) {
        if (ok) setStatus('success', summarize(json?.results));
        else    setStatus('error', json?.error || error || 'Upload failed');
      }
      // bubble up for page-level toasts/logs if desired
      dispatch('done', { ok, ...(json||{}), error });
    }
  }
</script>

<button type="button" class="upload-btn" aria-busy={uploading} disabled={uploading} on:click={pick}>
  {#if uploading}<span class="spinner" aria-hidden="true"></span>{/if}
  <span>{label}</span>
</button>
<input bind:this={inputEl} type="file" accept={accept} {multiple} hidden on:change={onPick} />

{#if showStatus && statusText}
  <div class="notice {statusKind}" role="status">{statusText}</div>
{/if}

<style>
  .upload-btn {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    padding: .6rem 1rem;
    border-radius: .75rem;
    border: 1px solid var(--borderColor, #2a2a2a);
    background: var(--primaryColor, #1f2937);
    color: var(--onPrimaryColor, #fff);
    font-weight: 600;
    cursor: pointer;
    transition: transform 120ms ease, filter 120ms ease, box-shadow 120ms ease;
    user-select: none;
  }
  .upload-btn:hover { transform: translateY(-1px); filter: brightness(1.05); }
  .upload-btn:active { transform: translateY(0); }
  .upload-btn:disabled { opacity: .6; cursor: default; transform: none; }
  .upload-btn:focus-visible { outline: 2px solid var(--accentColor, #38bdf8); outline-offset: 2px; }

  .spinner {
    width: 1em; height: 1em; border-radius: 50%;
    border: 2px solid currentColor; border-right-color: transparent;
    animation: spin .8s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .notice {
    margin-top: .5rem;
    font-size: .9rem;
    padding: .45rem .6rem;
    border-radius: .5rem;
    border: 1px solid var(--borderColor, #2a2a2a);
    background: color-mix(in oklab, var(--surfaceColor, #0b0b0b) 85%, currentColor 15%);
    /* If color-mix not supported, background will fall back; color carries the intent */
  }
  .notice.success { color: var(--successColor, #22c55e); }
  .notice.error   { color: var(--dangerColor, #ef4444); }
  .notice.info    { color: var(--accentColor, #38bdf8); }
</style>
