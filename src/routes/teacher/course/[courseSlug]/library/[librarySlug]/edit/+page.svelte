<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import { onMount } from "svelte";

    import GroupingsDropDown from "$lib/components/GroupingsDropDown.svelte";
    import apiFetch from "$lib/utils/fetch";

    const courseSlug = page.params.courseSlug;
    const librarySlug = page.params.librarySlug;

    let loading = true;
    let saving = false;
    let error = "";

    let form = {
        slug: "",
        title: "",
        description: "",
        type: "ARTICLE",
        body: "",
        thumbnail: "",
        courseSlug: "",
        groupingId: "",
        allowCommunication: true,
        status: "DRAFT"
    };

    onMount(load);

    async function load() {
        try {
            const item = await apiFetch(
                "GET",
                `/admin/library/${librarySlug}`
            );

            form = {
                slug: item.slug,
                title: item.title,
                description: item.description ?? "",
                type: item.type ?? "ARTICLE",
                body: item.body ?? "",
                thumbnail: item.thumbnail ?? "",
                courseSlug: item.course?.slug ?? "",
                groupingId: item.grouping?.id
                    ? String(item.grouping.id)
                    : "",
                allowCommunication: item.allowCommunication ?? true,
                status: item.status ?? "DRAFT"
            };
        }
        catch (err) {
            error = err.message;
        }
        finally {
            loading = false;
        }
    }

    async function save() {
        error = "";
        saving = true;

        try {
            await apiFetch(
                "PUT",
                `/admin/library/${librarySlug}`,
                {
                    slug: form.slug,
                    title: form.title,
                    description: form.description,
                    type: form.type,
                    body: form.body,
                    thumbnail: form.thumbnail,
                    groupingId: Number(form.groupingId),
                    allowCommunication: form.allowCommunication,
                    status: form.status
                }
            );

            goto(`/teacher/course/${courseSlug}/library`);
        }
        catch (err) {
            error = err.message;
        }
        finally {
            saving = false;
        }
    }
</script>

<svelte:head>
    <title>Edit Library Item</title>
</svelte:head>

<header>
    <div>
        <h1>Edit Library Item</h1>
        <p>Update an existing library resource.</p>
    </div>

    <button
        type="button"
        class="secondary"
        onclick={() => goto(`/teacher/course/${courseSlug}/library`)}
    >
        Cancel
    </button>
</header>

{#if loading}

    <p class="loading">Loading...</p>

{:else}

    <form onsubmit={async (e) => {
        e.preventDefault();
        await save();
    }}>

        <div class="grid">

            <label>
                Title
                <input bind:value={form.title} required />
            </label>

            <label>
                Slug
                <input bind:value={form.slug} readonly />
            </label>

        </div>

        <label>
            Description
            <textarea
                rows="3"
                bind:value={form.description}
                placeholder="Short description..."
            ></textarea>
        </label>

        <div class="grid">

            <label>
                Course
                <input bind:value={form.courseSlug} readonly />
            </label>

            <label>
                Grouping
                <GroupingsDropDown
                    courseSlug={courseSlug}
                    value={form.groupingId}
                    onChange={(groupingId) => {
                        form.groupingId = String(groupingId);
                    }}
                />
            </label>

        </div>

        <div class="grid">

            <label>
                Type
                <select bind:value={form.type}>
                    <option value="ARTICLE">ARTICLE</option>
                    <option value="PLAYER">PLAYER</option>
                    <option value="MCQ">MCQ</option>
                </select>
            </label>

            <label>
                Status
                <select bind:value={form.status}>
                    <option value="DRAFT">DRAFT</option>
                    <option value="PUBLISHED">PUBLISHED</option>
                    <option value="ARCHIVED">ARCHIVED</option>
                </select>
            </label>

        </div>

        <label>
            Thumbnail
            <input
                bind:value={form.thumbnail}
                placeholder="box.webp"
            />
        </label>

        <label class="checkbox-row">
            <input
                type="checkbox"
                bind:checked={form.allowCommunication}
            />
            <span>Allow Communication</span>
        </label>

        <label>
            Body
            <textarea
                class="body"
                rows="15"
                bind:value={form.body}
                placeholder="Content..."
            ></textarea>
        </label>

        {#if error}
            <article class="error">
                {error}
            </article>
        {/if}

        <footer>
            <button
                type="submit"
                disabled={saving || !form.groupingId}
            >
                {saving ? "Saving..." : "Save Changes"}
            </button>
        </footer>

    </form>

{/if}

<style>
    header {
        max-width: 900px;
        margin: 0 auto 2rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
        padding-bottom: 1.25rem;
        border-bottom: 1px solid rgba(255,255,255,.1);
    }

    header h1 {
        margin: 0 0 .35rem;
    }

    header p {
        margin: 0;
        opacity: .6;
    }

    header button {
        margin: 0;
        flex-shrink: 0;
    }

    form {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem;
        margin-bottom: .25rem;
    }

    label {
        display: block;
        margin-bottom: 1.25rem;
        font-weight: 600;
    }

    input,
    select,
    textarea {
        width: 100%;
        box-sizing: border-box;
        margin-top: .45rem;
        background: #171717;
        color: #f2f2f2;
        border: 1px solid #3a3a3a;
        border-radius: 6px;
    }

    input,
    select {
        min-height: 2.7rem;
    }

    input::placeholder,
    textarea::placeholder {
        color: #777;
    }

    input:focus,
    select:focus,
    textarea:focus {
        background: #1b1b1b;
        border-color: #666;
        box-shadow: 0 0 0 2px rgba(255,255,255,.06);
    }

    input[readonly] {
        background: #111;
        color: #999;
        cursor: default;
    }

    textarea {
        min-height: 8rem;
        resize: vertical;
        line-height: 1.5;
    }

    .body {
        min-height: 24rem;
        font-family: monospace;
    }

    .checkbox-row {
        display: flex;
        align-items: center;
        gap: .7rem;
        padding: .8rem 1rem;
        margin: .5rem 0 1.5rem;
        border: 1px solid rgba(255,255,255,.1);
        border-radius: 6px;
        background: rgba(255,255,255,.025);
        font-weight: 500;
    }

    .checkbox-row input {
        width: auto;
        min-height: auto;
        margin: 0;
        flex-shrink: 0;
    }

    .error {
        margin: 1rem 0;
        padding: .85rem 1rem;
        border-left: 4px solid #ff6b6b;
        background: rgba(255,107,107,.08);
        color: #ff8f8f;
        border-radius: 4px;
    }

    .loading {
        max-width: 900px;
        margin: 2rem auto;
        opacity: .7;
    }

    footer {
        display: flex;
        justify-content: flex-end;
        margin-top: 2rem;
        padding-top: 1.25rem;
        border-top: 1px solid rgba(255,255,255,.1);
    }

    footer button {
        margin: 0;
    }

    @media (max-width: 700px) {
        header {
            flex-direction: column;
            gap: 1rem;
        }

        header button {
            width: 100%;
        }

        .grid {
            grid-template-columns: 1fr;
            gap: 0;
        }

        footer button {
            width: 100%;
        }
    }
</style>