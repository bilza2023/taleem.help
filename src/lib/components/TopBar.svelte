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
		align-items: center;
		gap: 1.5rem;

		padding: 0 1.5rem;
		height: 52px;

		background: white;
		border-bottom: 1px solid #e5e7eb;

		overflow-x: auto;
		white-space: nowrap;
	}

	.tabs::-webkit-scrollbar {
		display: none;
	}

	button {
		background: none;
		border: none;
		padding: 0;

		height: 52px;

		font: inherit;
		font-size: 0.95rem;
		font-weight: 500;

		color: #6b7280;
		cursor: pointer;

		border-bottom: 3px solid transparent;

		transition:
			color .2s,
			border-color .2s;
	}

	button:hover {
		color: #111827;
	}

	button.selected {
		color: #2563eb;
		border-bottom-color: #2563eb;
		font-weight: 600;
	}
</style>