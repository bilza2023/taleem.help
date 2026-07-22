<script>
	import { onMount } from "svelte";
import { goto } from "$app/navigation";
	let loggedIn = false;

	function checkToken() {
		if (typeof localStorage === "undefined") return;
		loggedIn = !!localStorage.getItem("token");
	}
function hub() {
		goto("/hub");
	}
function logout() {
	localStorage.removeItem("token");
	window.dispatchEvent(new Event("authchange"));
	loggedIn = false;
}

	onMount(() => {
	checkToken();

	window.addEventListener("storage", checkToken);
	window.addEventListener("authchange", checkToken);

	return () => {
		window.removeEventListener("storage", checkToken);
		window.removeEventListener("authchange", checkToken);
	};
});
</script>
<nav class="signin-nav">
	{#if loggedIn}
		<button class="icon-btn" on:click={hub} title="Hub">
			💬
		</button>
	<button class="icon-btn" on:click={logout} title="Logout">
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