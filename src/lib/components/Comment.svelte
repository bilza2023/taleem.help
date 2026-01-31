<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { browser } from '$app/environment';

  export let contentId = null; // required (e.g., filename)

  let text = '';
  let sending = false;
  let err = '';
  let msg = '';
  let comments = [];

  const ENDPOINT = '/api/comment';
  const dispatch = createEventDispatcher();

  function reset() { err = ''; msg = ''; }

  function getAuthToken() {
    if (!browser) return null;
    try { return localStorage.getItem('token') || null; } catch { return null; }
  }

  async function fetchComments() {
    if (!contentId) return;
    try {
      const res = await fetch(`${ENDPOINT}?content_id=${encodeURIComponent(contentId)}`);
      const data = await res.json();
      if (res.ok && data?.ok) {
        comments = data.comments || [];
      }
    } catch (e) {
      console.error('fetchComments error', e);
    }
  }

  async function postComment() {
    reset();
    const commentText = (text ?? '').trim();
    if (!contentId) { err = 'Missing contentId.'; return; }
    if (!commentText) { err = 'Please write a comment first.'; return; }

    const token = getAuthToken();
    if (!token) { err = 'Please sign in to comment.'; return; }

    sending = true;
    try {
      const headers = { 'content-type': 'application/json', authorization: `Bearer ${token}` };
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers,
        body: JSON.stringify({ content_id: contentId, text: commentText })
      });

      const data = await res.json();
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.message || `HTTP ${res.status}`);
      }
      msg = 'Comment posted.';
      text = '';
      dispatch('posted', { comment: data.comment });
      await fetchComments();
    } catch (e) {
      err = e?.message || 'Could not post comment.';
    } finally {
      sending = false;
    }
  }

  onMount(fetchComments);
</script>

<div class="comment-panel">
  <textarea
    bind:value={text}
    rows="3"
    placeholder="Write a comment…"
    on:input={reset}
  />
  <div class="actions">
    <button
      class="btn"
      on:click={postComment}
      disabled={sending || !contentId || !(text || '').trim()}
    >
      {#if sending}Posting…{/if}
      {#if !sending}Post Comment{/if}
    </button>
    {#if !getAuthToken()}
      <small class="hint">Sign in to post with your name.</small>
    {/if}
  </div>

  {#if err}<div class="err">{err}</div>{/if}
  {#if msg}<div class="msg">{msg}</div>{/if}

  {#if comments.length}
    <div class="comments-list">
      {#each comments as c}
        <div class="comment-item">
          <div class="comment-text">{c.text}</div>
          <div class="comment-meta">{new Date(c.created_at).toLocaleString()}</div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .comment-panel { padding: 12px 14px; color: #E8D7BD; }
  textarea {
    width: 100%;
    min-height: 90px;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #5a3a1a;
    background: #E8D7BD;
    color: #1e1006;
    resize: vertical;
    outline: none;
  }
  textarea:focus {
    border-color: #C4A77F;
    box-shadow: 0 0 0 2px rgba(196, 167, 127, 0.2);
  }
  .actions { display: flex; align-items: center; gap: 10px; margin-top: 8px; }
  .btn {
    appearance: none; border: 1px solid #C4A77F; background: transparent; color: #E8D7BD;
    padding: 6px 12px; border-radius: 10px; cursor: pointer; font: inherit;
  }
  .btn[disabled] { opacity: 0.6; cursor: not-allowed; }
  .hint { color: #C4A77F; opacity: 0.85; }
  .err { color: #ffb3b3; font-size: 0.9rem; margin-top: 6px; }
  .msg { color: #b7ffc2; font-size: 0.9rem; margin-top: 6px; }
  .comments-list { margin-top: 12px; border-top: 1px solid #5a3a1a; padding-top: 10px; }
  .comment-item { margin-bottom: 10px; }
  .comment-text { color: #fff; }
  .comment-meta { font-size: 0.8rem; color: #C4A77F; }
</style>
