<script>
	import { onMount } from "svelte";

	const themes = [
		{ id: "light", icon: "☀️", title: "Light" },
		{ id: "dark", icon: "🌙", title: "Dark" }
	];

	let currentTheme = "dark";

	function applyTheme(theme) {
		currentTheme = theme;
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}

	onMount(() => {
		const saved = localStorage.getItem("theme") || "dark";
		applyTheme(saved);
	});
</script>

<nav class="theme-bar">
	<div class="buttons">
		{#each themes as theme}
			<button
				type="button"
				class:active={currentTheme === theme.id}
				title={theme.title}
				on:click={() => applyTheme(theme.id)}
			>
				{theme.icon}
			</button>
		{/each}
	</div>
</nav>

<style>
	.theme-bar {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		padding: 0.2rem 0;
		margin-bottom: 0.6rem;
	}

	.buttons {
		display: flex;
		gap: 0.25rem;
	}

	.buttons button {
		margin: 0;
		padding: 0.2rem 0.45rem;
		font-size: 1rem;
		min-width: auto;
		border-radius: 6px;
	}

	.buttons button.active {
		outline: 2px solid var(--pico-primary);
	}
</style>