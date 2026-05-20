<script>

	import { onMount } from "svelte";
import Footer from "../lib/components/Footer.svelte";
	import HomeLinks
		from "$lib/components/HomeLinks.svelte";

	let homeLinks = $state([]);

	onMount(async () => {

		const res =
			await fetch("/home-links.json");

		homeLinks =
			await res.json();
	});

	function goToSyllabus(path) {

		window.location.href = path;
	}

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
		cursor: pointer;

		border-radius: 14px;

		overflow: hidden;

		box-shadow:
			0 4px 12px rgba(0,0,0,0.08);

		transition:
			transform 0.2s ease;
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

		<div
			class="course-card"

			onclick={() =>
				goToSyllabus(
					"/syllabus?course=fbise8math-syllabus"
				)}
		>
			<img
				src="/content/images/fbise8math-poster.png"
				alt="Class 8"
			/>
		</div>

		<div
			class="course-card"

			onclick={() =>
				goToSyllabus(
					"/syllabus?course=fbise9math-syllabus"
				)}
		>
			<img
				src="/content/images/fbise9math-poster.png"
				alt="Class 9"
			/>
		</div>

	</div>

	<div class="line"></div>

	<HomeLinks
		{homeLinks}
	/>

</div>
<Footer/>