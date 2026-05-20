<script>

	let {
		homeLinks = []
	} = $props();

</script>

<style>
.grid {

	display: grid;

	grid-template-columns:
		repeat(auto-fill, 170px);

	justify-content: center;

	gap: 12px;

	margin-top: 40px;

	padding: 0;
}

.card {

	background: white;

	border-radius: 10px;

	overflow: hidden;

	box-shadow:
		0 1px 4px rgba(0,0,0,0.08);

	display: flex;

	flex-direction: column;
}

.card img {

	width: 100%;

	height: 95px;

	object-fit: cover;

	display: block;
}

.content {

	padding: 10px;

	display: flex;

	flex-direction: column;

	flex: 1;

	text-align: center;
}

h2 {

	font-size: 14px;

	line-height: 1.3;

	margin: 0 0 8px;

	color: #222;

	min-height: 36px;
}

p {

	font-size: 12px;

	line-height: 1.45;

	color: #666;

	margin: 0 0 12px;

	flex: 1;
}

.link-btn {

	display: inline-block;

	padding: 7px 12px;

	border-radius: 6px;

	background: #111;

	color: white;

	text-decoration: none;

	font-size: 12px;

	font-weight: 600;
}

.link-btn:hover {

	background: #111;

	color: white;

	text-decoration: none;
}
</style>

<div class="grid">

	{#each homeLinks as card}

		<div class="card">

			<img
				src={card.image}
				alt={card.title}
			/>

			<div class="content">

				<h2>
					{card.title}
				</h2>

				<p>
					{card.description}
				</p>

			<a
	class="link-btn"
	href={`/player?deck=${card.id}`}
>
	Open
</a>

			</div>

		</div>

	{/each}

</div>