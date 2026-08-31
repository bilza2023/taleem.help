<!-- src/lib/editor/slides/templates/ImageWithCaptionEditor.svelte -->

<script>

	import EditableField from "../components/EditableField.svelte";

	export let slide;
	export let runningTime;

</script>

<EditableField
	label="Image"
	object={slide.data[0]}
	property="content"
	multiline={false}
	{runningTime}
/>

<EditableField
	label="Caption"
	object={slide.data[1]}
	property="content"
	multiline={true}
	{runningTime}
/>