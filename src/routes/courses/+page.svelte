<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import UCard from '$lib/components/UCard.svelte';

	let courseSlug = '';
	let courseData = null;
	let lessons = [];
	let error = null;

	const IMAGE_BASE = '/images';

	async function loadCourse(slug) {
		try {
			const res = await fetch(`/data/courses/${slug}.json`);

			if (!res.ok) {
				throw new Error('Course not found');
			}

			courseData = await res.json();
			lessons = courseData.lessons || [];
		} catch (err) {
			error = err.message;
		}
	}

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		courseSlug = params.get('course');

		if (courseSlug) {
			loadCourse(courseSlug);
		} else {
			error = 'No course specified';
		}
	});
</script>

{#if error}
	<p style="padding:2rem;">{error}</p>
{:else if !courseData}
	<p style="padding:2rem;">Loading course...</p>
{:else}

	<section style="padding:2rem;">
		<h1>{courseData.title}</h1>
		<p>{courseData.description}</p>

		<div class="cards">
			{#each lessons as lesson}
				<UCard
					title={lesson.title}
					thumbnail={`${IMAGE_BASE}/${lesson.thumbnail}`}
					href={`/player.html?deck=${lesson.deck}`}
				/>
			{/each}
		</div>
	</section>

{/if}

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}
</style>
