<script>
	import { onMount } from 'svelte';
	import SyllabusCard from '$lib/components/SyllabusCard.svelte';

	let syllabus = $state([]);

	onMount(async () => {
		const res = await fetch('/data/courses/fbise8math-syllabus.json');
		syllabus = await res.json();
	});
</script>

<div class="grid">
	{#each syllabus as item (item.id)}
		<SyllabusCard {...item} />
	{/each}
</div>

<style>
.grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
	gap: 24px;
	padding: 40px;
}
</style>

