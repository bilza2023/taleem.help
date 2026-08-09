<script>
    import Math from "$lib/taleem-math/Math.svelte";

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
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;

    padding:0 16px;
    margin-bottom:8px;

    border-radius:10px;

    background:rgba(255,255,255,.04);
    border:1px solid rgba(255,255,255,.08);

    transition:background .2s,border-color .2s;
}

.line.active{
    background:rgba(96,165,250,.18);
    border-color:#60a5fa;
}

.line :global(.katex-display){
    margin:0;
}

.line span{
    font-size:1.1rem;
    text-align:center;
}
</style>