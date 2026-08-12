<script>
    import { page } from "$app/state";
    import Navbar from "$lib/components/Navbar.svelte";
    import AdminNavbar from "$lib/components/AdminNavbar.svelte";
    import TaleemTheme from "$lib/taleem-themes/TaleemTheme.svelte";
    import { blueTheme } from "$lib/taleem-themes/index.js";

    let { children } = $props();
</script>

<TaleemTheme theme={blueTheme}>
    {#if page.url.pathname.startsWith("/teacher")}
        <AdminNavbar />
    {:else if !page.url.pathname.startsWith("/player") && !page.url.pathname.startsWith("/present")}
        <Navbar />
    {/if}

    <main>
        {@render children()}
    </main>
</TaleemTheme>

<style>
:global(html),
:global(body) {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    background: var(--theme-panel);
}
main {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: var(--theme-panel);
}
</style>