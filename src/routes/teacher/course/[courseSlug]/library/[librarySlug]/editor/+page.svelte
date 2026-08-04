<!-- src/routes/teacher/course/[courseSlug]/library/[librarySlug]/editor/+page.svelte -->

<script>

	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { page } from "$app/state";

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
				: {
						version: "deck-v1",
						audio: "music.mp3",
						background: {
							backgroundColor: "#111111",
							backgroundImage: null,
							backgroundImageOpacity: 0.3
						},
						deck: []
				  };

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