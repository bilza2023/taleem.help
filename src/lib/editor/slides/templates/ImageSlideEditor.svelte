<!-- src/lib/editor/slides/templates/ImageSlideEditor.svelte -->

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