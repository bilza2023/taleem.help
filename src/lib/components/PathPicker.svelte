<script>
    import {
      listTcodes,
      getChapters,
      getExercises,
      chapterNo
    } from '../services/synopsisServices';
  
    // parent binds this: { tcode, chapterSlug, chapterNo, exerciseSlug }
    export let value = { tcode: '', chapterSlug: '', chapterNo: null, exerciseSlug: '' };
    export let disabled = false;
    export let required = true;
  
    let tcodes = [];
    let chapters = [];
    let exercises = [];
  
    // load tcodes once (sync, no DB)
    $: tcodes = listTcodes();
  
    // when tcode changes → refresh chapters; reset chapter/exercise if invalid
    $: {
      chapters = value.tcode ? getChapters(value.tcode) : [];
      if (!chapters.find(c => c.filename === value.chapterSlug)) {
        value.chapterSlug = '';
        value.chapterNo = null;
      }
    }
  
    // when chapter changes → refresh exercises; compute chapterNo; reset exercise if invalid
    $: {
      exercises = (value.tcode && value.chapterSlug) ? getExercises(value.tcode, value.chapterSlug) : [];
      value.chapterNo = (value.tcode && value.chapterSlug) ? chapterNo(value.tcode, value.chapterSlug) : null;
      if (!exercises.find(e => e.filename === value.exerciseSlug)) {
        value.exerciseSlug = '';
      }
    }
  </script>
  
  <div class="pp-grid">
    <div class="pp-field">
      <label>Tcode{#if required}<span class="req">*</span>{/if}</label>
      <select bind:value={value.tcode} disabled={disabled} required={required}>
        <option value="" disabled selected hidden>— Select tcode —</option>
        {#each tcodes as t}
          <option value={t.tcodeName}>{t.tcodeName}</option>
        {/each}
      </select>
    </div>
  
    <div class="pp-field">
      <label>Chapter{#if required}<span class="req">*</span>{/if}</label>
      <select
        bind:value={value.chapterSlug}
        disabled={disabled || !value.tcode || !chapters.length}
        required={required}
      >
        <option value="" disabled selected hidden>— Select chapter —</option>
        {#each chapters as ch}
          <option value={ch.filename}>{ch.name}</option>
        {/each}
      </select>
      {#if value.chapterNo !== null}
        <small class="hint">Chapter # {value.chapterNo}</small>
      {/if}
    </div>
  
    <div class="pp-field">
      <label>Exercise{#if required}<span class="req">*</span>{/if}</label>
      <select
        bind:value={value.exerciseSlug}
        disabled={disabled || !value.chapterSlug || !exercises.length}
        required={required}
      >
        <option value="" disabled selected hidden>— Select exercise —</option>
        {#each exercises as ex}
          <option value={ex.filename}>{ex.name}</option>
        {/each}
      </select>
    </div>
  </div>
  
  <style>
    .pp-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:16px; }
    @media (max-width: 900px){ .pp-grid{ grid-template-columns:1fr; } }
    .pp-field{ display:grid; gap:8px; }
    label{ font-weight:600; font-size:14px; }
    .req{ color:#e33; margin-left:4px; }
    select{
      padding:10px 12px; border:1px solid #333; border-radius:12px;
      background:#111; color:#eee; outline:none;
    }
    .hint{ color:#9aa; font-size:12px; }
  </style>
  