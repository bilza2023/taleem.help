<script>
	import { goto } from "$app/navigation";

	let { email = "" } = $props();

	let loggedIn = $derived(!!email);

	function hub() {
		goto("/hub");
	}

	function logout() {
		localStorage.removeItem("taleem-token");
		localStorage.removeItem("taleem-email");

		window.dispatchEvent(new Event("authChanged"));
	}
</script>

<nav class="signin-nav">

	{#if loggedIn}

		<button class="icon-btn" onclick={hub} title="Hub">
			💬
		</button>

		<button class="icon-btn" onclick={logout} title="Logout">
			🚪
		</button>

	{:else}

		<a class="icon-btn" href="/signin" title="Sign In">
			🔑
		</a>

		<a class="icon-btn" href="/signup" title="Create Account">
			🔐
		</a>

	{/if}

</nav>

<style>
	.signin-nav {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.icon-btn {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 2.2rem;
		height: 2.2rem;

		padding: 0;
		margin: 0;

		font-size: 1.35rem;
		line-height: 1;

		text-decoration: none;
		border-radius: 50%;
	}
</style>