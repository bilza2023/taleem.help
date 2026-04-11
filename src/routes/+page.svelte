<script>
	const { data } = $props();
</script>

<div class="wrapper">
	<h1>📚 Deck Index</h1>
<h1><a href="/create">create</a></h1>

	<div class="list">
		{#each data.decks as deck}
			<a class="item" href={`/player?deck=${deck.slug}`}>
				{deck.name}
			</a>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #1e1e24; /* not too dark */
		color: #fff;
	}

	h1 {
		font-size: 32px;
		margin-bottom: 24px;
		font-weight: 600;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 14px;
		width: 100%;
		max-width: 500px;
	}

	.item {
		display: block;
		text-align: center;
		padding: 16px;
		border-radius: 10px;
		font-size: 18px;
		text-decoration: none;
		color: #fff;
		background: #2a2a33;
		border: 1px solid #3a3a45;
		transition: all 0.15s ease;
	}

	.item:hover {
		background: #343441;
		transform: scale(1.02);
	}
</style>