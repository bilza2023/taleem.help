<script>
	import { config } from "$lib/config.js";

	let { homeLinks = [] } = $props();

	function getPlayHref(card) {
		switch (card.type) {
			case "ARTICLE":
				return `${config.basePath}/articles?article=${encodeURIComponent(card.slug)}`;
			case "PLAYER":
				return `${config.basePath}/player?lesson=${encodeURIComponent(card.slug)}`;
			default:
				return "#";
		}
	}
</script>

<div class="grid">
	{#each homeLinks as card}
		<a class={`card ${card.type?.toLowerCase()}`} href={getPlayHref(card)}>
			{#if card.image}
				<img src={`${config.basePath}/content/images/${card.image}`} alt={card.title} />
			{/if}

			<div class="content">
				<div class="field">
					<span class="label">Title</span>
					<h2>{card.title}</h2>
				</div>

				<div class="field">
					<span class="label">Group</span>
					<p>{card.groupSlug}</p>
				</div>
			</div>
		</a>
	{/each}
</div>



<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 20px;
		margin-top: 24px;
	}

	.card {
		display: flex;
		flex-direction: column;
		color: inherit;
		text-decoration: none;
		border: 1px solid rgba(255, 255, 255, 0.35);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		transition: transform .15s ease, border-color .2s ease, box-shadow .2s ease;
		cursor: pointer;
	}

	.card:hover {
		transform: translateY(-2px);
		border-color: var(--pico-primary);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
	}

	.card.article { background: #265f6d; }
	.card.player  { background: #2f4e36; }

	.card img {
		display: block;
		width: calc(100% - 8px);
		height: 140px;
		object-fit: cover;
		margin: 4px;
		border-radius: 8px;
	}

	.content {
		padding: 8px 12px 12px;
		color: white;
	}

	.field {
		margin-bottom: 8px;
	}

	.label {
		display: block;
		margin-bottom: 2px;
		font-size: .7rem;
		font-weight: 600;
		opacity: .65;
		text-transform: uppercase;
		letter-spacing: .04em;
	}

	.content h2 {
		margin: 0;
		font-size: 1rem;
		font-weight: 700;
		line-height: 1.35;
		color: white;
	}

	.content p {
		margin: 0;
		font-size: .85rem;
		color: white;
		font-weight: 500;
	}
</style>
