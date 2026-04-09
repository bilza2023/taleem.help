<script>
	import BottomNavBar from "./BottomNavBar.svelte";
	import SyllabusBar from "./SyllabusBar.svelte";

	let {
		html,
		timer,
		currentTime,
		deckEndTime,
		links,
		root = $bindable()
	} = $props();
</script>

<!-- EXACT SAME STRUCTURE AS BEFORE -->
<div class="root">
	<div class="left">
		<div class="stage" bind:this={root}>
			{@html html}
		</div>

		<BottomNavBar
			{timer}
			{currentTime}
			{deckEndTime}
		/>
	</div>

	<div class="sidebar">
		<SyllabusBar {links} />
	</div>
</div>