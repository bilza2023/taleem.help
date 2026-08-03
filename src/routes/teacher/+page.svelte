<script>

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

	h1{

		margin-bottom:.25rem;

	}

	table{

		width:100%;
		margin-top:2rem;

	}

	th{

		text-align:left;

	}

	td{

		vertical-align:middle;

	}

	td:not(:first-child){

		width:1%;

		white-space:nowrap;

	}

	button{

		margin:0;

	}

</style>