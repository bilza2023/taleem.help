<!-- src/lib/editor/slides/templates/FillImageEditor.svelte -->

<script>

	import EditableField from "../components/EditableField.svelte";

	export let slide;
	export let runningTime;

</script>

<EditableField
	label="Background Image"
	object={slide.data[0]}
	property="content"
	multiline={false}
	{runningTime}
/>