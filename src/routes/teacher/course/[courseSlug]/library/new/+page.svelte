<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import GroupingsDropDown from "$lib/components/GroupingsDropDown.svelte";
    import apiFetch from "$lib/utils/fetch";

    const courseSlug = page.params.courseSlug;

    let saving = false;
    let error = "";

    let form = {
        slug: "",
        title: "",
        description: "",
        type: "ARTICLE",
        body: "",
        thumbnail: "",
        courseSlug,
        groupingId: ""
    };

    async function save() {
        error = "";
        saving = true;

        try {
            await apiFetch(
                "POST",
                "/admin/library",
                {
                    ...form,
                    groupingId: Number(form.groupingId)
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
    <title>New Library Item</title>
</svelte:head>

<header>
    <div>
        <h1>New Library Item</h1>
        <p>Create a new library resource.</p>
    </div>

    <button
        type="button"
        class="secondary"
        onclick={() => goto(`/teacher/course/${courseSlug}/library`)}
    >
        Cancel
    </button>
</header>

<form
    onsubmit={async (e) => {
        e.preventDefault();
        await save();
    }}
>
    <div class="grid">

        <label>
            Title
            <input
                bind:value={form.title}
                placeholder="Resource title"
                required
            />
        </label>

        <label>
            Slug
            <input
                bind:value={form.slug}
                placeholder="resource-slug"
                required
            />
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
            <input
                bind:value={form.courseSlug}
                readonly
            />
        </label>

        <label>
            Grouping
            <GroupingsDropDown
                courseSlug={courseSlug}
                value={form.groupingId}
                onChange={(groupingId) => form.groupingId = groupingId}
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
            Thumbnail
            <input
                bind:value={form.thumbnail}
                placeholder="box.webp"
            />
        </label>

    </div>

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
            {saving ? "Creating..." : "Create Library Item"}
        </button>
    </footer>
</form>
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

    /* Grouping dropdown component */
    :global(select) {
        background-color: #171717;
        color: #f2f2f2;
    }

    :global(option) {
        background: #171717;
        color: #f2f2f2;
    }

    .error {
        margin: 1rem 0;
        padding: .85rem 1rem;
        border-left: 4px solid #ff6b6b;
        background: rgba(255,107,107,.08);
        color: #ff8f8f;
        border-radius: 4px;
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