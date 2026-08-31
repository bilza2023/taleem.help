<!-- src/lib/editor/slides/templates/KeyIdeasEditor.svelte -->

<script>

	import Icons from "../assets/Icons.js";
	import EditableField from "../components/EditableField.svelte";
	import {ContentType} from "$lib/taleem-specs/enums";

	export let slide;
	export let runningTime;

	const iconList = Object.values(Icons);

	function addCard() {

		if (slide.data.length >= 4) return;

		slide.data = [
			...slide.data,
			{
				name: ContentType.CARD,
				icon: iconList[0],
				label: "",
				showAt: 0
			}
		];

	}

	function deleteCard(index) {

		if (slide.data.length <= 1) return;

		slide.data = slide.data.filter((_, i) => i !== index);

	}

</script>

{#each slide.data as card, i}

	<div style="display:flex; gap:8px; align-items:flex-start; margin-bottom:12px;">

		<select bind:value={card.icon}>

			{#each iconList as icon}
				<option value={icon}>{icon}</option>
			{/each}

		</select>

		<div style="flex:1;">

			<EditableField
				label={`Idea ${i + 1}`}
				object={card}
				property="label"
				multiline={false}
				{runningTime}
			/>

		</div>

		<button on:click={() => deleteCard(i)}>
			✖
		</button>

	</div>

{/each}

<button on:click={addCard}>
	+ Add Idea
</button>