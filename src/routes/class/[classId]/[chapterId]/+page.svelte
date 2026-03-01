<script>
	import DeckArea from './DeckArea.svelte';
	import ChapterSidebar from './ChapterSidebar.svelte';
	import AnswersPanel from './AnswersPanel.svelte';

	export let params;

	let isSidebarOpen = false;

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}

	const deckKey = `${params.classId}-${params.chapterId}`;
	const backHref = `/class/${params.classId}`;
</script>

<style>
.page {
	display: flex;
	height: 100vh;
	overflow: hidden;
}

/* LEFT SIDE */
.left {
	flex: 1;
	display: flex;
	flex-direction: column;
	min-width: 0; /* important for flex overflow */
}

/* Deck wrapper */
.deck-wrapper {
	flex: 1;
	display: flex;
	flex-direction: column;
	min-height: 0;
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
			<DeckArea
				{deckKey}
				{backHref}
				onToggle={toggleSidebar}
			/>
		</div>

		<div class="answers-wrapper">
			<AnswersPanel />
		</div>

	</div>

	<!-- RIGHT SIDE -->
	<div class="sidebar" class:closed={!isSidebarOpen}>
		<ChapterSidebar />
	</div>

</div>