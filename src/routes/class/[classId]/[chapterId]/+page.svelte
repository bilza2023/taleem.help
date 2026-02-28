<script>
	import { page } from '$app/stores';
	import AppHeader from './AppHeader.svelte';
	import PlayerContainer from './PlayerContainer.svelte';
	import AnswersPanel from './AnswersPanel.svelte';
	import ChapterSidebar from './ChapterSidebar.svelte';

	$: classId = $page.params.classId;
	$: chapterId = $page.params.chapterId;
	$: deckKey = $page.url.searchParams.get('deck');

	let showSidebar = true;

	function toggleSidebar() {
		showSidebar = !showSidebar;
	}
</script>

<style>
.layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.content {
	display: flex;
	flex: 1;
}

.left {
	flex: 1;
	display: flex;
	flex-direction: column;
}
</style>

<div class="layout">

	<AppHeader
		{classId}
		{chapterId}
		onToggle={toggleSidebar}
	/>

	<div class="content">

		<div class="left">
			<PlayerContainer {deckKey} />
			<AnswersPanel />
		</div>

		{#if showSidebar}
			<ChapterSidebar />
		{/if}

	</div>

</div>