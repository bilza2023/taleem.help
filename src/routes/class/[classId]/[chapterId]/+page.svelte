
<svelte:head>
	<link rel="stylesheet" href="/player/themes/default.css" />
	<link rel="stylesheet" href="/player/taleem.css" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import DeckArea from './DeckArea.svelte';
	import ChapterSidebar from './ChapterSidebar.svelte';
	import AnswersPanel from './AnswersPanel.svelte';
	import { page } from '$app/stores';
	import {browser} from "$app/environment";
	import { resolveAssetPaths,resolveBackground} from '$lib/player/taleem-player-app.js';

$: if (browser) {
	const deckKey = $page.url.searchParams.get('deck');
	if (deckKey) loadDeck(deckKey);
}

async function loadDeck(deckKey) {
	const deckUrl = `/decks/${deckKey}.json`;
	const res = await fetch(deckUrl);
	if (!res.ok) return;

	const data = await res.json();

	resolveAssetPaths(data, '/images/');
	resolveBackground(data, '/images/');
	deck = data;
}

	export let params;

	let isSidebarOpen = false;
	let deck = null;

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}

	// ✅ Get deck name directly from URL and attach .json
	const backHref = `/class/${params.classId}`;
	let links = [];

	onMount(async () => {
		const url = new URL($page.url);
		const deckKey = url.searchParams.get('deck');

		if (!deckKey) {
			console.error('No deck specified in URL');
			return;
		}

		const deckUrl = `/decks/${deckKey}.json`;

		const res = await fetch(deckUrl);
		if (!res.ok) {
			console.error('Deck not found:', deckUrl);
			return;
		}

		const data = await res.json();

		resolveAssetPaths(data, '/images/');
		resolveBackground(data, '/images/');

		deck = data;
///////////////////////links
const linksRes = await fetch('/data/links.json');
if (!linksRes.ok) {
	console.error('Links not found');
} else {
	
	const data = await linksRes.json();
	links = data.links;   // 👈 only the array
}		
	});
</script>

<style>
.page {
	display: flex;
	min-height: 100vh;   /* not fixed height */
}

/* LEFT SIDE */
.left {
	flex: 1;
	position: relative;
	min-width: 0;
}

/* Deck wrapper */
.deck-wrapper {
	height: 100vh;
}

/* Answers panel below deck */
.answers-wrapper {
	border-top: 1px solid #ddd;
}

/* RIGHT SIDEBAR */
.sidebar {
	width: 320px; /* 20% feel */
	transition: width 0.25s ease;
	border-left: 1px solid #ddd;
	overflow: hidden;
}

/* hidden state */
.sidebar.closed {
	width: 0;
	border-left: none;
}
</style>

<div class="page">

	<!-- LEFT SIDE -->
	<div class="left">

		<div class="deck-wrapper">
			{#if deck}
				<DeckArea
					{deck}
					{backHref}
					onToggle={toggleSidebar}
				/>
			{/if}
		</div>

		<div class="answers-wrapper">
			<AnswersPanel />
		</div>

	</div>

	<!-- RIGHT SIDE -->
	<div class="sidebar" class:closed={!isSidebarOpen}>
	{#if links}
		<ChapterSidebar
		{links}
		 />
	{/if}
	</div>

</div>