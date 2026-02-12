<script>
	import PageCategoryNav from '$lib/components/PageCategoryNav.svelte';
	import UCard from '$lib/components/UCard.svelte';
	
	export let CONTENT_BASE;
	export let pageNav;
	export let videos;
	export let blog;
	export let courses;

	const IMAGE_BASE = `${CONTENT_BASE}/images`;

	let active = 'videos';

	function setCat(item) {
		active = item.id;
	}

	let filtered = videos;

$: {
	if (active === 'videos') filtered = videos;
	else if (active === 'blog') filtered = blog;
	else if (active === 'courses') filtered = courses;
}

</script>

<div class="page">
	<PageCategoryNav
	items={pageNav}
	active={active}
	evt={setCat}
/>


<div class="cards">
	{#each filtered as q}
	<UCard
	title={q.title}
	thumbnail={`${IMAGE_BASE}/${q.thumbnail}`}
	href={
		q.deck
			? `/player.html?deck=${q.deck}`
			: q.slug
				? `/${q.slug}`
				: '#'
	}
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

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 16px;
	}
</style>
