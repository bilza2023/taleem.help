<script>
	import { config } from "$lib/config";

	let {
		homeLinks = []
	} = $props();
</script>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 20px;
		margin-top: 24px;
	}

	.card {
		display: block;
		text-decoration: none;
		color: inherit;
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease;
	}

	.card:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
	}

	.card img {
		display: block;
		width: 100%;
		height: 140px;
		object-fit: cover;
	}

	.content {
		padding: 16px;
	}

	.content h2 {
		margin: 0 0 10px;
		font-size: 1.15rem;
		font-weight: 700;
		line-height: 1.35;
		color: #1f2937;
	}

	.content p {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.5;
		color: #6b7280;
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
					src={`${config.apiUrl}${card.image}`}
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