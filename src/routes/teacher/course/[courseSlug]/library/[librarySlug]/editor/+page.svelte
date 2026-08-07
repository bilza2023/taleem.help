<!-- src/routes/teacher/course/[courseSlug]/library/[librarySlug]/editor/+page.svelte -->

<script>

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

	async function save({ body, source }) {

		saving = true;
		error = "";

		try {

			await apiFetch(

				"PUT",

				`/admin/library/${librarySlug}`,

				{
					body: JSON.stringify(body, null, 2),
					source: JSON.stringify(source, null, 2)
				}

			);

			goto(`/teacher/course/${courseSlug}/library`);

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

	<Editor
		{deck}
		onExport={save}
	/>

{/if}