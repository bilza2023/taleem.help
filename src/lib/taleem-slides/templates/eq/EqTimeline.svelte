<script>
    import EqLine from "./EqLine.svelte";
    import { getRowHeight } from "./js/eqLayout.js";

    export let lines = [];
    export let currentLine = null;

    $: rowHeight = getRowHeight(lines.length);
</script>

<div class="timeline">

    {#each lines as line}
        <EqLine
            {line}
            rowHeight={rowHeight}
            active={line === currentLine}
        />
    {/each}

</div>

<style>
.timeline{
    width:100%;
    height:100%;

    display:flex;
    flex-direction:column;
    align-items:stretch;
    justify-content:flex-start;

    overflow:hidden;

    padding:24px;
    box-sizing:border-box;
}
</style>