<script>

	import { goto } from "$app/navigation";
	import { page } from "$app/state";

	import apiFetch from "$lib/utils/fetch";

	const courseSlug = page.params.courseSlug;

	let saving = false;
	let error = "";

	let form = {

		slug: "",
		title: "",
		description: "",
		type: "ARTICLE",
		body: "",
		thumbnail: "",
		courseSlug

	};

	async function save() {

		error = "";
		saving = true;

		try {

			await apiFetch(

				"POST",

				"/admin/library",

				form

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

	<title>New Library Item</title>

</svelte:head>

<header>

	<div>

		<h1>New Library Item</h1>

		<p>

			Create a new library resource.

		</p>

	</div>

	<button

		type="button"

		class="secondary"

		onclick={() => goto(`/teacher/course/${courseSlug}/library`)}

	>

		Cancel

	</button>

</header>

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

		Course

		<input
			bind:value={form.courseSlug}
			readonly
		/>

	</label>

	<label>

		Type

		<select bind:value={form.type}>

			<option value="ARTICLE">ARTICLE</option>
			<option value="PLAYER">PLAYER</option>
			<option value="MCQ">MCQ</option>

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

			{saving ? "Creating..." : "Create Library Item"}

		</button>

	</footer>

</form>

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

	input[readonly] {

		background: var(--pico-muted-background-color);
		cursor: default;

	}

	textarea {

		min-height: 8rem;
		font-family: monospace;

	}

	footer {

		margin-top: 2rem;

	}

</style>