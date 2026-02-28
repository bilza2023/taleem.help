<script>
	export let classId;
	export let chapterId;
	export let onToggle;
</script>

<style>
.header {
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 14px;
	background: rgba(17, 24, 39, 0.9);
	color: white;
	font-size: 14px;
}

.toggle {
	background: none;
	border: none;
	color: white;
	font-size: 16px;
	cursor: pointer;
	padding: 4px 6px;
	line-height: 1;
}
.toggle:hover {
	opacity: 0.7;
}
</style>

<div class="header">
	<div>🏠 / Class {classId} / {chapterId}</div>

	<button class="toggle" on:click={onToggle} aria-label="Toggle syllabus">
		▥
	</button>
</div>