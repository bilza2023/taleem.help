<script>
	const SERVER = "http://142.93.218.121:9000";

	let {
		homeLinks = []
	} = $props();
</script>

<style>

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, 170px);
		justify-content: center;
		gap: 12px;
		margin-top: 40px;
	}

	.card {
		display: flex;
		flex-direction: column;
		background: white;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 1px 4px rgba(0,0,0,0.08);
		text-decoration: none;
		color: inherit;
	}

	.card img {
		width: 100%;
		height: 95px;
		object-fit: cover;
		display: block;
	}

	.content {
		padding: 10px;
		text-align: center;
	}

	h2 {
		font-size: 14px;
		line-height: 1.3;
		margin-bottom: 8px;
		color: #222;
	}

	p {
		font-size: 12px;
		line-height: 1.45;
		color: #666;
	}

</style>

<div class="grid">

	{#each homeLinks as card}

		<a
			class="card"
			href={card.url}
		>

			{#if card.image}
				<img
					src={`${SERVER}${card.image}`}
					alt={card.title}
				/>
			{/if}

			<div class="content">

				<h2>{card.title}</h2>

				{#if card.description}
					<p>{card.description}</p>
				{/if}

			</div>

		</a>

	{/each}

</div>