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
	`/admin/library?course=${courseSlug}`
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
function editor(slug) {

	goto(`/teacher/course/${courseSlug}/library/${slug}/editor`);

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

			<th>Library Item</th>
			<th>Type</th>
			<th>Status</th>
			<th style="text-align:center;">💬</th>
			<th>Actions</th>

		</tr>

	</thead>

	<tbody>

		{#each items as item}

			<tr>

				<td class="library-item">

					<div class="title">
						{item.title}
					</div>

					<div class="slug">
						{item.slug}
					</div>

				</td>

				<td>

					{#if item.type === "PLAYER"}

						🎬 <small>Player</small>

					{:else if item.type === "ARTICLE"}

						📄 <small>Article</small>

					{:else}

						{item.type}

					{/if}

				</td>

				<td>

					{#if item.status === "PUBLISHED"}

						🟢 <small>Published</small>

					{:else if item.status === "DRAFT"}

						🟡 <small>Draft</small>

					{:else}

						⚫ <small>Archived</small>

					{/if}

				</td>

				<td class="comm">

					{#if item.allowCommunication}
						💬
					{:else}
						🔇
					{/if}

				</td>

				<td>

					<button onclick={() => edit(item.slug)}>
						✏️ Edit
					</button>

					{#if item.type === "PLAYER"}

						<button
							class="warning"
							onclick={() => editor(item.slug)}
						>
							📝 Editor
						</button>

					{/if}

					<button
						class="danger"
						onclick={() => remove(item.slug)}
					>
						🗑 Delete
					</button>

				</td>

			</tr>

		{/each}

	</tbody>

</table>

{/if}

<style>
	header{
	display:flex;
	justify-content:space-between;
	align-items:center;
	margin-bottom:2rem;
}

header h1{
	margin-bottom:.25rem;
}

table{
	width:100%;
}

th{
	text-align:left;
}

.library-item{
	min-width:340px;
}

.library-item .title{
	font-weight:600;
	font-size:1rem;
	margin-bottom:.2rem;
}

.library-item .slug{
	font-family:monospace;
	font-size:.8rem;
	opacity:.65;
	word-break:break-word;
}

.comm{
	text-align:center;
	font-size:1.2rem;
}

th:last-child,
td:last-child{
	width:1%;
	white-space:nowrap;
}

td button{
	margin-right:.5rem;
}

.warning{
	background:#f59e0b;
	border-color:#d97706;
	color:white;
}

.warning:hover{
	background:#d97706;
}

.danger{
	background:#dc2626;
	border-color:#b91c1c;
	color:white;
}

.danger:hover{
	background:#b91c1c;
}
</style>