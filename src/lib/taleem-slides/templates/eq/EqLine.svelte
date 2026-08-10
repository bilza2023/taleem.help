<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/lib/taleem-slides/templates/eq/EqLine.svelte
    import Math from "../../utils/Math.svelte";

    export let line;
    export let active = false;
    export let rowHeight = 56;
</script>

<div
    class="line"
    class:active
    style={`height:${rowHeight}px;`}
>
    {#if line.type === "math"}
        <Math tex={line.content} displayMode={true}/>
    {:else}
        <span>{line.content}</span>
    {/if}
</div>

<style>
.line{
    box-sizing:border-box;

    width:78%;
    margin:0 auto 10px;

    display:flex;
    align-items:center;
    justify-content:center;

    padding:0 20px;

    border-radius:12px;

    background:rgba(15,23,42,.32);
    border:1px solid rgba(255,255,255,.08);

    backdrop-filter:blur(6px);

    transition:
        background .18s ease,
        border-color .18s ease,
        transform .18s ease;
}

.line.active{
    background:rgba(59,130,246,.22);
    border-color:rgba(96,165,250,.65);

    transform:scale(1.02);
}

.line :global(.katex-display){
    margin:0;
}

.line :global(.katex){
    font-size:1.55em;
}

.line.active{
    background:rgba(59,130,246,.20);

    border:2px solid rgba(147,197,253,.90);
    border-left:8px solid #60a5fa;

    box-shadow:
        0 0 0 1px rgba(255,255,255,.06) inset,
        0 0 18px rgba(96,165,250,.20);

    transform:scale(1.02);
}

.line span{
    font-size:1.45rem;
    font-weight:500;
    text-align:center;
}

.line.active span{
    font-weight:700;
}
</style>