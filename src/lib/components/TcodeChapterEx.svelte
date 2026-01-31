<script>
    import { createEventDispatcher, onMount } from 'svelte';
  
    // Public API
    export let selection = { tcode: '', chapter: '', exercise: '' };
    export let tcodes = null;
    export let loadTcodes = null;          // async () => array
    export let loadChapters = null;        // async (tcode) => array
    export let loadExercises = null;       // async (tcode, chapter) => array
  
    export let labelTcode = 'Tcode';
    export let labelChapter = 'Chapter';
    export let labelExercise = 'Exercise';
    export let placeholders = {
      tcode: 'Select tcode…',
      chapter: 'Select chapter…',
      exercise: 'Select exercise…'
    };
  
    export let disabled = false;
    export let autoFetch = true;
  
    const dispatch = createEventDispatcher();
  
    let tcodeOptions = [];     // [{value,label}]
    let chapterOptions = [];   // [{value,label}]
    let exerciseOptions = [];  // [{value,label}]
  
    let loading = { tcodes: false, chapters: false, exercises: false };
    let error   = { tcodes: '',   chapters: '',   exercises: '' };
  
    // ── Normalizers ───────────────────────────────────────────────────────
    function toOpt(v) {
      // generic fallback for primitives
      return { value: String(v), label: String(v) };
    }
  
    function normalizeTcodes(list) {
      if (!Array.isArray(list)) return [];
      return list.map((item) => {
        if (item && typeof item === 'object') {
          // common shapes: { tcodeName }, { tcode }, { code }, { value,label }
          const v = item.value ?? item.tcodeName ?? item.tcode ?? item.code ?? item.id ?? JSON.stringify(item);
          const l = item.label ?? item.tcodeName ?? item.name ?? item.tcode ?? String(v);
          return { value: String(v), label: String(l) };
        }
        return toOpt(item);
      });
    }
  
    function pad2(n) {
      const x = Number(n);
      return Number.isFinite(x) ? String(x).padStart(2, '0') : String(n ?? '');
      }
  
    function normalizeChapters(list) {
      if (!Array.isArray(list)) return [];
      return list.map((item) => {
        if (item && typeof item === 'object') {
          // expected: { filename, name, number } from your services
          const value = item.filename ?? item.value ?? item.id ?? item.slug ?? JSON.stringify(item);
          // label preference: "Ch 05 — Name" if number+name present, else "Name", else fallback
          const label =
            (item.number != null && item.name)
              ? `Ch ${pad2(item.number)} — ${item.name}`
              : (item.name ?? item.label ?? String(value));
          return { value: String(value), label: String(label) };
        }
        // string fallback → both label & value are that string
        return toOpt(item);
      });
    }
  
    function normalizeExercises(list) {
      if (!Array.isArray(list)) return [];
      return list.map((item) => {
        if (item && typeof item === 'object') {
          // expected: { filename, name } from your services
          const value = item.filename ?? item.value ?? item.id ?? item.slug ?? JSON.stringify(item);
          const label = item.name ?? item.label ?? String(value);
          return { value: String(value), label: String(label) };
        }
        return toOpt(item);
      });
    }
  
    // ── Events ────────────────────────────────────────────────────────────
    function emitChange() {
      dispatch('change', {
        tcode: selection.tcode || '',
        chapter: selection.chapter || '',
        exercise: selection.exercise || '',
        ready: Boolean(selection.tcode && selection.chapter && selection.exercise)
      });
    }
  
    // ── Loaders with stale-request guard ──────────────────────────────────
    let reqId = 0;
  
    async function ensureTcodes() {
      if (tcodeOptions.length) return;
      if (tcodes && Array.isArray(tcodes)) {
        tcodeOptions = normalizeTcodes(tcodes);
        return;
      }
      if (!loadTcodes || !autoFetch) return;
  
      loading.tcodes = true; error.tcodes = '';
      const my = ++reqId;
      try {
        const list = await loadTcodes();
        if (my !== reqId) return;
        tcodeOptions = normalizeTcodes(list || []);
      } catch (e) {
        if (my !== reqId) return;
        error.tcodes = e?.message || 'Failed to load tcodes';
      } finally {
        if (my === reqId) loading.tcodes = false;
      }
    }
  
    async function loadChaptersFor(tcode) {
      chapterOptions = [];
      exerciseOptions = [];
      if (!tcode || !loadChapters) return;
  
      loading.chapters = true; error.chapters = '';
      const my = ++reqId;
      try {
        const list = await loadChapters(tcode);
        if (my !== reqId) return;
        chapterOptions = normalizeChapters(list || []);
      } catch (e) {
        if (my !== reqId) return;
        error.chapters = e?.message || 'Failed to load chapters';
      } finally {
        if (my === reqId) loading.chapters = false;
      }
    }
  
    async function loadExercisesFor(tcode, chapter) {
      exerciseOptions = [];
      if (!tcode || !chapter || !loadExercises) return;
  
      loading.exercises = true; error.exercises = '';
      const my = ++reqId;
      try {
        const list = await loadExercises(tcode, chapter);
        if (my !== reqId) return;
        exerciseOptions = normalizeExercises(list || []);
      } catch (e) {
        if (my !== reqId) return;
        error.exercises = e?.message || 'Failed to load exercises';
      } finally {
        if (my === reqId) loading.exercises = false;
      }
    }
  
    // ── Handlers ──────────────────────────────────────────────────────────
    async function onTcodeChange(e) {
      const t = e.currentTarget.value || '';
      selection = { tcode: t, chapter: '', exercise: '' };
      emitChange();
      await loadChaptersFor(t);
    }
  
    async function onChapterChange(e) {
      const c = e.currentTarget.value || '';
      selection = { ...selection, chapter: c, exercise: '' };
      emitChange();
      await loadExercisesFor(selection.tcode, c);
    }
  
    function onExerciseChange(e) {
      const x = e.currentTarget.value || '';
      selection = { ...selection, exercise: x };
      emitChange();
    }
  
    // ── Init ──────────────────────────────────────────────────────────────
    onMount(async () => {
      await ensureTcodes();
      if (selection.tcode) await loadChaptersFor(selection.tcode);
      if (selection.tcode && selection.chapter) {
        await loadExercisesFor(selection.tcode, selection.chapter);
      }
      emitChange();
    });
  </script>
  
  <div class="tce" aria-disabled={disabled}>
    <!-- TCODE -->
    <div class="field">
      <label for="tce-tcode">{labelTcode}</label>
      <select
        id="tce-tcode"
        on:change={onTcodeChange}
        disabled={disabled || loading.tcodes}
        bind:value={selection.tcode}
        aria-busy={loading.tcodes}
      >
        <option value="">{placeholders.tcode}</option>
        {#each tcodeOptions as opt}
          <option value={opt.value}>{opt.label}</option>
        {/each}
      </select>
      {#if error.tcodes}<div class="err">{error.tcodes}</div>{/if}
    </div>
  
    <!-- CHAPTER -->
    <div class="field">
      <label for="tce-chapter">{labelChapter}</label>
      <select
        id="tce-chapter"
        on:change={onChapterChange}
        disabled={disabled || !selection.tcode || loading.chapters}
        bind:value={selection.chapter}
        aria-busy={loading.chapters}
      >
        <option value="">{placeholders.chapter}</option>
        {#each chapterOptions as opt}
          <option value={opt.value}>{opt.label}</option>
        {/each}
      </select>
      {#if error.chapters}<div class="err">{error.chapters}</div>{/if}
    </div>
  
    <!-- EXERCISE -->
    <div class="field">
      <label for="tce-ex">{labelExercise}</label>
      <select
        id="tce-ex"
        on:change={onExerciseChange}
        disabled={disabled || !selection.tcode || !selection.chapter || loading.exercises}
        bind:value={selection.exercise}
        aria-busy={loading.exercises}
      >
        <option value="">{placeholders.exercise}</option>
        {#each exerciseOptions as opt}
          <option value={opt.value}>{opt.label}</option>
        {/each}
      </select>
      {#if error.exercises}<div class="err">{error.exercises}</div>{/if}
    </div>
  </div>
  
  <style>
    .tce {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: .75rem;
      align-items: end;
    }
    .field { display: grid; gap: .35rem; }
    label  { font-size: .9rem; opacity: .85; }
    select {
      width: 100%;
      padding: .5rem .6rem;
      background: var(--surface-2, #1f1f24);
      color: var(--text-1, #eaeaea);
      border: 1px solid var(--border-1, #34343a);
      border-radius: .5rem;
    }
    select[disabled] { opacity: .6; cursor: not-allowed; }
    .err { margin-top: .25rem; font-size: .8rem; color: var(--danger-9, #ff6b6b); }
    @media (max-width: 860px) { .tce { grid-template-columns: 1fr; } }
  </style>
  