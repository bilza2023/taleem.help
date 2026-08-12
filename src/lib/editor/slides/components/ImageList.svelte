<!-- /src/lib/editor/ImageList.svelte -->

<script>
    import { onMount } from "svelte";
    import apiFetch from "$lib/utils/fetch";

    export let image = "";
    export let onUse = () => {};

    let files = [];

    onMount(async () => {
        try {
            files = await apiFetch("GET", "/media/image");
        }
        catch (err) {
            console.error(err);
        }
    });
</script>

<select
    value={image}
    on:change={(e) => onUse(e.currentTarget.value)}
>
    <option value="">Select image...</option>

    {#each files as file}
        <option value={file.filename}>
            {file.filename}
        </option>
    {/each}
</select>

<style>
    select {
        width: 260px;
        height: 30px;
        padding: 4px 8px;
        border: 1px solid #334155;
        border-radius: 5px;
        background: #1e293b;
        color: #e2e8f0;
        font-size: 12px;
        cursor: pointer;
    }

    select:focus {
        outline: none;
        border-color: #64748b;
    }
</style>