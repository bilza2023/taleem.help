<!-- src/lib/editor/slides/templates/TitleAndParaEditor.svelte -->

<script>

	import EditableField from "../components/EditableField.svelte";

	export let slide;
	export let runningTime;

</script>

<EditableField
	label="Title"
	object={slide.data[0]}
	property="content"
	multiline={false}
	{runningTime}
/>

<EditableField
	label="Paragraph"
	object={slide.data[1]}
	property="content"
	multiline={true}
	{runningTime}
/>