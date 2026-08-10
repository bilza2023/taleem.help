<script>
       import Math from "../../utils/Math.svelte";

    export let currentLine = null;
</script>

<div class="sidePanel">

    {#if currentLine?.spItems}

    {#each currentLine.spItems as item}

    {#if item.type === "text"}
        <p class="spText">
            {item.content}
        </p>
    {/if}

    {#if item.type === "math"}
        <div class="spMath">
            <Math tex={item.content} displayMode={true}/>
        </div>
    {/if}

    {#if item.type === "image"}
        <img
            class="spImage"
            src={item.content}
            alt=""
        />
    {/if}

{/each}

    {/if}

</div>


<style>
.sidePanel{
    width:100%;
    height:100%;

    box-sizing:border-box;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;

    gap:24px;

    padding:24px;

    background:rgba(15,23,42,.32);
    border:1px solid rgba(255,255,255,.08);

    backdrop-filter:blur(8px);
}

.sidePanel p{
    width:100%;
    margin:0;

    text-align:left;
    line-height:1.6;
    font-size:1rem;
}

.math{
    width:100%;
    display:flex;
    justify-content:center;
}

.math :global(.katex-display){
    margin:0;
}

.math :global(.katex){
    font-size:1.35em;
}

.sidePanel img{
    width:100%;
    height:auto;

    border-radius:6px;
    object-fit:contain;

    display:block;
}
.spText{
    margin:0;

    padding:10px 12px;

    color:#f8fafc;

    font-size:1.05rem;
    line-height:1.55;

    background:rgba(255,255,255,.08);

    border-left:4px solid #60a5fa;
    border-radius:8px;

    text-align:left;
}

.spMath{
    padding:10px;

    background:rgba(255,255,255,.08);

    border-radius:8px;
}

.spMath :global(.katex-display){
    margin:0;
}

.spMath :global(.katex){
    color:#fff;
    font-size:1.35em;
}

.spImage{
    display:block;

    width:100%;
    max-width:100%;

    flex:1;

    object-fit:contain;

    border-radius:10px;
}
</style>