
<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/routes/teacher/course/[courseSlug]/library/[librarySlug]/editor/+page.svelte
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { page } from "$app/state";
import { createPresentationV2 } from "$lib/taleem-specs/create/createPresentationV2.js";
	import Editor from "$lib/editor/Editor.svelte";
	import apiFetch from "$lib/utils/fetch";

	const courseSlug = page.params.courseSlug;
	const librarySlug = page.params.librarySlug;

	let loading = true;
	let saving = false;
	let error = "";
	let deck;

	onMount(load);

async function load() {

	try {

		const item = await apiFetch(
			"GET",
			`/admin/library/${librarySlug}`
		);

		deck = item.body
			? JSON.parse(item.body)
			: createPresentationV2();

	}
	catch (err) {

		error = err.message;

	}
	finally {

		loading = false;

	}

}

async function save(presentation) {
    saving = true;
    error = "";

    try {
        await apiFetch(
            "PUT",
            `/admin/library/${librarySlug}`,
            {
                body: JSON.stringify(presentation, null, 2)
            }
        );

        // goto(`/teacher/course/${courseSlug}/library`);
    }
    catch (err) {
        error = err.message;
    }
    finally {
        saving = false;
    }
}
</script>

<svelte:head>

	<title>Presentation Editor</title>

</svelte:head>

{#if loading}

	<p>Loading...</p>

{:else if error}

	<article>{error}</article>

{:else}

<div class="editorPage">

	<Editor
		{deck}
		onExport={save}
	/>

</div>

{/if}
<style>

.editorPage{
	width:100%;
	min-height:100vh;
	padding:20px;
	box-sizing:border-box;
	background:#111827;
	color:#e5e7eb;
}

:global(body){
	margin:0;
	background:#0f172a;
	color:#e5e7eb;
	font-family:system-ui,sans-serif;
}

:global(input),
:global(textarea),
:global(select){
	background:#1e293b;
	color:#fff;
	border:1px solid #334155;
	border-radius:4px;
	padding:6px 8px;
	box-sizing:border-box;
}

:global(input:focus),
:global(textarea:focus),
:global(select:focus){
	outline:none;
	border-color:#60a5fa;
}

:global(input::placeholder),
:global(textarea::placeholder){
	color:#94a3b8;
}

:global(label),
:global(article),
:global(p),
:global(h1),
:global(h2),
:global(h3),
:global(h4),
:global(strong){
	color:#e5e7eb;
}

</style>