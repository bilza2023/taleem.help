
<script>
///home/bilal-tariq/00--TALEEM/taleem.studio/src/lib/components/GroupingsDropDown.svelte
    import { onMount } from "svelte";
    import apiFetch from "$lib/utils/fetch";

    export let courseSlug = "";
    export let value = "";
    export let onChange = () => {};

    let groupings = [];
    let selected = "";
    let loading = true;
    let error = "";

    // Keep dropdown synchronized with parent value.
    $: if (value !== "" && value !== null && value !== undefined) {
        const newValue = String(value);

        if (selected !== newValue) {
            selected = newValue;
        }
    }

    onMount(load);

    async function load() {
        try {
            groupings = await apiFetch(
                "GET",
                `/public/grouping?course=${encodeURIComponent(courseSlug)}`
            );
        }
        catch (err) {
            error = err.message;
        }
        finally {
            loading = false;
        }
    }

    function changed() {
        onChange(selected);
    }
</script>

<select
    bind:value={selected}
    onchange={changed}
    disabled={loading}
>
    <option value="">
        {loading ? "Loading..." : "Select grouping"}
    </option>

    {#each groupings as grouping}
        <option value={String(grouping.id)}>
            {grouping.title}
        </option>
    {/each}
</select>

{#if error}
    <small class="error">
        {error}
    </small>
{/if}

<style>
    select {
        width: 100%;
        margin: 0;
        background: #171717;
        color: #f2f2f2;
        border: 1px solid #3a3a3a;
        border-radius: 6px;
    }

    option {
        background: #171717;
        color: #f2f2f2;
    }

    .error {
        display: block;
        margin-top: .35rem;
        color: #ff8f8f;
    }
</style>