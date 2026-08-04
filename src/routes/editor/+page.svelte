
<!-- src/routes/editor/+page.svelte -->

<script>
	import "$lib/styles/editor.css";
	import Editor from "$lib/editor/Editor.svelte";
</script>

<svelte:head>
	<title>Deck Editor</title>
</svelte:head>

<div class="page">
	<Editor />
</div>
