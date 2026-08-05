<!-- src/lib/editor/slides/templates/BulletListEditor.svelte -->

<script>

	import EditableField from "../components/EditableField.svelte";

	export let slide;
	export let runningTime;

	function addBullet() {

		slide.data = [
			...slide.data,
			{
				name: "bullet",
				content: "",
				showAt: 0
			}
		];

	}

	function deleteBullet(index) {

		const bullets = slide.data.filter(x => x.name === "bullet");

		if (bullets.length <= 1) return;

		const bullet = bullets[index];

		slide.data = slide.data.filter(x => x !== bullet);

	}

</script>

<!-- Heading -->

<EditableField
	label="Heading"
	object={slide.data[0]}
	property="content"
	multiline={false}
	{runningTime}
/>

<!-- Bullets -->

{#each slide.data.filter(x => x.name === "bullet") as bullet, i}

	<div style="display:flex; gap:8px; align-items:flex-start; margin-bottom:8px;">

		<div style="flex:1;">

			<EditableField
				label={`Bullet ${i + 1}`}
				object={bullet}
				property="content"
				multiline={false}
				{runningTime}
			/>

		</div>

		<button on:click={() => deleteBullet(i)}>
			✖
		</button>

	</div>

{/each}

<button on:click={addBullet}>
	+ Add Bullet
</button>