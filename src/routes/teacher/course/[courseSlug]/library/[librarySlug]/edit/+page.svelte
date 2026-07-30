<script>

	import { goto } from "$app/navigation";
	import { page } from "$app/state";
	import { onMount } from "svelte";

	import apiFetch from "$lib/utils/fetch";

	const slug = page.params.librarySlug;

	let loading = true;
	let saving = false;
	let error = "";

	let form = {

		slug: "",
		title: "",
		description: "",
		type: "HTML",
		body: "",
		thumbnail: "",
		courseSlug: ""

	};

	onMount(load);

	async function load() {

		try {

			const item = await apiFetch(

				"GET",

				`/admin/library/${slug}`

			);

			form = {

				slug: item.slug,
				title: item.title,
				description: item.description ?? "",
				type: item.type,
				body: item.body ?? "",
				thumbnail: item.thumbnail ?? "",
				courseSlug: item.course?.slug ?? ""

			};

		}
		catch (err) {

			error = err.message;

		}
		finally {

			loading = false;

		}

console.log(courseSlug);
console.log(librarySlug);
	}

	async function save() {

		error = "";
		saving = true;

		try {

			await apiFetch(

				"PUT",

				`admin/library/${slug}`,

				form

			);

			goto("/teacher/library");

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

	<title>Edit Library Item</title>

</svelte:head>

<header>

	<div>

		<h1>Edit Library Item</h1>

		<p>

			Update an existing library resource.

		</p>

	</div>

	<button
		type="button"
		class="secondary"
		onclick={() => goto("/teacher/library")}
	>

		Cancel

	</button>

</header>

{#if loading}

	<p>

		Loading...

	</p>

{:else}

	<form

		onsubmit={async (e) => {

			e.preventDefault();

			await save();

		}}

	>

		<label>

			Title

			<input
				bind:value={form.title}
				required
			/>

		</label>

		<label>

			Slug

			<input
				bind:value={form.slug}
				required
			/>

		</label>

		<label>

			Description

			<textarea
				rows="3"
				bind:value={form.description}
			/>

		</label>

		<label>

			Course Slug

			<input
				bind:value={form.courseSlug}
				required
			/>

		</label>

		<label>

			Type

			<select bind:value={form.type}>

				<option value="HTML">HTML</option>
				<option value="JSON">JSON</option>
				<option value="TEXT">TEXT</option>
				<option value="MARKDOWN">MARKDOWN</option>

			</select>

		</label>

		<label>

			Thumbnail

			<input
				bind:value={form.thumbnail}
			/>

		</label>

		<label>

			Body

			<textarea
				rows="15"
				bind:value={form.body}
			/>

		</label>

		{#if error}

			<article>

				{error}

			</article>

		{/if}

		<footer>

			<button
				type="submit"
				disabled={saving}
			>

				{saving ? "Saving..." : "Save Changes"}

			</button>

		</footer>

	</form>

{/if}

<style>

	header {

		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;

	}

	form {

		max-width: 900px;

	}

	label {

		display: block;
		margin-bottom: 1rem;

	}

	input,
	select,
	textarea {

		width: 100%;

	}

	textarea {

		min-height: 8rem;
		font-family: monospace;

	}

	footer {

		margin-top: 2rem;

	}

</style>