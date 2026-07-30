<script>
	import { goto } from "$app/navigation";
	import apiFetch from "$lib/utils/fetch";

	let email = "";
	let password = "";

	let loading = false;
	let error = "";

	async function signin() {

		error = "";
		loading = true;

		try {

			const data = await apiFetch(
				"POST",
				"/admin/login",
				{
					email,
					password
				}
			);

			localStorage.setItem(
				"taleem-token",
				data.token
			);

			window.dispatchEvent(
				new Event("authChanged")
			);

			goto("/teacher");

		}
		catch (err) {

			error =
				err.message || "Sign in failed.";

		}
		finally {

			loading = false;

		}

	}
</script>

<svelte:head>

	<title>Teacher Sign In</title>

</svelte:head>

<div class="signin">

	<form
		class="card"
		on:submit|preventDefault={signin}
	>

		<h1>Teacher Sign In</h1>

		<p>

			Sign in with your teacher account.

		</p>

		<label>

			Email

			<input
				type="email"
				bind:value={email}
				required
				autocomplete="username"
			/>

		</label>

		<label>

			Password

			<input
				type="password"
				bind:value={password}
				required
				autocomplete="current-password"
			/>

		</label>

		{#if error}

			<p class="error">

				{error}

			</p>

		{/if}

		<button
			type="submit"
			disabled={loading}
		>

			{#if loading}

				Signing In...

			{:else}

				Sign In

			{/if}

		</button>

	</form>

</div>

<style>

	.signin {

		max-width: 420px;

		margin: 4rem auto;

		padding: 1rem;

	}

	.card {

		display: flex;

		flex-direction: column;

		gap: 1rem;

		padding: 2rem;

		border: 1px solid #ddd;

		border-radius: .5rem;

		background: white;

	}

	h1 {

		margin: 0;

		text-align: center;

	}

	p {

		margin: 0;

		text-align: center;

	}

	label {

		display: flex;

		flex-direction: column;

		gap: .35rem;

		font-weight: 600;

	}

	input {

		padding: .65rem;

		font-size: 1rem;

	}

	button {

		margin-top: .5rem;

		padding: .8rem;

		font-size: 1rem;

		cursor: pointer;

	}

	.error {

		color: crimson;

		text-align: center;

	}

</style>