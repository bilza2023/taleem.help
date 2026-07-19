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

		border: 1px solid var(--pico-muted-border-color);
		border-radius: 12px;
		overflow: hidden;

		background: var(--pico-card-background-color);

		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease;
	}

.card {
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease,
		box-shadow 0.2s ease;
}

.card:hover {
	background: var(--pico-card-sectioning-background-color);
	border-color: var(--pico-primary);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.card img {
	display: block;
	width: calc(100% - 8px);
	height: 140px;
	object-fit: cover;
	margin: 4px;
	padding: 0;
	border-radius: 8px;
}
.content h2 {
	/* margin: 0 0 6px; */
margin: 4px;
padding:4px;
	font-size: 0.95rem;
	font-weight: 600;
	line-height: 1.35;

	color: var(--pico-color);

	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.content p {
	margin: 4px;
padding:4px;
font-size: 0.75rem;
	font-weight: 400;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
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