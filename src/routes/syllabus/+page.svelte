<script>

	import { onMount } from "svelte";

	import { page }
		from "$app/state";

	import { getByTag }
		from "taleem-tag-engine";

	import {
		fetchSyllabus
	}
	from "$lib/fetch";

	let syllabus = $state(null);

	let items = $state([]);

	let chapters = $state([]);

	let activeIndex = $state(0);

	const course = $derived(
		page.url.searchParams.get("course")
	);

	onMount(async () => {

		if (!course)
			return;

		syllabus =
			await fetchSyllabus(course);

		items =
			syllabus.items;

		chapters =
			getByTag(
				items,
				"type:chapter"
			);
	});

	function getChildren(chapterItem) {

		if (!chapterItem)
			return [];

		const chapterTag =
			chapterItem.tags.find(
				t =>
					t.startsWith(
						"chapter:"
					)
			);

		return getByTag(
			items,
			chapterTag
		).filter(
			item =>
				!item.tags.includes(
					"type:chapter"
				)
		);
	}

	const activeChapter = $derived(
		chapters[activeIndex]
	);

	const children = $derived(
		getChildren(activeChapter)
	);

</script>

<style>

.layout {

	display: flex;

	height: calc(100vh - 60px);

	background: #0f172a;
}

/* SIDEBAR */

.sidebar {

	width: 260px;

	padding: 18px 14px;

	background: #111827;

	border-right:
		1px solid #1f2937;
}

.chapter-link {

	display: block;

	width: 100%;

	text-align: left;

	padding: 10px 12px;

	border-radius: 8px;

	cursor: pointer;

	margin-bottom: 6px;

	font-size: 14px;

	color: #cbd5e1;

	background: transparent;

	border: none;
}
.chapter-link.active {

	background: #2563eb;

	color: white;

	font-weight: 600;
}

/* CONTENT */

.content {

	flex: 1;

	padding: 24px;

	overflow-y: auto;

	background: #0f172a;
}

h2 {

	margin-bottom: 20px;

	color: #e2e8f0;

	font-size: 22px;
}

/* CARDS */

.cards {

	display: grid;

	grid-template-columns:
		repeat(
			auto-fill,
			minmax(230px, 1fr)
		);

	gap: 18px;
}

.card {

	border-radius: 12px;

	padding: 14px;

	background: #1e293b;

	border:
		1px solid #334155;
}

.card img {

	width: 100%;

	height: 120px;

	object-fit: cover;

	border-radius: 8px;

	margin-bottom: 10px;
}

.card a {

	text-decoration: none;

	color: #e2e8f0;

	font-size: 14px;

	font-weight: 500;

	display: block;
}

</style>

<div class="layout">

	<!-- SIDEBAR -->

	<div class="sidebar">

		{#each chapters as chapter, i}

			<button
				class="chapter-link {activeIndex === i ? 'active' : ''}"

				onclick={() =>
					activeIndex = i
				}
			>
				{chapter.title}
			</button>

		{/each}

	</div>

	<!-- CONTENT -->

	<div class="content">

		{#if activeChapter}

			<h2>
				{activeChapter.title}
			</h2>

			<div class="cards">

				{#each children as item}

					<div class="card">

						<a
							href={`/player?deck=${item.slug}`}
						>

							<img
								src={item.image}
								alt={item.title}
							/>

							{item.title}

						</a>

					</div>

				{/each}

			</div>

		{/if}

	</div>

</div>