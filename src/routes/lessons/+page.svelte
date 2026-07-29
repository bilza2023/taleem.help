<script>
	// /src/routes/lessons/+page.svelte

	import HomeLinks from "$lib/components/HomeLinks.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Subnav from "$lib/components/Subnav.svelte";
	import apiFetch from "$lib/utils/fetch";
	import { page } from "$app/state";

	let course = $state(null);
	let lessons = $state(null);
	let error = $state("");

	async function loadCourse(courseSlug) {

		try {

			error = "";

			// -----------------------------------------
			// Course information
			// -----------------------------------------

			course = await apiFetch(
				"GET",
				`/public/course/${courseSlug}`
			);

			course.image = `/content/images/${course.thumbnail}`;

			// -----------------------------------------
			// Lessons
			// -----------------------------------------

			const items = await apiFetch(
				"GET",
				`/public/course/${courseSlug}/list`
			);

			lessons = items.map(item => ({
				...item,
				image: `/content/images/${item.thumbnail}`
			}));

		}
		catch (err) {

			error = err.message;

		}

	}

	$effect(() => {

		const courseSlug = page.url.searchParams.get("course");

		if (courseSlug) {

			loadCourse(courseSlug);

		}

	});
</script>

<Subnav active="courses" />

{#if error}

	<p>{error}</p>

{:else if !course || !lessons}

	<p>Loading...</p>

{:else}

	<div class="container">

		<section class="course">

			<img
				src={course.image}
				alt={course.title}
			/>

			<div>

				<h1>{course.title}</h1>

				<p>{course.description}</p>

				<p>
					<strong>Access:</strong>
					{course.access}
				</p>

				<p>
					<strong>Lessons:</strong>
					{lessons.length}
				</p>

			</div>

		</section>

		<HomeLinks homeLinks={lessons} />

	</div>

	<Footer />

{/if}

<style>

	.container {
		padding: 10px;
		margin: 10px;
		min-height: 100vh;
	}

	.course {
		display: flex;
		gap: 24px;
		align-items: flex-start;
		margin-bottom: 30px;
	}

	.course img {
		width: 260px;
		border-radius: 12px;
	}

	.course h1 {
		margin-top: 0;
	}

	.course p {
		line-height: 1.6;
	}

	@media (max-width: 700px) {

		.course {
			flex-direction: column;
		}

		.course img {
			width: 100%;
			max-width: 320px;
		}

	}

</style>