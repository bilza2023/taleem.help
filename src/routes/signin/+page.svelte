<script>
	import { goto } from "$app/navigation";
	import { config } from "$lib/config";

	let email = "";
	let password = "";

	let loading = false;
	let error = "";

	async function signin() {
		error = "";

		loading = true;

		try {
			const res = await fetch(`${config.apiUrl}/user/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email,
					password
				})
			});

			const data = await res.json();

			if (!res.ok) {
				error = data.message || "Invalid email or password.";
				return;
			}
			//event for registering in 
localStorage.setItem("token", data.token);
window.dispatchEvent(new Event("authchange"));
goto("/");
		
		} catch (err) {
			error = "Unable to connect to the server.";
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Sign In | Taleem.Help</title>
</svelte:head>

<div class="page">
	<form class="card" on:submit|preventDefault={signin}>
		<h2>Sign In</h2>

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

		{#if error}
			<p class="error">{error}</p>
		{/if}

		<button type="submit" disabled={loading}>
			{#if loading}
				Signing In...
			{:else}
				Sign In
			{/if}
		</button>

		<p class="footer">
			Don't have an account?
			<a href="/signup">Create Account</a>
		</p>
	</form>
</div>

<style>
	.page {
		max-width: 420px;
		margin: 3rem auto;
		padding: 0 1rem;
	}

	.card {
		padding: 1.5rem;
		border: 1px solid var(--pico-muted-border-color);
		border-radius: 10px;
		background: var(--pico-card-background-color);
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	h2 {
		margin: 0 0 0.5rem;
		text-align: center;
	}

	label {
		margin: 0;
		font-size: 0.9rem;
		font-weight: 600;
	}

	input {
		margin: 0;
	}

	button {
		margin-top: 0.5rem;
		margin-bottom: 0;
	}

	.error {
		margin: 0;
		color: var(--pico-del-color);
		font-size: 0.9rem;
	}

	.footer {
		margin: 0.75rem 0 0;
		text-align: center;
		font-size: 0.9rem;
		color: var(--pico-muted-color);
	}

	.footer a {
		font-weight: 600;
		text-decoration: none;
	}

	@media (max-width: 576px) {
		.page {
			margin-top: 2rem;
		}

		.card {
			padding: 1.25rem;
		}
	}
</style>