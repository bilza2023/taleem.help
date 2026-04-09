<script>
	let {
		onToggle = () => {},
		backHref = '/',
		playBtn = null,
		pauseBtn = null,
		stopBtn = null,
		scrub = null,
		timeEl = null
	} = $props();
</script>

<div class="navbar">

	<!-- Fixed left: buttons + time -->
	<div class="controls">
		<button bind:this={playBtn}>▶</button>
		<button bind:this={pauseBtn}>⏸</button>
		<button bind:this={stopBtn}>⏹</button>
		<span class="time" bind:this={timeEl}>0.0s</span>
	</div>

	<!-- Scrub fills all remaining space -->
	<div class="scrub-wrap">
		<input bind:this={scrub} type="range" min="0" max="200" step="0.1" />
	</div>

	<!-- Fixed right: back + toggle -->
	<div class="right">
		<a href={backHref}>←</a>
		<button onclick={onToggle}>▥</button>
	</div>

</div>

<style>
.navbar {
	height: 40px;
	display: flex;
	align-items: center;
	padding: 0 10px;
	gap: 8px;
	border-top: 1px solid #333;
	background: rgba(0, 0, 0, 0.3);
	color: white;
}

.controls {
	display: flex;
	align-items: center;
	gap: 8px;
	flex-shrink: 0;
}

.time {
	font-size: 13px;
	color: white;
	white-space: nowrap;
}

.scrub-wrap {
	flex: 1;
	display: flex;
	align-items: center;
	min-width: 0;
}

.scrub-wrap input {
	width: 100%;
}

.right {
	display: flex;
	align-items: center;
	gap: 8px;
	flex-shrink: 0;
}

button, a {
	background: none;
	border: none;
	cursor: pointer;
	font-size: 16px;
	text-decoration: none;
	color: white;
}
</style>