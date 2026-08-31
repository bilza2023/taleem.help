<script>
	import { goto } from "$app/navigation";
	import { send } from "$lib/send";
	import { config } from "$lib/config";

	let name = $state("");
	let email = $state("");
	let password = $state("");
	let confirmPassword = $state("");
	let loading = $state(false);
	let error = $state("");

	async function signup() {
		error = "";

		if (password !== confirmPassword) {
			error = "Passwords do not match.";
			return;
		}

		loading = true;

		try {
			await send("user", "register", { name, email, password });

			const token = await send("user", "login", { email, password });

			localStorage.setItem("taleem-token", token);
			localStorage.setItem("taleem-email", email);

			window.dispatchEvent(new Event("userAuthChanged"));

			goto(`${config.basePath}/`);
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Sign Up | Taleem</title>
</svelte:head>

<div class="page">
	<form class="card" onsubmit={(event) => {
		event.preventDefault();
		signup();
	}}>
		<h2>Sign Up</h2>

		<label for="name">Name</label>
		<input
			id="name"
			type="text"
			bind:value={name}
			placeholder="Your name"
		/>

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
			placeholder="Confirm password"
			required
		/>

		{#if error}
			<p class="error">{error}</p>
		{/if}

		<button type="submit" disabled={loading}>
			{loading ? "Signing Up..." : "Sign Up"}
		</button>
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
		font-size: .9rem;
		font-weight: 600;
	}

	input {
		width: 100%;
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
		margin-top: .5rem;
		padding: .65rem 1rem;
		border: 1px solid var(--theme-accent);
		border-radius: 6px;
		background: var(--theme-accent);
		color: var(--theme-text);
		font-weight: 600;
		cursor: pointer;
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
</style>