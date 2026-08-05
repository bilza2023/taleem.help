<!-- src/lib/editor/slides/components/EditableNumber.svelte -->

<script>

	export let label = "";

	export let object;
	export let property = "value";

	export let runningTime = 0;

	export let min = 0;
	export let max = undefined;
	export let step = 1;

	function setShowAt() {
		object.showAt = runningTime;
	}

	function updateValue(e) {
		object[property] = Number(e.target.value);
	}

	function updateShowAt(e) {
		object.showAt = Number(e.target.value);
	}

</script>

<div class="number-editor">

	<div class="toolbar">

		<strong>{label}</strong>

		<div class="showat">

			<span>Show</span>

			<input
				type="number"
				step="0.1"
				min="0"
				value={object.showAt ?? 0}
				on:input={updateShowAt}
			/>

			<button
				type="button"
				on:click={setShowAt}
				title="Use Current Time"
			>
				⏱
			</button>

		</div>

	</div>

	<input
		type="number"
		min={min}
		max={max}
		step={step}
		value={object[property]}
		on:input={updateValue}
	/>

</div>

<style>

.number-editor{

	margin-bottom:12px;

}

.toolbar{

	display:flex;
	align-items:center;
	justify-content:space-between;

	margin-bottom:4px;

}

.showat{

	display:flex;
	align-items:center;
	gap:4px;

	font-size:12px;

}

.showat input{

	width:76px;
	min-width:76px;

	padding:2px 4px;

	text-align:right;

}

.number-editor > input{

	width:120px;

	font:inherit;

}

button{

	padding:2px 6px;

	cursor:pointer;

}

</style>