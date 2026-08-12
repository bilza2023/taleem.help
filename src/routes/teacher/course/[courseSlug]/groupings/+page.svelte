<script>
    import { page } from "$app/state";
    import apiFetch from "$lib/utils/fetch.js";

    const courseSlug = page.params.courseSlug;

    let groupings = [];
    let loading = true;
    let saving = false;
    let error = "";

    let form = {
        slug: "",
        title: "",
        sortOrder: 0
    };

    let editingId = null;
    let editForm = {};

async function load() {
    debugger;
        loading = true;
        error = "";

        try {
groupings = await apiFetch("GET",`/admin/grouping?course=${encodeURIComponent(courseSlug)}`);
console.log("groupings",groupings);
        }
        catch (err) {
            error = err.message;
        }
        finally {
            loading = false;
        }
    }

    async function create() {
        error = "";
        saving = true;

        try {
            await apiFetch("POST", "/admin/grouping", {
                courseSlug,
                slug: form.slug,
                title: form.title,
                sortOrder: Number(form.sortOrder)
            });

            form = {
                slug: "",
                title: "",
                sortOrder: 0
            };

            await load();
        }
        catch (err) {
            error = err.message;
        }
        finally {
            saving = false;
        }
    }

    function edit(item) {
        editingId = item.id;

        editForm = {
            slug: item.slug,
            title: item.title,
            sortOrder: item.sortOrder
        };
    }

    function cancelEdit() {
        editingId = null;
        editForm = {};
    }

    async function update(item) {
        error = "";
        saving = true;

        try {
            await apiFetch(
                "PUT",
                `/admin/grouping/${item.id}`,
                {
                    slug: editForm.slug,
                    title: editForm.title,
                    sortOrder: Number(editForm.sortOrder)
                }
            );

            editingId = null;
            editForm = {};

            await load();
        }
        catch (err) {
            error = err.message;
        }
        finally {
            saving = false;
        }
    }

    async function remove(item) {
        if (!confirm(`Delete grouping "${item.title}"?`)) return;

        error = "";

        try {
            await apiFetch(
                "DELETE",
                `/admin/grouping/${item.id}`
            );

            await load();
        }
        catch (err) {
            error = err.message;
        }
    }

    load();
</script>

<svelte:head>
    <title>Course Groupings</title>
</svelte:head>

<header>
    <h1>Course Groupings</h1>
    <p>Manage the groupings used to organize this course.</p>
</header>

<article>
    <h3>New Grouping</h3>

    <form onsubmit={(event) => {
        event.preventDefault();
        create();
    }}>
        <div class="form-row">

            <label>
                Slug
                <input
                    bind:value={form.slug}
                    placeholder="chapter-1"
                    required
                />
            </label>

            <label>
                Title
                <input
                    bind:value={form.title}
                    placeholder="Chapter 1"
                    required
                />
            </label>

            <label>
                Order
                <input
                    type="number"
                    bind:value={form.sortOrder}
                    min="0"
                />
            </label>

            <button disabled={saving}>
                {saving ? "Creating..." : "Create"}
            </button>

        </div>
    </form>
</article>

{#if error}
    <article class="error">
        {error}
    </article>
{/if}

{#if loading}

    <p>Loading...</p>

{:else if groupings.length === 0}

    <article>
        <p>No groupings yet.</p>
    </article>

{:else}

    <table>
        <thead>
            <tr>
                <th>Order</th>
                <th>Slug</th>
                <th>Title</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            {#each groupings as item}

                <tr>

                    {#if editingId === item.id}

                        <td>
                            <input
                                type="number"
                                bind:value={editForm.sortOrder}
                                min="0"
                            />
                        </td>

                        <td>
                            <input
                                bind:value={editForm.slug}
                            />
                        </td>

                        <td>
                            <input
                                bind:value={editForm.title}
                            />
                        </td>

                        <td class="actions">

                            <button
                                disabled={saving}
                                onclick={() => update(item)}
                            >
                                {saving ? "Saving..." : "Save"}
                            </button>

                            <button
                                class="secondary"
                                disabled={saving}
                                onclick={cancelEdit}
                            >
                                Cancel
                            </button>

                        </td>

                    {:else}

                        <td>{item.sortOrder}</td>
                        <td>{item.slug}</td>
                        <td>{item.title}</td>

                        <td class="actions">

                            <button
                                onclick={() => edit(item)}
                            >
                                Edit
                            </button>

                            <button
                                class="secondary"
                                onclick={() => remove(item)}
                            >
                                Delete
                            </button>

                        </td>

                    {/if}

                </tr>

            {/each}
        </tbody>
    </table>

{/if}

<style>
    header {
        margin-bottom: 2rem;
    }

    header h1 {
        margin-bottom: .35rem;
    }

    header p {
        margin-top: 0;
        opacity: .7;
    }

    article {
        margin-bottom: 1.5rem;
    }

    article h3 {
        margin-bottom: 1.25rem;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr 120px auto;
        align-items: end;
        gap: 1rem;
    }

    .form-row label {
        margin: 0;
        font-size: .9rem;
    }

    .form-row input {
        margin-top: .4rem;
        width: 100%;
        box-sizing: border-box;
    }

    .form-row button {
        margin: 0;
        white-space: nowrap;
        height: 2.65rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1rem;
    }

    thead th {
        text-align: left;
        padding: .85rem 1rem;
        font-size: .85rem;
        text-transform: uppercase;
        letter-spacing: .04em;
        opacity: .65;
        border-bottom: 2px solid rgba(255,255,255,.12);
    }

    tbody td {
        padding: .9rem 1rem;
        border-bottom: 1px solid rgba(255,255,255,.08);
        vertical-align: middle;
    }

    tbody tr:hover {
        background: rgba(255,255,255,.025);
    }

    tbody td:first-child {
        width: 80px;
        font-weight: 600;
        opacity: .7;
    }

    tbody td:nth-child(2) {
        font-family: monospace;
        font-size: .9rem;
        opacity: .8;
    }

    .actions {
        width: 160px;
        white-space: nowrap;
        text-align: right;
    }

    .actions button {
        margin: 0 0 0 .45rem;
        padding: .45rem .8rem;
        font-size: .85rem;
    }

    .actions button:first-child {
        margin-left: 0;
    }

    .error {
        color: #ff6b6b;
        border-left: 4px solid #ff6b6b;
        padding: .8rem 1rem;
        background: rgba(255,107,107,.08);
    }

    form {
        margin: 0;
    }

    input:focus {
        outline: 2px solid rgba(255,255,255,.25);
        outline-offset: 1px;
    }

    @media (max-width: 800px) {

        .form-row {
            grid-template-columns: 1fr 1fr;
        }

        .form-row button {
            width: 100%;
        }

        .actions {
            width: auto;
        }

    }

    @media (max-width: 560px) {

        .form-row {
            grid-template-columns: 1fr;
        }

        table {
            font-size: .9rem;
        }

        thead th,
        tbody td {
            padding: .7rem .5rem;
        }

        .actions {
            white-space: normal;
        }

        .actions button {
            margin: .2rem 0;
        }

    }
</style>