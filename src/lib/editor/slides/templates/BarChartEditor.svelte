<!-- src/lib/editor/slides/templates/BarChartEditor.svelte -->

<script>

	import EditableField from "../components/EditableField.svelte";
	import EditableNumber from "../components/EditableNumber.svelte";
import {ContentType} from "$lib/taleem-specs/enums";

	export let slide;
	export let runningTime;

	function addBar() {

		slide.data = [
			...slide.data,
			{
				name: ContentType.BAR,
				label: "",
				value: 0,
				showAt: 0
			}
		];

	}

	function deleteBar(index) {

		if (slide.data.length <= 1) return;

		slide.data = slide.data.filter((_, i) => i !== index);

	}

</script>

{#each slide.data as bar, i}

	<div style="display:flex; gap:12px; align-items:flex-start; margin-bottom:12px;">

		<div style="flex:1;">

			<EditableField
				label={`Bar ${i + 1}`}
				object={bar}
				property="label"
				multiline={false}
				{runningTime}
			/>

		</div>

		<div>

			<EditableNumber
				label="Value"
				object={bar}
				property="value"
				min={0}
				max={100}
				step={1}
				{runningTime}
			/>

		</div>

		<button on:click={() => deleteBar(i)}>
			✖
		</button>

	</div>

{/each}

<button on:click={addBar}>
	+ Add Bar
</button>