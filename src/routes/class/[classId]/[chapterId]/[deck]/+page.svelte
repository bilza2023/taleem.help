<svelte:head>
	<link rel="stylesheet" href="/player/themes/default.css" />
	<link rel="stylesheet" href="/player/taleem.css" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import DeckArea from '$lib/components/DeckArea.svelte';
	import SyllabusBar from '$lib/components/SyllabusBar.svelte';
	import AnswersPanel from '$lib/components/AnswersPanel.svelte';

	import { resolveAssetPaths, resolveBackground } from '$lib/player/taleem-player-app.js';

	export let params;

	let deck = null;
	let links = [];
	let isSidebarOpen = false;

	const backHref = `/class/${params.classId}/${params.chapterId}`;

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}

	/* ----------------------------------
	   REACTIVE ROUTE PARAM LISTENER
	-----------------------------------*/
	$: if (browser) {
		const deckKey = $page.params.deck;

		if (deckKey) {
			loadDeck(deckKey);
		}
	}

	async function loadDeck(key) {
		// Reset deck before loading new one
		deck = null;
		
		const res = await fetch(`/decks/${key}.json`);
		if (!res.ok) {
			console.error('Deck not found:', key);
			return;
		}

		const data = await res.json();

		resolveAssetPaths(data, '/images/');
		resolveBackground(data, '/images/');

		deck = data;
	}

	/* ----------------------------------
	   LOAD SIDEBAR LINKS ONCE
	-----------------------------------*/
	onMount(async () => {
		const res = await fetch('/data/links.json');
		if (res.ok) {
			const data = await res.json();
			links = data.links;
		}
	});
</script>

<style>
.page {
	display: flex;
	min-height: 100vh;
}

.left {
	flex: 1;
	position: relative;
	min-width: 0;
}

.deck-wrapper {
	height: 100vh;
}

.answers-wrapper {
	border-top: 1px solid #ddd;
}

.sidebar {
	width: 320px;
	transition: width 0.25s ease;
	border-left: 1px solid #ddd;
	overflow: hidden;
}

.sidebar.closed {
	width: 0;
	border-left: none;
}
</style>

<div class="page">
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

	<div class="sidebar" class:closed={!isSidebarOpen}>
		{#if links}
			<SyllabusBar {links} />
		{/if}
	</div>
</div>