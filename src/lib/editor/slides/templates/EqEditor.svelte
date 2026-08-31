<!-- src/lib/editor/slides/templates/EqEditor.svelte -->

<script>
import {ContentType,EqLineType,EqSidePanelType} from "$lib/taleem-specs/enums";
	export let slide;
	export let runningTime;

	let active = 0;

	const lineTypes = Object.values(EqLineType);
	const spTypes = Object.values(EqSidePanelType);

function setShowAt(line) {

	line.showAt = runningTime;

	// Force Svelte to notice the nested mutation
	slide.data = [...slide.data];

}

	function addLine(type) {

		slide.data = [
			...slide.data,
			{
				name: ContentType.LINE,
				type,
				content: "",
				showAt: 0,
				spItems: []
			}
		];

		active = slide.data.length - 1;

	}

	function deleteLine(i) {

		if (slide.data.length <= 1) return;

		slide.data = slide.data.filter((_, idx) => idx !== i);

		if (active >= slide.data.length) {
			active = slide.data.length - 1;
		}

	}

	function addSpItem(line, type) {

		if (!line.spItems) line.spItems = [];

		line.spItems = [
			...line.spItems,
			{
				type,
				content: ""
			}
		];

		slide.data = [...slide.data];

	}

	function deleteSpItem(line, i) {

		line.spItems = line.spItems.filter((_, idx) => idx !== i);

		slide.data = [...slide.data];

	}

</script>


{#each slide.data as line, i}

	<fieldset style="margin-bottom:20px;">

		<legend>

			<button on:click={() => active = i}>
				{active === i ? "▼" : "▶"} Line {i + 1}
			</button>

		</legend>

		{#if active === i}

			<div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;">

				<select bind:value={line.type} style="flex:1;">

					{#each lineTypes as t}
						<option value={t}>{t}</option>
					{/each}

				</select>

				<span style="font-size:12px;">Show</span>

				<input
					type="number"
					min="0"
					step="0.1"
					style="width:120px;text-align:right;"
					value={line.showAt ?? 0}
					on:input={(e)=>line.showAt=Number(e.target.value)}
				/>

				<button
					type="button"
					title="Use Current Time"
					on:click={() => setShowAt(line)}
				>
					⏱
				</button>

			</div>

			<textarea
				value={line.content}
				on:input={(e)=>line.content=e.target.value}
				placeholder="Content"
			></textarea>

			<hr>

			<h4>Side Panel</h4>

			{#each line.spItems ?? [] as item, j}

				<div style="display:flex;gap:8px;margin-bottom:8px;">

					<select bind:value={item.type}>

						{#each spTypes as t}
							<option value={t}>{t}</option>
						{/each}

					</select>

					<input
						value={item.content}
						on:input={(e)=>item.content=e.target.value}
						placeholder="Content"
					/>

					<button on:click={() => deleteSpItem(line, j)}>
						✖
					</button>

				</div>

			{/each}

			<div style="display:flex;gap:6px;margin-top:10px;">

				<button
					style="background:#2563eb;color:white;font-size:12px;padding:4px 8px;"
					on:click={() => addSpItem(line, EqSidePanelType.TEXT)}
				>
					📝 Text
				</button>

				<button
					style="background:#059669;color:white;font-size:12px;padding:4px 8px;"
					on:click={() => addSpItem(line, EqSidePanelType.MATH)}
				>
					∑ Math
				</button>

				<button
					style="background:#7c3aed;color:white;font-size:12px;padding:4px 8px;"
					on:click={() => addSpItem(line, EqSidePanelType.IMAGE)}
				>
					🖼 Image
				</button>

				<button
					style="margin-left:auto;background:#b91c1c;color:white;font-size:12px;padding:4px 8px;"
					on:click={() => deleteLine(i)}
				>
					🗑 Delete
				</button>

			</div>

		{/if}

	</fieldset>

{/each}

<hr>

<div style="display:flex;gap:8px;">

	<button on:click={() => addLine(EqLineType.HEADING)}>
		+ Heading
	</button>

	<button on:click={() => addLine(EqLineType.MATH)}>
		+ Math
	</button>

	<button on:click={() => addLine(EqLineType.TEXT)}>
		+ Text
	</button>

</div>