<script>
    import { onMount } from "svelte";
    import apiFetch from "$lib/utils/fetch";

    export let background;
    export let audio = "";
    export let onUse = () => {};

    let files = [];
    let selected = "";

    onMount(load);

    async function load() {
        try {
            files = await apiFetch("GET", "/media/audio");

            if (audio) {
                selected = audio;
            } else if (files.length) {
                selected = files[0].filename;
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    function useAudio() {
        onUse(selected);
    }
</script>

<div class="settings">

    <label class="color">
        <span>Color</span>
        <input
            type="color"
            bind:value={background.backgroundColor}
        />
    </label>

    <label class="image">
        <span>Image</span>
        <input
            type="text"
            placeholder="bg.webp"
            bind:value={background.backgroundImage}
        />
    </label>

    <label class="opacity">
        <span>Opacity</span>

        <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            bind:value={background.backgroundImageOpacity}
        />

        <strong>
            {Math.round(background.backgroundImageOpacity * 100)}%
        </strong>
    </label>

    <div class="divider"></div>

    <label>
        <span>Current</span>

        <input
            class="current"
            value={audio || ""}
            readonly
        />
    </label>

    <label>
        <span>Library</span>

        <select bind:value={selected}>
            {#each files as file}
                <option value={file.filename}>
                    {file.filename}
                </option>
            {/each}
        </select>
    </label>

    <button onclick={useAudio}>
        Use
    </button>

</div>

<style>
    .settings {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        min-height: 52px;
        padding: 7px 12px;
        box-sizing: border-box;
        background: #111827;
        border: 1px solid #2a3446;
        border-radius: 7px;
        color: #cbd5e1;
        font-size: 13px;
    }

    label,
    .opacity {
        display: flex;
        align-items: center;
        gap: 7px;
        white-space: nowrap;
    }

    label > span,
    .opacity > span {
        color: #94a3b8;
    }

    input[type="color"] {
        width: 36px;
        height: 30px;
        padding: 2px;
        border: 1px solid #334155;
        border-radius: 5px;
        background: #1e293b;
        cursor: pointer;
    }

    .image {
        flex: 1;
        min-width: 180px;
    }

    .image input {
        width: 100%;
        min-width: 140px;
    }

    input[type="text"],
    select {
        height: 30px;
        padding: 4px 8px;
        box-sizing: border-box;
        border: 1px solid #334155;
        border-radius: 5px;
        background: #1e293b;
        color: #e2e8f0;
        font-size: 12px;
    }

    .current {
        width: 150px;
    }

    select {
        width: 190px;
    }

    .opacity input[type="range"] {
        width: 100px;
    }

    .opacity strong {
        min-width: 35px;
        color: #cbd5e1;
        font-size: 12px;
        font-weight: 500;
        text-align: right;
    }

    .divider {
        width: 1px;
        height: 28px;
        background: #334155;
        margin: 0 3px;
    }

    button {
        height: 30px;
        padding: 0 14px;
        border: 1px solid #475569;
        border-radius: 5px;
        background: #e2e8f0;
        color: #0f172a;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
    }

    button:hover {
        background: #f8fafc;
    }

    @media (max-width: 900px) {
        .settings {
            flex-wrap: wrap;
            padding: 9px;
        }

        .image {
            flex: 1 1 200px;
        }
    }
</style>