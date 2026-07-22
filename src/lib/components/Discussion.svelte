<script>
	import { config } from "$lib/config";

	let {
		librarySlug
	} = $props();

	let loaded = $state(false);
	let loading = $state(false);
	let expanded = $state(false);
	let discussions = $state([]);

	function formatDate(date) {
		return new Date(date).toLocaleDateString();
	}

	async function toggleDiscussion() {

		expanded = !expanded;

		if (!expanded || loaded)
			return;

		loading = true;

		try {

			const token = localStorage.getItem("token");

			const res = await fetch(
				`${config.apiUrl}/communication/library/${librarySlug}`,
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			);

			if (!res.ok)
				throw new Error("Unable to load discussion.");

			discussions = await res.json();

			loaded = true;

		}
		catch (err) {

			console.error(err);

		}
		finally {

			loading = false;

		}

	}

	function toggleCard(card) {
		card.open = !card.open;
	}
</script>

<div class="discussion">

	<button
		class="discussion-btn"
		onclick={toggleDiscussion}>

		💬 Discussion

		{#if loaded}
			({discussions.length})
		{/if}

	</button>

	{#if expanded}

		{#if loading}

			<p>Loading discussion...</p>

		{:else}

			{#if discussions.length===0}

				<p class="empty">
					No discussion yet.
				</p>

			{:else}

				{#each discussions as d}

					<div class="card">

						<div
							class="card-header"
							onclick={() => toggleCard(d)}>

							<div>

								<strong>
									❓
									{d.message}
								</strong>

							</div>

							<div class="date">

								{formatDate(d.createdAt)}

							</div>

						</div>

						{#if d.open}

							<div class="body">

								<div class="question">

									{d.message}

								</div>

								{#if d.authorResponse}

									<div class="answer">

										<strong>
											Author
										</strong>

										<p>
											{d.authorResponse}
										</p>

									</div>

								{:else}

									<div class="waiting">

										Waiting for reply...

									</div>

								{/if}

							</div>

						{/if}

					</div>

				{/each}

			{/if}

		{/if}

	{/if}

</div>

<style>

.discussion{

	margin-top:2rem;

}

.discussion-btn{

	margin-bottom:1rem;

}

.card{

	border:1px solid var(--pico-muted-border-color);

	border-radius:12px;

	padding:.75rem;

	margin-bottom:.75rem;

	background:var(--pico-card-background-color);

}

.card-header{

	display:flex;

	justify-content:space-between;

	gap:1rem;

	cursor:pointer;

	user-select:none;

}

.card-header strong{

	display:-webkit-box;

	-webkit-line-clamp:2;

	-webkit-box-orient:vertical;

	overflow:hidden;

}

.date{

	font-size:.8rem;

	opacity:.7;

	white-space:nowrap;

}

.body{

	margin-top:1rem;

}

.question{

	margin-bottom:1rem;

	line-height:1.6;

}

.answer{

	border-left:4px solid var(--pico-primary);

	padding-left:1rem;

}

.answer p{

	margin:.4rem 0 0;

}

.waiting{

	color:#b8860b;

	font-style:italic;

}

.empty{

	opacity:.7;

	font-style:italic;

}

</style>