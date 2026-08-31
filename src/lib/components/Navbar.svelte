<script>
	import { onMount } from "svelte";
import { config } from "$lib/config.js";
	let email = $state("");

	function refresh() {
		email = localStorage.getItem("taleem-email") || "";
	}

	function logout() {
		localStorage.removeItem("taleem-token");
		localStorage.removeItem("taleem-email");
		email = "";
		window.dispatchEvent(new Event("authChanged"));
	}

	onMount(() => {
		refresh();

		window.addEventListener("authChanged", refresh);

		return () => {
			window.removeEventListener("authChanged", refresh);
		};
	});
</script>

<nav class="navbar">
<a class="home" href={config.basePath || "/"}>
	<span class="icon">📘</span>
	<span class="brand">Taleem.Help</span>
	<span class="beta">(Beta)</span>
</a>

	<div class="right">

		{#if email}
			<span class="email">👤 {email}</span>

			<button
				class="auth-button"
				title="Logout"
				onclick={logout}
			>
				🚪
			</button>
		{:else}
			<a class="auth-button" title="Sign in" href={`${config.basePath}/signin`}>🔑</a>
			<a class="auth-button" title="Sign in" href={`${config.basePath}/signup`}>🔒</a>
		{/if}

	</div>

</nav>

<style>
.brand {
	color: #bbe793;
	font-weight: 700;
}

.beta {
	color: #E8791A;
	font-weight: 600;
	font-size: 0.8em;
	margin-left: 4px;
}
	.navbar {
		margin: 0;
		padding: .6rem 1rem;
		position: sticky;
		top: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		background: var(--theme-panel);
		color: var(--theme-text);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--theme-border);
	}

	.home {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		text-decoration: none;
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--theme-text);
		transition: color 0.2s ease;
	}

	.home:hover {
		color: var(--theme-accent);
	}

	.icon {
		font-size: 1.15rem;
		line-height: 1;
	}

	.right {
		margin-left: auto;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.email {
		font-size: 0.9rem;
		opacity: .9;
	}

	.auth-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 4px 6px;
		border: 0;
		background: transparent;
		color: inherit;
		font-size: 1.15rem;
		line-height: 1;
		text-decoration: none;
		cursor: pointer;
	}

	.auth-button:hover {
		opacity: .7;
	}
</style>