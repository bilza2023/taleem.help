<script>
    import Math from "../../utils/Math.svelte";

    export let line;
    export let active = false;
    export let rowHeight = 56;
    export let lineNumber = 1;
</script>

<div class="line" class:active style={`min-height:${rowHeight}px;`}>
    <div class="number">{lineNumber}</div>

    <div class="content">
        {#if line.type === "math"}
            <Math tex={line.content} displayMode={true}/>
        {:else}
            <span>{line.content}</span>
        {/if}
    </div>
</div>

<style>
.line{
    box-sizing:border-box;
    width:100%;
    margin:0 0 10px;
    padding:8px 24px;
    display:flex;
    align-items:center;
    border-radius:12px;
    background:rgba(15,23,42,.32);
    border:1px solid rgba(255,255,255,.08);
    backdrop-filter:blur(6px);
    transition:background .18s ease,border-color .18s ease;
}

.number{
    flex:0 0 44px;
    align-self:stretch;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:12px;
    font-size:.9rem;
    opacity:.45;
    font-weight:600;
}

.content{
    flex:1;
    min-width:0;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    overflow:hidden;
}

.line :global(.katex-display){
    margin:0;
}

.line :global(.katex){
    font-size:1.55em;
}

.line span{
    font-size:1.45rem;
    font-weight:500;
}

.line.active{
    margin-bottom:0;
    border-radius:12px 12px 0 0;
    background:rgba(59,130,246,.20);
    border:2px solid rgba(147,197,253,.90);
    border-left:8px solid #60a5fa;
    border-bottom:0;
    box-shadow:
        0 0 0 1px rgba(255,255,255,.06) inset,
        0 0 18px rgba(96,165,250,.20);
}

.line.active .number{
    opacity:.9;
    color:#93c5fd;
}

.line.active span{
    font-weight:700;
}

@media(max-width:700px){
    .line{
        padding:5px 10px;
        margin-bottom:6px;
        border-radius:9px;
    }

    .number{
        flex:0 0 26px;
        margin-right:5px;
        font-size:.7rem;
    }

    .line :global(.katex){
        font-size:1.05em;
    }

    .line span{
        font-size:.95rem;
    }

    .line.active{
        margin-bottom:0;
        border-radius:9px 9px 0 0;
    }
}

@media(max-width:450px){
    .line{
        padding:4px 7px;
    }

    .number{
        flex:0 0 22px;
        margin-right:3px;
        font-size:.65rem;
    }

    .line :global(.katex){
        font-size:.92em;
    }

    .line span{
        font-size:.85rem;
    }
}
</style>