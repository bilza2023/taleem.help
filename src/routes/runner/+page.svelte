<script>
    import { onMount } from "svelte";

    import deck from "$lib/runner/golden-dsl-8-may-26.json";
    import TaleemUI from "$lib/taleem-UI/TaleemUI.svelte";

    let currentTime = 0;

    onMount(() => {
        const timer = setInterval(() => currentTime++, 1000);
        return () => clearInterval(timer);
    });
</script>
<div class="debug">
    {currentTime}
</div>
<TaleemUI
    {deck}
    {currentTime}
/>