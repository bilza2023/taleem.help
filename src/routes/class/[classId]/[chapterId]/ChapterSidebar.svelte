<script>
	export let visible = true;
</script>

<style>
.sidebar {
	width: 20%;
	min-width: 240px;
	border-left: 1px solid #e5e7eb;
	padding: 16px;
}
.item {
	padding: 8px;
	margin-bottom: 6px;
	background: #f8fafc;
	cursor: pointer;
}
</style>

{#if visible}
<div class="sidebar">
	<div class="item">Intro</div>
	<div class="item">Exercise 1</div>
	<div class="item">Revision</div>
</div>
{/if}