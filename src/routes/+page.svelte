<script>

	import { onMount } from "svelte";

	import HomeLinks
		from "$lib/components/HomeLinks.svelte";

	import Footer
		from "$lib/components/Footer.svelte";

	import {
		fetchHomeLinks
	}
	from "$lib/fetch";

	let homeLinks = $state([]);

	onMount(async () => {

		homeLinks =
			await fetchHomeLinks();
	});

</script>

<style>

	.container {

		padding: 40px;

		text-align: center;
	}

	.courses {

		display: flex;

		justify-content: center;

		gap: 30px;

		flex-wrap: wrap;

		margin-bottom: 40px;
	}

	.course-card {

		width: 420px;

		border-radius: 14px;

		overflow: hidden;

		box-shadow:
			0 4px 12px rgba(0,0,0,0.08);

		text-decoration: none;

		display: block;
	}

	.course-card img {

		width: 100%;

		display: block;
	}

	.line {

		width: 100%;

		max-width: 900px;

		height: 1px;

		margin: 40px auto;

		background:
			linear-gradient(
				to right,
				transparent,
				rgba(255,255,255,0.15),
				transparent
			);
	}

</style>

<div class="container">

	<div class="courses">

		<a
			class="course-card"

			href="/syllabus?course=fbise8math-syllabus"
		>
			<img
				src="/content/images/class8.png"
				alt="Class 8"
			/>
		</a>

		<a
			class="course-card"

			href="/syllabus?course=fbise9math-syllabus"
		>
			<img
				src="/content/images/class9.png"
				alt="Class 9"
			/>
		</a>

	</div>

	<div class="line"></div>

	<HomeLinks
		{homeLinks}
	/>

	<Footer />

</div>