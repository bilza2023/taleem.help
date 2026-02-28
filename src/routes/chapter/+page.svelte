<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let chapterId = '';
	let chapter = null;
	let book = null;
	let items = [];
	let loading = true;

	onMount(async () => {
		chapterId = $page.url.searchParams.get('id');

		const chaptersRes = await fetch('/data/chapters.json');
		const linksRes = await fetch('/data/links.json');
		const booksRes = await fetch('/data/books.json');

		const chaptersData = await chaptersRes.json();
		const linksData = await linksRes.json();
		const booksData = await booksRes.json();

		let bookId = null;

		// Find chapter + bookId
		for (const group of chaptersData) {
			const found = group.chapters.find(c => c.id === chapterId);
			if (found) {
				chapter = found;
				bookId = group.bookId;
				break;
			}
		}

		// Find book
		if (bookId) {
			book = booksData.find(b => b.id === bookId);
		}

		// Find chapter items
		const linkGroup = linksData.find(l => l.chapterId === chapterId);
		items = linkGroup ? linkGroup.items : [];

		loading = false;
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else if !chapter}
	<h2>Chapter not found</h2>
{:else}

	<!-- Breadcrumb -->
	<nav style="margin-bottom: 1rem;">
		<a href="/">Home</a> /
		{#if book}
			<a href={`/book?id=${book.id}`}>{book.title}</a> /
		{/if}
		<span>{chapter.title}</span>
	</nav>

	<h1>{chapter.title}</h1>
	<p>{chapter.description}</p>

	<h3>Content</h3>
	<ul>
		{#each items as item}
			<li>
				<a href={item.deckPath}>
					{item.title}
				</a>
			</li>
		{/each}
	</ul>

{/if}