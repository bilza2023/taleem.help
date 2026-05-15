<!-- /src/routes/mcqs/+page.svelte -->

<script>

	const decks = [

		{
			title:
				"What is Taleem.help?",

			slug:
				"what-is-taleem-help",

			image:
				"/content/images/banner_brand.png",

			description:
				"Introduction to the Taleem.help platform and learning philosophy."
		}

	];

</script>

<style>

	:global(body) {
		margin: 0;
		background: #05070c;
		font-family:
			Inter,
			system-ui,
			sans-serif;
	}

	.page {
		min-height: 100vh;
		padding: 40px;
		background:
			linear-gradient(
				to bottom,
				#05070c,
				#0b1220
			);
	}

	.heading {
		margin-bottom: 40px;
	}

	.heading h1 {
		margin: 0 0 10px 0;
		font-size: 42px;
		color: white;
	}

	.heading p {
		margin: 0;
		font-size: 16px;
		color: #94a3b8;
		max-width: 700px;
		line-height: 1.6;
	}

	.cards {
		display: grid;

		grid-template-columns:
			repeat(
				auto-fill,
				minmax(320px, 1fr)
			);

		gap: 24px;
	}

	.card {

		display: block;

		text-decoration: none;

		background:
			rgba(255,255,255,0.04);

		border:
			1px solid rgba(255,255,255,0.08);

		border-radius: 18px;

		overflow: hidden;

		transition:
			transform 0.2s ease,
			border-color 0.2s ease;
	}

	.card:hover {

		transform:
			translateY(-4px);

		border-color:
			#3b82f6;
	}

	.card img {

		width: 100%;

		height: 200px;

		object-fit: cover;

		display: block;

		background: #111;
	}

	.card-body {
		padding: 20px;
	}

	.card-title {

		margin: 0 0 10px 0;

		font-size: 22px;

		color: white;
	}

	.card-description {

		margin: 0;

		font-size: 14px;

		line-height: 1.6;

		color: #94a3b8;
	}

</style>

<div class="page">

	<div class="heading">

		<h1>
			Taleem.help Videos
		</h1>

		<p>
			Focused educational presentations,
			revision systems and narrated
			learning videos designed for
			Pakistani students.
		</p>

	</div>

	<div class="cards">

		{#each decks as deck}

			<a
				class="card"
				href={`/player?deck=${deck.slug}`}
			>

				<img
					src={deck.image}
					alt={deck.title}
				/>

				<div class="card-body">

					<h2 class="card-title">
						{deck.title}
					</h2>

					<p class="card-description">
						{deck.description}
					</p>

				</div>

			</a>

		{/each}

	</div>

</div>