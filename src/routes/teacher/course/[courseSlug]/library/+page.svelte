<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/routes/teacher/course/[courseSlug]/library/+page.svelte
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { page } from "$app/state";

	import apiFetch from "$lib/utils/fetch";

	const courseSlug = page.params.courseSlug;
	console.log("courseSlug" , courseSlug);

	let items = [];
	let loading = true;
	let error = "";

	onMount(load);

	async function load() {
		try {

			items = await apiFetch(
				"GET",
				`/public/library?course=${courseSlug}`
			);

		}
		catch (err) {

			error = err.message;

		}
		finally {

			loading = false;

		}

	}

	function create() {

		goto(`/teacher/course/${courseSlug}/library/new`);

	}

	function edit(slug) {

		goto(`/teacher/course/${courseSlug}/library/${slug}/edit`);

	}

	function remove(slug) {

		goto(`/teacher/course/${courseSlug}/library/${slug}/delete`);

	}
</script>

<svelte:head>

	<title>Library</title>

</svelte:head>

<header>

	<div>

		<h1>Library</h1>

		<p>Manage your teaching resources.</p>

	</div>

	<button onclick={create}>+ New</button>

</header>

{#if loading}

	<p>Loading...</p>

{:else if error}

	<article>{error}</article>

{:else if items.length === 0}

	<article>No library items found.</article>

{:else}

	<table>

		<thead>

			<tr>

				<th>Title</th>
				<th>Slug</th>
				<th>Type</th>
				<th>Actions</th>

			</tr>

		</thead>

		<tbody>

			{#each items as item}

				<tr>

					<td>{item.title}</td>
					<td>{item.slug}</td>
					<td>{item.type}</td>

					<td>

						<button onclick={() => edit(item.slug)}>
							Edit
						</button>

						<button
							class="secondary"
							onclick={() => remove(item.slug)}
						>
							Delete
						</button>

					</td>

				</tr>

			{/each}

		</tbody>

	</table>

{/if}

<style>

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}

	header h1 {
		margin-bottom: .25rem;
	}

	table {
		width: 100%;
	}

	th {
		text-align: left;
	}

	th:last-child,
	td:last-child {
		width: 1%;
		white-space: nowrap;
	}

	td button {
		margin-right: .5rem;
	}

</style>