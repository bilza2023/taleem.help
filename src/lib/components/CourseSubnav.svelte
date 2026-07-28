<script>

	let {
		onQuery = () => {},
		active = ""
	} = $props();

	const categories = [
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

		transition:
			background-color .15s,
			transform .15s;
	}

	.pill:hover {
		background: var(--pico-card-sectioning-background-color);
		transform: translateY(-1px);
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

			<button
				class="pill {active === category.id ? 'active' : ''}"
				onclick={() => onQuery(category.query, category.id)}
			>
				{category.title}
			</button>

		{/each}

	</div>

</div>