<script>
	import UCard from '$lib/components/UCard.svelte';


	const lessons = [
		{ title: "Why Pre Algebra Course", thumbnail: "/images/banner_brand.png", deck: "prealg-01-why-pre-algebra" },
		{ title: "Number Families", thumbnail: "/images/number-families.jpeg", deck: "prealg-02-number-families" },
		{ title: "Number Line", thumbnail: "/images/number-line-example.jpeg", deck: "prealg-03-number-line" },
		{ title: "Factors and Multiples", thumbnail: "/images/factors-and-mutiples.jpeg", deck: "prealg-04-factors-and-multiples" },
		{ title: "Prime and Composite Numbers", thumbnail: "/images/prime-and-composite-numbers.png", deck: "prealg-05-prime-and-composite-numbers" },
		{ title: "HCF vs LCM", thumbnail: "/images/hcf_vs_lcm.png", deck: "prealg-06-hcf_vs_lcm" },
		{ title: "Fractions Meaning and Types", thumbnail: "/images/fractions-meaning-and-types.png", deck: "prealg-07-fractions-meaning-and-types" },
		{ title: "Equivalent Fractions and Simplification", thumbnail: "/images/equivalent-fractions.png", deck: "prealg-08-equivalent-fractions" },
		{ title: "Operations on Fractions", thumbnail: "/images/fraction-operations.png", deck: "prealg-09-fraction-operations" },
		{ title: "Decimals: Place Value", thumbnail: "/images/decimal-place-value.png", deck: "prealg-10-decimal-place-value" },
		{ title: "Operations on Decimals", thumbnail: "/images/decimal-operations.png", deck: "prealg-11-decimal-operations" },
		{ title: "Percentages", thumbnail: "/images/percentages.png", deck: "prealg-12-percentages" },
		{ title: "Ratio and Proportion", thumbnail: "/images/ratio-proportion.png", deck: "prealg-13-ratio-proportion" },
		{ title: "Powers and Exponents", thumbnail: "/images/exponents.png", deck: "prealg-14-exponents" },
		{ title: "Square Roots", thumbnail: "/images/square-roots.png", deck: "prealg-15-square-roots" },
		{ title: "Algebraic Notation", thumbnail: "/images/algebraic-notation.png", deck: "prealg-16-algebraic-notation" },
		{ title: "Simple Expressions", thumbnail: "/images/simple-expressions.png", deck: "prealg-17-simple-expressions" },
		{ title: "Substitution in Expressions", thumbnail: "/images/substitution.png", deck: "prealg-18-substitution" },
		{ title: "Word Problems", thumbnail: "/images/word-problems.png", deck: "prealg-19-word-problems" },
		{ title: "Bridge to Algebra", thumbnail: "/images/bridge-to-algebra.png", deck: "prealg-20-bridge-to-algebra" }
	];

</script>

<div class="page">
	<h1 class="title">Pre-Algebra Course</h1>

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
