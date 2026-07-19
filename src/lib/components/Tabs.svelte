<script>
	let {
		tabs = [],
		selected,
		onSelect
	} = $props();
</script>

<nav class="tabs">
	{#each tabs as tab}
		<button
			type="button"
			class:selected={tab === selected}
			onclick={() => onSelect(tab)}
		>
			{tab}
		</button>
	{/each}
</nav>

<style>
	.tabs {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}

	button {
		padding: 0.45rem 1rem;
		border: 1px solid #ccc;
		border-radius: 999px;
		background: white;
		cursor: pointer;
		font: inherit;
	}

	button.selected {
		background: #2563eb;
		color: white;
		border-color: #2563eb;
	}
</style>