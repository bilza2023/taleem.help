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
<div class="viewer">
    <TaleemUI
        {deck}
        {currentTime}
        width={844}
        height={390}
    />
</div>

<style>
.viewer{
    width:844px;
    height:390px;
}
</style>