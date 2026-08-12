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
</style>