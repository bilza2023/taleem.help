<script>
	import PageCategoryNav from '$lib/components/PageCategoryNav.svelte';
	import UCard from '$lib/components/UCard.svelte';

	export let data;

	let active = 'videos';

	function setCat(item) {
		active = item.id;
	}

	// Choose list based on active tab
	$: {
		if (active === 'videos') filtered = data.videos;
		else if (active === 'blog') filtered = data.blog;
		else if (active === 'courses') filtered = data.courses;
	}

	let filtered = data.videos;
</script>

<div class="page">

	<PageCategoryNav
		items={data.pageNav}
		active={active}
		evt={setCat}
	/>

	<div class="cards">
		{#each filtered as q}
			<UCard
				title={q.title}
				thumbnail={q.thumbnail}
				href={q.href}
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
