<script>
	///home/bilal-tariq/00--TALEEM/taleem.help/src/lib/components/CourseSubnav.svelte

	let {
		onQuery = () => {},
		active = ""
	} = $props();

	const categories = [
		{ id: "home", title: "Home", href: "/" },
		{ id: "all", title: "All Courses", query: {} },
		{ id: "free", title: "Free Courses", query: { access: "OPEN" } },
		{ id: "premium", title: "Premium Courses", query: { access: "SUBSCRIPTION" } }
	];

</script>

<style>

	.wrapper {
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;

		padding: .35rem 0;
		margin-bottom: 1rem;

		scrollbar-width: none;
	}

	.wrapper::-webkit-scrollbar {
		display: none;
	}

	.row {
		display: inline-flex;
		gap: .55rem;
	}

	.pill {
		position: relative;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		padding: .45rem .9rem;

		border-radius: 10px;

		font-size: .9rem;
		font-weight: 500;

		border: none;
		cursor: pointer;

		background: var(--pico-card-background-color);
		color: var(--pico-color);

		text-decoration: none;

		transition:
			background-color .15s,
			transform .15s;
	}

	.pill:hover {
		background: var(--pico-card-sectioning-background-color);
		transform: translateY(-1px);
	}

	.pill:visited {
		color: var(--pico-color);
	}

	.pill.active::after {

		content: "";

		position: absolute;

		left: 8px;
		right: 8px;
		bottom: -6px;

		height: 3px;
		border-radius: 3px;

		background: var(--pico-primary);

	}

	.pill:focus,
	.pill:focus-visible,
	.pill:active {
		outline: none;
		box-shadow: none;
		border: none;
	}

</style>

<div class="wrapper">

	<div class="row">

		{#each categories as category}

			{#if category.href}

				<a
					class="pill {active === category.id ? 'active' : ''}"
					href={category.href}
					data-sveltekit-preload-data
				>
					{category.title}
				</a>

			{:else}

				<button
					class="pill {active === category.id ? 'active' : ''}"
					onclick={() => onQuery(category.query, category.id)}
				>
					{category.title}
				</button>

			{/if}

		{/each}

	</div>

</div>