<!--/home/bilal-tariq/00--TALEEM/taleem.help/src/lib/editor/slides/components/SlideHeader.svelte-->

<script>

	export let slide;
	export let index;
	export let collapsed = false;

	export let isLast = false;

	export let onToggle = () => {};
	export let onMoveUp = () => {};
	export let onMoveDown = () => {};
	export let onDelete = () => {};

	export let onSetStart = () => {};
	export let onStartChange = () => {};
	export let onSetEnd = () => {};

</script>

<div class="slide-header">

	<div class="left">

		<button class="icon" on:click={onToggle}>
			{collapsed ? "▶" : "▼"}
		</button>

		<strong>
			#{index + 1}
		</strong>

		<span class="type">
			{slide.type}
		</span>

		<!-- START -->

		<label class="timing">

			<span>Start</span>

			<input
				type="number"
				step="1"
				min="0"
				bind:value={slide.start}
				on:change={() => onStartChange(slide.start)}
				disabled={index === 0}
			/>

		</label>

		<button
			class="icon"
			on:click={onSetStart}
			disabled={index === 0}
			title="Set Start From Audio"
		>
			⏱
		</button>

		<!-- END -->

		{#if isLast}

			<label class="timing">

				<span>End</span>

				<input
					type="number"
					step="0.1"
					min="0"
					bind:value={slide.end}
				/>

			</label>

			<button
				class="icon"
				on:click={onSetEnd}
				title="Set End From Audio"
			>
				⏱
			</button>

		{:else}

			<div class="end">

				End

				<strong>
					{slide.end ?? 0}
				</strong>

			</div>

		{/if}

	</div>

	<div class="right">

		<button class="icon" on:click={onMoveUp}>
			⬆
		</button>

		<button class="icon" on:click={onMoveDown}>
			⬇
		</button>

		<button class="icon" on:click={onDelete}>
			🗑
		</button>

	</div>

</div>

<style>

.slide-header{

	display:flex;
	align-items:center;
	justify-content:space-between;

	padding:4px 8px;

	background:#0f172a;
	border-bottom:1px solid #333;

}

.left{

	display:flex;
	align-items:center;
	gap:6px;

}

.right{

	display:flex;
	align-items:center;
	gap:4px;

}

.type{

	min-width:140px;

}

.timing{

	display:flex;
	align-items:center;
	gap:4px;

	font-size:11px;

}

.timing input{

	width:64px;
	height:24px;

	padding:2px 4px;
	margin:0;

	font-size:12px;

}

.end{

	display:flex;
	align-items:center;
	gap:4px;

	font-size:11px;
	color:#aaa;

	min-width:80px;

}

.icon{

	width:26px;
	height:26px;

	padding:0;

	display:flex;
	align-items:center;
	justify-content:center;

	font-size:12px;

	border:1px solid #3a3a3a;
	border-radius:3px;

	background:#1d1d1d;
	color:#ddd;

	cursor:pointer;

}

.icon:hover:not(:disabled){

	background:#2b2b2b;

}

.icon:disabled{

	opacity:.35;
	cursor:default;

}

</style>