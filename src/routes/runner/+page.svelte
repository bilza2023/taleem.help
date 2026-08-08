<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/routes/runner/+page.svelte
    import { onMount } from "svelte";

    import deck from "$lib/taleem-specs/samples/golden-deck-8aug26.json";
    import TaleemUI from "$lib/taleemUI/TaleemUI.svelte";

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