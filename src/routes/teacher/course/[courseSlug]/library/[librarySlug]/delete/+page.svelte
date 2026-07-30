<script>

	import { goto } from "$app/navigation";
	import { page } from "$app/state";
	import { onMount } from "svelte";

	import apiFetch from "$lib/utils/fetch";

	const courseSlug = page.params.courseSlug;
	const librarySlug = page.params.librarySlug;

	let loading = true;
	let deleting = false;
	let error = "";
	let item = null;

	onMount(load);

	async function load() {

		try {

			item = await apiFetch(
				"GET",
				`/admin/library/${librarySlug}`
			);

		}
		catch (err) {

			error = err.message;

		}
		finally {

			loading = false;

		}

	}

	async function remove() {

		error = "";
		deleting = true;

		try {

			await apiFetch(
				"DELETE",
				`/admin/library/${librarySlug}`
			);

			goto(
				`/teacher/course/${courseSlug}/library`
			);

		}
		catch (err) {

			error = err.message;

		}
		finally {

			deleting = false;

		}

	}

	function cancel() {

		goto(
			`/teacher/course/${courseSlug}/library`
		);

	}

</script>

<svelte:head>

	<title>Delete Library Item</title>

</svelte:head>

<header>

	<div>

		<h1>Delete Library Item</h1>

		<p>
			This action cannot be undone.
		</p>

	</div>

</header>

{#if loading}

	<p>Loading...</p>

{:else}

	<article>

		<p>

			Are you sure you want to delete

			<strong>

				{item.title}

			</strong>

			?

		</p>

		<p>

			Slug:
			<code>{item.slug}</code>

		</p>

		{#if error}

			<article>

				{error}

			</article>

		{/if}

		<footer>

			<button
				class="secondary"
				onclick={cancel}
				disabled={deleting}
			>

				Cancel

			</button>

			<button
				onclick={remove}
				disabled={deleting}
			>

				{deleting
					? "Deleting..."
					: "Delete"}

			</button>

		</footer>

	</article>

{/if}

<style>

	header {

		margin-bottom: 2rem;

	}

	article {

		max-width: 700px;

	}

	footer {

		margin-top: 2rem;
		display: flex;
		gap: 1rem;

	}

	code {

		font-family: monospace;

	}

</style>