<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/routes/teacher/+page.svelte
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";

	import apiFetch from "$lib/utils/fetch";

	let loading = true;
	let error = "";
	let courses = [];

	onMount(load);

	async function load() {

		try {

			courses = await apiFetch(

				"GET",

				"/admin/courses"

			);

		}
		catch (err) {

			error = err.message;

		}
		finally {

			loading = false;

		}

	}

	function openLibrary(slug) {

		goto(`/teacher/course/${slug}/library`);

	}

	function openCommunication(slug) {

		goto(`/teacher/course/${slug}/communication`);

	}
function openGroupings(slug) {
    goto(`/teacher/course/${slug}/groupings`);
}
	function openSubscriptions(slug) {

		goto(`/teacher/course/${slug}/subscriptions`);

	}

</script>

<svelte:head>

	<title>Teacher Dashboard</title>

</svelte:head>


<h1>

	My Courses

</h1>

<p>

	Select a course to manage.

</p>

{#if loading}

	<p>

		Loading...

	</p>

{:else if error}

	<article>

		{error}

	</article>

{:else if courses.length === 0}

	<article>

		No courses assigned to your account.

	</article>

{:else}

	<table>

		<thead>

			<tr>

				<th>Course</th>
				<th>Library</th>
				<th>Groupings</th>
				<th>Communication</th>
				<th>Subscriptions</th>

			</tr>

		</thead>

		<tbody>

			{#each courses as course}

				<tr>

					<td>

						<strong>{course.title}</strong><br>

						<small>{course.slug}</small>

					</td>

					<td>

						<button
							onclick={() => openLibrary(course.slug)}
						>

							Library

						</button>

					</td>

                    <td>
    <button onclick={() => openGroupings(course.slug)}>
        Groupings
    </button>
</td>
					<td>

						<button
							onclick={() => openCommunication(course.slug)}
						>

							Communication

						</button>

					</td>

					<td>

						<button
							onclick={() => openSubscriptions(course.slug)}
						>

							Subscriptions

						</button>

					</td>

				</tr>

			{/each}

		</tbody>

	</table>

{/if}

<style>
    :global(body) {
        margin: 0;
        background: #0b1120;
        color: #e5e7eb;
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    h1 {
        margin: 0;
        font-size: 28px;
        font-weight: 650;
        letter-spacing: -.4px;
        color: #f8fafc;
    }

    p {
        margin: 6px 0 0;
        color: #94a3b8;
        font-size: 14px;
    }

    table {
        width: 100%;
        margin-top: 28px;
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
        padding: 13px 16px;
        text-align: left;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: .06em;
        color: #64748b;
        border-bottom: 1px solid #1f2937;
    }

    td {
        padding: 16px;
        vertical-align: middle;
        border-bottom: 1px solid #1f2937;
        font-size: 14px;
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

    td:first-child {
        min-width: 260px;
    }

    td:first-child strong {
        display: block;
        margin-bottom: 3px;
        color: #f1f5f9;
        font-size: 15px;
        font-weight: 600;
    }

    small {
        color: #64748b;
        font-size: 12px;
    }

    td:not(:first-child) {
        width: 1%;
        white-space: nowrap;
    }

    button {
        margin: 0;
        min-width: 110px;
        padding: 8px 13px;
        border: 1px solid #334155;
        border-radius: 6px;
        background: #1e293b;
        color: #dbeafe;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: background .12s ease, border-color .12s ease, transform .08s ease;
    }

    button:hover {
        background: #293548;
        border-color: #475569;
    }

    button:active {
        transform: translateY(1px);
    }

    article {
        margin-top: 24px;
        padding: 18px 20px;
        border: 1px solid #2a3547;
        border-radius: 8px;
        background: #111827;
        color: #94a3b8;
        font-size: 14px;
    }

    @media (max-width: 800px) {
        table {
            display: block;
            overflow-x: auto;
        }

        td:first-child {
            min-width: 200px;
        }

        th,
        td {
            padding: 12px;
        }

        button {
            min-width: 100px;
        }
    }
</style>