<script>
	export let onToggle;
	export let backHref = '/';

	export let playBtn;
	export let pauseBtn;
	export let stopBtn;
	export let scrub;
	export let timeEl;
</script>

<style>
.navbar {
	height: 40px;
	display: flex;
	align-items: center;
	padding: 0 10px;
	gap: 8px;
	border-top: 1px solid #ddd;
}

.left {
	display: flex;
	align-items: center;
	gap: 8px;
}

.right {
	margin-left: auto;
	display: flex;
	gap: 8px;
}

.scrub-wrap {
	flex: 1;
	display: flex;
	align-items: center;
}

.scrub-wrap input {
	width: 100%;
}

button, a {
	background: none;
	border: none;
	cursor: pointer;
	font-size: 16px;
	text-decoration: none;
	color: inherit;
}
</style>

<div class="navbar">

	<div class="left">
		<button bind:this={playBtn}>▶</button>
		<button bind:this={pauseBtn}>⏸</button>
		<button bind:this={stopBtn}>⏹</button>

		<span bind:this={timeEl}>0.0s</span>

		<div class="scrub-wrap">
			<input bind:this={scrub} type="range" min="0" max="1" step="0.1" />
		</div>
	</div>

	<div class="right">
		<a href={backHref}>←</a>
		<button on:click={onToggle}>▥</button>
	</div>

</div>