<script>
	import { onMount } from 'svelte';
	import UCard from '$lib/components/UCard.svelte';

	let lessons = [];
	let title = '';
	let error = '';
	let loading = true;

	async function loadCourse() {
		const params = new URLSearchParams(window.location.search);
		const course = params.get('course');

		if (!course) {
			error = 'No course specified.';
			loading = false;
			return;
		}

		try {
			const res = await fetch(`/data/courses/${course}.json`);

			if (!res.ok) {
				throw new Error('Course not found');
			}

			const data = await res.json();

			title = data.title || '';
			lessons = data.lessons || [];
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	}

	onMount(loadCourse);
</script>

<div class="page">
	{#if loading}
		<h1 class="title">Loading...</h1>
	{:else if error}
		<h1 class="title">{error}</h1>
	{:else}
		<h1 class="title">{title}</h1>

		<div class="cards">
			{#each lessons as lesson}
				<UCard
					title={lesson.title}
					thumbnail={`/images/${lesson.thumbnail}`}
					href={`/player.html?deck=${lesson.deck}`}
				/>
			{/each}
		</div>
	{/if}
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
