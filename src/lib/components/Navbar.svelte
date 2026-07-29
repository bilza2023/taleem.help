<script>
	import { onMount } from "svelte";

	import Signin from "./Signin.svelte";
	import UserIDTag from "./UserIDTag.svelte";

	let email = $state("");

	function refresh() {
		email = localStorage.getItem("taleem-email") || "";
	}

	function handleAuthChanged() {
		refresh();
	}

	onMount(() => {

		refresh();

		window.addEventListener("authChanged", handleAuthChanged);

		return () => {
			window.removeEventListener("authChanged", handleAuthChanged);
		};

	});
</script>

<nav class="navbar">

	<a class="home" href="/">
		<span class="icon">📘</span>
		<span>Taleem.Help</span>
	</a>

	<div style="margin-left:auto; display:flex; align-items:center; gap:1rem;">

		<UserIDTag {email} />

		<Signin {email} />

	</div>

</nav>

<style>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 100;

		display: flex;
		align-items: center;

		padding: 0.75rem 1rem;

		background: color-mix(
			in srgb,
			var(--pico-background-color) 92%,
			transparent
		);

		opacity: 0.75;
		color: var(--pico-color);

		backdrop-filter: blur(10px);

		border-bottom: 1px solid var(--pico-muted-border-color);
	}

	.home {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;

		text-decoration: none;

		font-size: 1.05rem;
		font-weight: 600;

		transition: color 0.2s ease;
	}

	.home:hover {
		color: var(--pico-color);
	}

	.icon {
		font-size: 1.15rem;
		line-height: 1;
	}
</style>