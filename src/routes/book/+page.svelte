<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let bookId = '';
	let book = null;
	let chapters = [];
	let loading = true;

	onMount(async () => {
		bookId = $page.url.searchParams.get('id');

		const booksRes = await fetch('/data/books.json');
		const chaptersRes = await fetch('/data/chapters.json');

		const books = await booksRes.json();
		const chaptersData = await chaptersRes.json();

		book = books.find(b => b.id === bookId);

		const group = chaptersData.find(c => c.bookId === bookId);
		chapters = group ? group.chapters : [];

		loading = false;
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else if !book}
	<h2>Book not found</h2>
{:else}
	<h1>{book.title}</h1>
	<p>{book.description}</p>

	<h3>Chapters</h3>
	<ul>
		{#each chapters as chapter}
			<li>
				<a href={`/chapter?id=${chapter.id}`}>
					{chapter.title}
				</a>
			</li>
		{/each}
	</ul>
{/if}