<script>
	import { onMount } from "svelte";
	import apiFetch from "$lib/utils/fetch";

	export let courseSlug = "";
	export let value = "";
	export let onChange = () => {};

	let groupings = [];
	let selected = "";
	let loading = true;
	let error = "";

	$: if (value !== "" && value !== null && value !== undefined) {
		const newValue = String(value);
		if (selected !== newValue) selected = newValue;
	}

	onMount(load);

	async function load() {
		try {
			groupings = await apiFetch(
				"GET",
				`/public/grouping?course=${encodeURIComponent(courseSlug)}`
			);
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	}

function selectGrouping(grouping) {
	selected = String(grouping.id);
	onChange(grouping.id);
}

function selectAll() {
	selected = "";
	onChange("");
}
</script>

<nav class="grouping-nav">
	<button
		class:active={selected === ""}
		onclick={selectAll}
		disabled={loading}
	>
		All
	</button>

	{#each groupings as grouping}
		<button
			class:active={selected === String(grouping.id)}
			onclick={() => selectGrouping(grouping)}
			disabled={loading}
		>
			{grouping.title}
		</button>
	{/each}
</nav>

{#if loading}
	<div class="status">Loading groupings...</div>
{:else if error}
	<div class="error">{error}</div>
{/if}
<style>
	.grouping-nav {
		display: flex;
		align-items: stretch;
		gap: .5rem;
		width: 100%;
		box-sizing: border-box;
		padding: .6rem;
		margin: 0 0 1rem;
		background: var(--theme-panel);
		border: 1px solid var(--theme-border);
		border-radius: 10px;
		overflow-x: auto;
		scrollbar-width: thin;
	}

	button {
		flex: 1 1 0;
		min-width: 100px;
		width: auto;
		margin: 0;
		padding: .65rem 1.2rem;
		background: transparent;
		color: var(--theme-text);
		border: 1px solid var(--theme-border);
		border-radius: 7px;
		cursor: pointer;
		white-space: nowrap;
		font-weight: 600;
		transition: background .15s, border-color .15s, color .15s;
	}

	button:hover {
		background: var(--theme-border);
		border-color: var(--theme-accent);
	}

	button.active {
		background: var(--theme-accent);
		color: #fff;
		border-color: var(--theme-accent);
	}

	button:disabled {
		opacity: .6;
		cursor: default;
	}

	.status {
		padding: .5rem 0;
		color: var(--theme-text);
		opacity: .7;
	}

	.error {
		padding: .5rem 0;
		color: #ff8f8f;
	}

	@media (max-width: 600px) {
		.grouping-nav {
			gap: .35rem;
			padding: .4rem;
		}

		button {
			flex: 0 0 auto;
			min-width: 90px;
			padding: .6rem .9rem;
		}
	}
</style>