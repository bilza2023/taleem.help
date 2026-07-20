<script>

import Signin from "./Signin.svelte";
</script>

<nav class="navbar">
	<a class="home" href="/">
		<span class="icon">📘</span>
		<span>Taleem.Help</span>
	</a>
	<div>
		<Signin/>

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
