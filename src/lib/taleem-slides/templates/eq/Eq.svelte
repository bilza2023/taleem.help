<script>
    import { getBaseFont } from "../../utils/layout.js";
    import EqLine from "./EqLine.svelte";
    import EqSidePanel from "./EqSidePanel.svelte";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: lines = slide.data ?? [];

    $: console.log("lines" , lines);

    $: currentLine =
        [...lines]
            .reverse()
            .find(line => currentTime >= line.showAt)
        ?? lines[0];
</script>

<div class="eq">

<div class="left">

    {#each lines as line}
        <EqLine
            {line}
            rowHeight={56}
            active={line === currentLine}
        />
    {/each}

</div>

<div class="right">

    <EqSidePanel
        {currentLine}
    />

</div>

</div>

<style>
    .eq{
    width:100%;
    height:100%;

    display:flex;

    box-sizing:border-box;
}

.left{
    flex:7;

    display:flex;
    flex-direction:column;

    background:rgba(15,23,42,.28);

}

.right{
    flex:3;

    display:flex;
    flex-direction:column;

    background:rgba(15,23,42,.28);


}
</style>