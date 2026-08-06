<!-- src/lib/editor/slides/templates/TwoColumnTextEditor.svelte -->

<script>

	import EditableField from "../components/EditableField.svelte";
	import {ContentType} from "$lib/taleem-specs/enums";

	export let slide;
	export let runningTime;

	function addLeft() {
		slide.data = [
			...slide.data,
			{
				name: ContentType.LEFT,
				content: "",
				showAt: 0
			}
		];
	}

	function addRight() {
		slide.data = [
			...slide.data,
			{
				name: ContentType.RIGHT,
				content: "",
				showAt: 0
			}
		];
	}

	function deleteLeft(index) {

		const leftItems = slide.data.filter(
			x => x.name === ContentType.LEFT
		);

		if (leftItems.length <= 1) return;

		const item = leftItems[index];

		slide.data = slide.data.filter(
			x => x !== item
		);

	}

	function deleteRight(index) {

		const rightItems = slide.data.filter(
			x => x.name === ContentType.RIGHT
		);

		if (rightItems.length <= 1) return;

		const item = rightItems[index];

		slide.data = slide.data.filter(
			x => x !== item
		);

	}

</script>

<EditableField
	label="Title"
	object={slide.data[0]}
	property="content"
	multiline={false}
	{runningTime}
/>

<div style="display:flex; gap:20px;">

	<div style="flex:1;">

		<h4>Left</h4>

		{#each slide.data.filter(x => x.name === ContentType.LEFT) as item, i}

			<div style="display:flex; gap:8px; align-items:flex-start; margin-bottom:8px;">

				<div style="flex:1;">

					<EditableField
						label={`Left ${i + 1}`}
						object={item}
						property="content"
						multiline={false}
						{runningTime}
					/>

				</div>

				<button on:click={() => deleteLeft(i)}>
					✖
				</button>

			</div>

		{/each}

		<button on:click={addLeft}>
			+ Add Left
		</button>

	</div>

	<div style="flex:1;">

		<h4>Right</h4>

		{#each slide.data.filter(x => x.name === ContentType.RIGHT) as item, i}

			<div style="display:flex; gap:8px; align-items:flex-start; margin-bottom:8px;">

				<div style="flex:1;">

					<EditableField
						label={`Right ${i + 1}`}
						object={item}
						property="content"
						multiline={false}
						{runningTime}
					/>

				</div>

				<button on:click={() => deleteRight(i)}>
					✖
				</button>

			</div>

		{/each}

		<button on:click={addRight}>
			+ Add Right
		</button>

	</div>

</div>