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
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 28px;
        gap: 20px;
    }

    header h1 {
        margin: 0;
        color: #f8fafc;
        font-size: 28px;
        font-weight: 650;
        letter-spacing: -.4px;
    }

    header p {
        margin: 6px 0 0;
        color: #94a3b8;
        font-size: 14px;
    }

    header > button {
        margin: 0;
        padding: 9px 16px;
        border: 1px solid #334155;
        border-radius: 6px;
        background: #1e293b;
        color: #e2e8f0;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
    }

    header > button:hover {
        background: #293548;
        border-color: #475569;
    }

    table {
        width: 100%;
        margin: 0;
        border-collapse: separate;
        border-spacing: 0;
        background: #111827;
        border: 1px solid #1f2937;
        border-radius: 10px;
        overflow: hidden;
    }

    thead {
        background: #151e2e;
    }

    th {
        padding: 12px 15px;
        text-align: left;
        color: #64748b;
        border-bottom: 1px solid #1f2937;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: .06em;
    }

    td {
        padding: 14px 15px;
        color: #cbd5e1;
        border-bottom: 1px solid #1f2937;
        font-size: 13px;
        vertical-align: middle;
    }

    tbody tr:last-child td {
        border-bottom: 0;
    }

    tbody tr {
        transition: background .12s ease;
    }

    tbody tr:hover {
        background: #172033;
    }

    .library-item {
        min-width: 340px;
    }

    .library-item .title {
        margin-bottom: 4px;
        color: #f1f5f9;
        font-size: 14px;
        font-weight: 600;
    }

    .library-item .slug {
        color: #64748b;
        font-family: monospace;
        font-size: 11px;
        word-break: break-word;
    }

    .comm {
        width: 50px;
        text-align: center;
        font-size: 15px;
    }

    td small {
        color: #94a3b8;
        font-size: 12px;
    }

    th:last-child,
    td:last-child {
        width: 1%;
        white-space: nowrap;
    }

    td:last-child {
        padding-right: 12px;
    }

    td button {
        margin: 0 5px 0 0;
        padding: 7px 10px;
        border: 1px solid #334155;
        border-radius: 5px;
        background: #1e293b;
        color: #dbeafe;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        transition: background .12s ease, border-color .12s ease;
    }

    td button:last-child {
        margin-right: 0;
    }

    td button:hover {
        background: #293548;
        border-color: #475569;
    }

    .warning {
        background: #422006;
        border-color: #92400e;
        color: #fbbf24;
    }

    .warning:hover {
        background: #713f12;
        border-color: #b45309;
    }

    .danger {
        background: #450a0a;
        border-color: #991b1b;
        color: #fca5a5;
    }

    .danger:hover {
        background: #7f1d1d;
        border-color: #b91c1c;
    }

    article {
        margin: 0;
        padding: 18px 20px;
        border: 1px solid #1f2937;
        border-radius: 8px;
        background: #111827;
        color: #94a3b8;
        font-size: 14px;
    }

    @media (max-width: 850px) {
        header {
            align-items: flex-start;
        }

        table {
            display: block;
            overflow-x: auto;
        }

        .library-item {
            min-width: 240px;
        }

        th,
        td {
            padding: 11px 12px;
        }

        td button {
            margin-bottom: 4px;
        }
    }
</style>