<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/routes/teacher/course/[courseSlug]/communication/+page.svelte
	import { onMount } from "svelte";
	import { page } from "$app/state";

	import apiFetch from "$lib/utils/fetch";

	const courseSlug = page.params.courseSlug;

	let loading = true;
	let saving = false;
	let error = "";

	let items = [];

	onMount(load);

	async function load() {

		error = "";
		loading = true;

		try {

			items = await apiFetch("GET",`/admin/course/${courseSlug}/communication`);

		}
		catch (err) {

			error = err.message;

		}
		finally {

			loading = false;

		}

	}

	async function respond(item, isPublic) {

		if (!item.authorResponse?.trim()) {

			alert("Please enter a response.");

			return;

		}

		saving = true;

		try {

			await apiFetch(

				"POST",

				"/admin/communication/respond",

				{

					id: item.id,

					authorResponse: item.authorResponse,

					isPublic

				}

			);

			items = items.filter(i => i.id !== item.id);

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

	<title>Course Communication</title>

</svelte:head>

<header>

	<div>

		<h1>Course Communication</h1>

		<p>

			Unanswered communications for this course.

		</p>

	</div>

</header>

{#if loading}

	<p>Loading...</p>

{:else if items.length === 0}

	<article>

		<h3>Inbox Zero 🎉</h3>

		<p>

			There are no unanswered communications.

		</p>

	</article>

{:else}

	{#each items as item}

		<article>

			<header>

				<strong>{item.user?.name}</strong>

				<br>

				<small>

					{item.library?.title}

				</small>

				<br>

				<small>

					{item.type}

				</small>

				<br>

				<small>

					{new Date(item.createdAt).toLocaleString()}

				</small>

			</header>

			<h4>Student Message</h4>

			<blockquote>

				{item.message}

			</blockquote>

			<label>

				Your Response

				<textarea

					rows="6"

					bind:value={item.authorResponse}

				/>

			</label>

			<footer>

				<button

					class="secondary"

					disabled={saving}

					onclick={() => respond(item, false)}

				>

					Save Private

				</button>

				<button

					disabled={saving}

					onclick={() => respond(item, true)}

				>

					Save Public

				</button>

			</footer>

		</article>

	{/each}

{/if}

{#if error}

	<article>

		{error}

	</article>

{/if}

<style>
	header{margin-bottom:2rem}
	article{margin-bottom:2rem;padding:1.25rem;border:1px solid var(--theme-border);border-radius:10px;background:var(--theme-panel)}
	blockquote{margin:1rem 0;padding:1rem 1.25rem;border-left:4px solid var(--theme-accent);border-radius:6px;background:rgba(255,255,255,.04);white-space:pre-wrap}
	textarea{width:100%;min-height:8rem;box-sizing:border-box}
	footer{display:flex;gap:1rem;margin-top:1rem}
	footer button{margin:0}
	footer .secondary{opacity:.7}
	footer button:not(.secondary){background:var(--theme-accent);color:var(--theme-text)}
</style>