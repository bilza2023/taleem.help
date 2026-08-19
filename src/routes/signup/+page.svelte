
<script>
	import { goto } from "$app/navigation";
	import apiFetch from "$lib/utils/fetch";

	let email = "";
	let password = "";
	let confirmPassword = "";

	let loading = false;
	let error = "";

	async function signup() {
		error = "";

		if (password !== confirmPassword) {
			error = "Passwords do not match.";
			return;
		}

		loading = true;

		try {
			const data = await apiFetch("POST", "/user/register", {
				email,
				password
			});

			// localStorage.setItem("taleem-token", data.token);
			// localStorage.setItem("taleem-email", email);

			window.dispatchEvent(new Event("authChanged"));

			goto("/");
		}
		catch (err) {
			error = err.message;
		}
		finally {
			loading = false;
		}
	}
</script>
<svelte:head>
	<title>Sign Up | Taleem.Help</title>
</svelte:head>

<div class="page">
	<form class="card" on:submit|preventDefault={signup}>
		<h2>Create Account</h2>

		<label for="email">Email</label>
		<input
			id="email"
			type="email"
			bind:value={email}
			placeholder="you@example.com"
			required
		/>

		<label for="password">Password</label>
		<input
			id="password"
			type="password"
			bind:value={password}
			placeholder="Password"
			required
		/>

		<label for="confirmPassword">Confirm Password</label>
		<input
			id="confirmPassword"
			type="password"
			bind:value={confirmPassword}
			placeholder="Confirm Password"
			required
		/>

		{#if error}
			<p class="error">{error}</p>
		{/if}

		<button type="submit" disabled={loading}>
			{#if loading}
				Creating Account...
			{:else}
				Create Account
			{/if}
		</button>

		<p class="footer">
			Already have an account?
			<a href="/signin">Sign In</a>
		</p>
	</form>
</div>
<style>
	.page {
		min-height: 100vh;
		box-sizing: border-box;
		padding: 3rem 1rem;
		background: var(--theme-panel);
		color: var(--theme-text);
	}

	.card {
		width: min(100%, 420px);
		margin: 0 auto;
		padding: 1.5rem;
		box-sizing: border-box;
		border: 1px solid var(--theme-border);
		border-radius: 10px;
		background: var(--theme-panel);
		display: flex;
		flex-direction: column;
		gap: .75rem;
	}

	h2 {
		margin: 0 0 .5rem;
		text-align: center;
		color: var(--theme-text);
	}

	label {
		margin: 0;
		font-size: .9rem;
		font-weight: 600;
		color: var(--theme-text);
	}

	input {
		width: 100%;
		margin: 0;
		box-sizing: border-box;
		padding: .65rem .75rem;
		border: 1px solid var(--theme-border);
		border-radius: 6px;
		background: var(--theme-panel);
		color: var(--theme-text);
	}

	input::placeholder {
		color: var(--theme-text);
		opacity: .55;
	}

	input:focus {
		outline: none;
		border-color: var(--theme-accent);
	}

	button {
		width: 100%;
		margin: .5rem 0 0;
		padding: .65rem 1rem;
		border: 1px solid var(--theme-accent);
		border-radius: 6px;
		background: var(--theme-accent);
		color: var(--theme-text);
		font-weight: 600;
		cursor: pointer;
	}

	button:hover:not(:disabled) {
		opacity: .9;
	}

	button:disabled {
		opacity: .6;
		cursor: default;
	}

	.error {
		margin: 0;
		color: #ff8f8f;
		font-size: .9rem;
	}

	.footer {
		margin: .75rem 0 0;
		text-align: center;
		font-size: .9rem;
		color: var(--theme-text);
		opacity: .75;
	}

	.footer a {
		color: var(--theme-accent);
		font-weight: 600;
		text-decoration: none;
	}

	.footer a:hover {
		text-decoration: underline;
	}

	@media (max-width: 576px) {
		.page {
			padding-top: 2rem;
		}

		.card {
			padding: 1.25rem;
		}
	}
</style>