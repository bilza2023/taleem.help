<script>
	import { page } from "$app/state";
	import { goto } from "$app/navigation";

	import apiFetch from "$lib/utils/fetch.js";

	const courseSlug = page.params.courseSlug;

	let form = {
		email: "",
		days: 30
	};

	let saving = false;
	let error = "";

	async function save() {

		error = "";
		saving = true;

		try {

			await apiFetch("POST", "/admin/subscription", {

				email: form.email,
				courseSlug,
				days: Number(form.days)

			});

			form.email = "";
			form.days = 30;

			alert("Subscription created.");

		}
		catch (e) {

			error = e.message;

		}
		finally {

			saving = false;

		}

	}
</script>

<svelte:head>
	<title>Subscriptions</title>
</svelte:head>

<h1>New Subscription</h1>

{#if error}
	<p style="color:red">{error}</p>
{/if}

<form on:submit|preventDefault={save}>

	<label>
		Course
		<input value={courseSlug} readonly />
	</label>

	<label>
		User Email
		<input
			type="email"
			bind:value={form.email}
			required
		/>
	</label>

	<label>
		Duration
		<select bind:value={form.days}>
			<option value={30}>30 Days</option>
			<option value={60}>60 Days</option>
			<option value={90}>90 Days</option>
			<option value={180}>180 Days</option>
			<option value={365}>365 Days</option>
		</select>
	</label>

	<br>

	<button disabled={saving}>
		{saving ? "Creating..." : "Create Subscription"}
	</button>

</form>