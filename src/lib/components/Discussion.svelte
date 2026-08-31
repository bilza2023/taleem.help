<script>
	import apiFetch from "$lib/utils/fetch";

	let { librarySlug } = $props();

	let loaded = $state(false);
	let loading = $state(false);
	let expanded = $state(false);
	let discussions = $state([]);
	let openIds = $state(new Set());

	function formatDate(date) {
		return new Date(date).toLocaleDateString();
	}

	async function toggleDiscussion() {
		expanded = !expanded;
		if (!expanded || loaded) return;

		loading = true;

		try {
			discussions = await apiFetch(
				"GET",
				`/public/library/${librarySlug}/discussion`
			);
			loaded = true;
		}
		catch (err) {
			console.error(err);
		}
		finally {
			loading = false;
		}
	}

	function toggleCard(id) {
		if (openIds.has(id)) openIds.delete(id);
		else openIds.add(id);
		openIds = new Set(openIds);
	}
</script>
<div class="discussion">
	<button class="discussion-btn" onclick={toggleDiscussion}>
		💬 Discussion
		{#if loaded}({discussions.length}){/if}
	</button>

	{#if expanded}
		{#if loading}
			<p>Loading discussion...</p>

		{:else if discussions.length === 0}
			<p class="empty">No discussion yet.</p>

		{:else}
			{#each discussions as d}
				<div class="card">

					{#if openIds.has(d.id)}

						<!-- OPEN: show question once, then answer -->
						<div class="body">

							<div class="question-box">
								<div class="label">❓ Question</div>
								<div>{d.message}</div>
								<div class="date">{formatDate(d.createdAt)}</div>
							</div>

							{#if d.authorResponse}
								<div class="answer-box">
									<div class="label">✅ Author Reply</div>
									<div>{d.authorResponse}</div>
								</div>
							{:else}
								<div class="waiting">
									⏳ Waiting for reply...
								</div>
							{/if}

							<button
								class="link-btn"
								onclick={() => toggleCard(d.id)}
							>
								Show less
							</button>

						</div>

					{:else}

						<!-- CLOSED: show question preview -->
						<div class="card-header">

							<div class="question-preview">
								<div class="label">❓ Question</div>
								<div class="preview">
									{d.message}
								</div>
							</div>

							<div class="date">
								{formatDate(d.createdAt)}
							</div>

						</div>

						<button
							class="link-btn"
							onclick={() => toggleCard(d.id)}
						>
							Show answer →
						</button>

					{/if}

				</div>
			{/each}
		{/if}
	{/if}
</div>

<style>
.discussion{margin-top:2rem}
.discussion-btn{margin-bottom:1rem}
.card{background:var(--theme-panel);border:1px solid var(--theme-border);border-radius:14px;padding:1rem;margin-bottom:1rem;transition:.2s ease}
.card:hover{border-color:var(--theme-accent)}
.card-header{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem}
.question-preview{flex:1}
.label{font-size:.75rem;text-transform:uppercase;letter-spacing:.05em;opacity:.65;margin-bottom:.35rem}
.preview{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-weight:600;line-height:1.5}
.date{font-size:.8rem;opacity:.65;white-space:nowrap}
.body{margin-top:1rem}
.question-box{background:rgba(255,255,255,.03);border-radius:10px;padding:1rem;line-height:1.7;margin-bottom:1rem}
.answer-box{background:rgba(0,140,255,.08);border-left:4px solid var(--theme-accent);border-radius:10px;padding:1rem;line-height:1.7}
.waiting{background:rgba(255,180,0,.08);border-left:4px solid orange;border-radius:10px;padding:1rem;font-style:italic}
.link-btn{margin-top:.75rem;padding:0;background:none;border:none;color:var(--theme-accent);cursor:pointer;font-size:.9rem}
.link-btn:hover{text-decoration:underline}
.empty{opacity:.7;font-style:italic}
@media (max-width:768px){.card-header{flex-direction:column;gap:.5rem}.date{font-size:.75rem}}
</style>