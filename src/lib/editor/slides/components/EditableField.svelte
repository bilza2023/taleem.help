<!-- src/lib/editor/slides/components/EditableField.svelte -->

<script>

	export let label = "";

	export let object;
	export let property = "content";

	export let multiline = true;

	export let runningTime = 0;

	function setShowAt() {
		object.showAt = runningTime;
	}

	function updateText(e) {
		object[property] = e.target.value;
	}

	function updateShowAt(e) {
		object.showAt = Number(e.target.value);
	}

</script>

<div class="field-editor">

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

	{#if multiline}

		<textarea
			rows="3"
			value={object[property]}
			on:input={updateText}
		/>

	{:else}

		<input
			type="text"
			value={object[property]}
			on:input={updateText}
		/>

	{/if}

</div>

<style>

.field-editor{

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

	width:100px;
    text-align: center;
	min-width:76px;

	padding:2px 4px;

	text-align:right;

}

textarea,
input[type="text"]{

	width:100%;
	font:inherit;

}

textarea{

	min-height:70px;
	resize:vertical;

}

button{

	padding:2px 6px;
	cursor:pointer;

}

</style>