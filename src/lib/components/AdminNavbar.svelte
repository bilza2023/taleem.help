<script>

	import { goto } from "$app/navigation";
	import { page } from "$app/state";

	const current = page.url.pathname;

	function active(path) {

		return current.startsWith(path);

	}

</script>

<nav class="admin-navbar">

	<div class="brand">

		<button
			class="logo"
			onclick={() => goto("/teacher")}
		>

			🎓 Taleem Admin

		</button>

	</div>

	<div class="links">

		<button
			class:active={active("/teacher")}
			onclick={() => goto("/teacher")}
		>

			Dashboard

		</button>

		<button
			class:active={active("/teacher/course")}
			onclick={() => goto("/teacher/course")}
		>

			Courses

		</button>

		<button
			class:active={active("/teacher/communication")}
			onclick={() => goto("/teacher/communication")}
		>

			Communication

		</button>

		<button
			class:active={active("/teacher/subscription")}
			onclick={() => goto("/teacher/subscription")}
		>

			Subscriptions

		</button>

		<button
			class:active={active("/teacher/user")}
			onclick={() => goto("/teacher/user")}
		>

			Users

		</button>

	</div>

	<div class="actions">

		<button
			class="secondary"
			onclick={() => goto("/")}
		>

			View Site

		</button>

	</div>

</nav>

<style>

	.admin-navbar {

		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;

		padding: 1rem 1.5rem;
		margin-bottom: 2rem;

		border-bottom: 1px solid var(--pico-muted-border-color);

	}

	.brand {

		flex-shrink: 0;

	}

	.logo {

		font-size: 1.2rem;
		font-weight: bold;

		background: none;
		border: none;

		cursor: pointer;

		padding: 0;

	}

	.links {

		display: flex;
		flex-wrap: wrap;
		gap: .5rem;

		flex: 1;

	}

	.links button {

		background: transparent;
		border: none;

		padding: .6rem 1rem;

		cursor: pointer;

		border-radius: .5rem;

	}

	.links button:hover {

		background: var(--pico-muted-background-color);

	}

	.links button.active {

		background: var(--pico-primary-background);
		color: var(--pico-primary-inverse);

		font-weight: bold;

	}

	.actions {

		flex-shrink: 0;

	}

</style>