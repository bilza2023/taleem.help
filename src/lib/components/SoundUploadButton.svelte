<!-- SoundUploadButton.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
    export let endpoint = '/admin/settings';
    export let label = 'Upload Sound';
    export let multiple = false;
  
    const dispatch = createEventDispatcher();
    let inputEl, busy = false, msg = '';
  
    async function onPick(e) {
      const files = e.target.files;
      if (!files?.length) return;
      busy = true; msg = 'Uploading…';
      try {
        const fd = new FormData();
        fd.set('target', 'sounds');
        for (const f of files) fd.append('files', f, f.name);
        const res = await fetch(endpoint, { method: 'POST', body: fd, credentials: 'same-origin' });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data?.error || res.statusText);
        msg = `Done (${files.length})`; dispatch('uploaded', { files, data }); inputEl.value = '';
      } catch (err) { msg = `Error: ${err.message}`; }
      finally { busy = false; }
    }
  </script>
  
  <button type="button" on:click={() => inputEl.click()} disabled={busy}>
    {busy ? 'Uploading…' : label}
  </button>
  <input bind:this={inputEl} type="file" accept="audio/*" {multiple} class="sr-only" on:change={onPick} />
  {#if msg}<small>{msg}</small>{/if}
  
  <style>
    .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
    button{padding:.5rem .8rem;border-radius:.6rem;border:1px solid var(--line,#333);background:var(--btn-bg,#111);color:var(--btn-fg,#fff);cursor:pointer}
    button[disabled]{opacity:.6;cursor:not-allowed}
    small{margin-left:.5rem;opacity:.8}
  </style>
  