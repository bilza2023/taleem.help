<script>
	import UCard from '$lib/components/UCard.svelte';

	const lessons = [
		{ title: "Why Pre Physics?", thumbnail: "/images/box.webp", deck: "prephy-01-why-pre-physics" },
		{ title: "Physical Quantities & Measurement", thumbnail: "/images/box.webp", deck: "prephy-02-physical-quantities" },
		{ title: "SI Units & Derived Units", thumbnail: "/images/box.webp", deck: "prephy-03-si-units" },
		{ title: "Scalars vs Vectors", thumbnail: "/images/box.webp", deck: "prephy-04-scalars-vectors" },
		{ title: "Motion & Reference Frames", thumbnail: "/images/box.webp", deck: "prephy-05-motion-reference-frame" },
		{ title: "Distance, Displacement, Speed & Velocity", thumbnail: "/images/box.webp", deck: "prephy-06-speed-velocity" },
		{ title: "Acceleration (Conceptual)", thumbnail: "/images/box.webp", deck: "prephy-07-acceleration" },
		{ title: "Force & Types of Forces", thumbnail: "/images/box.webp", deck: "prephy-08-forces" },
		{ title: "Mass vs Weight", thumbnail: "/images/box.webp", deck: "prephy-09-mass-weight" },
		{ title: "Energy – The Big Idea", thumbnail: "/images/box.webp", deck: "prephy-10-energy" }
	];
</script>

<div class="page">
	<h1 class="title">Pre-Physics Course</h1>

	<div class="cards">
		{#each lessons as lesson}
			<UCard
				title={lesson.title}
				thumbnail={lesson.thumbnail}
				href={`/player.html?deck=${lesson.deck}`}
			/>
		{/each}
	</div>
</div>

<style>
	.page {
		min-height: 100vh;
		background: var(--backgroundColor);
		color: var(--baseTextColor);
		padding: 20px;
		font-family: var(--fontBase);
	}

	.title {
		margin-bottom: 20px;
		font-size: 28px;
		font-weight: 600;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 16px;
	}
</style>
