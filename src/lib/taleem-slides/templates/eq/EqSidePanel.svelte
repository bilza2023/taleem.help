<script>
    import Math from "../../utils/Math.svelte";

    export let currentLine = null;

    $: textItems = currentLine?.spItems?.filter(item => item.type === "text") ?? [];
    $: mathItems = currentLine?.spItems?.filter(item => item.type === "math") ?? [];
    $: imageItems = currentLine?.spItems?.filter(item => item.type === "image") ?? [];
</script>

{#if currentLine?.spItems?.length}
    <div class="sidePanel">
        <div class="left">
            {#each textItems as item}
                <div class="spCard spText">
                    {item.content}
                </div>
            {/each}

            {#each mathItems as item}
                <div class="spCard spMath">
                    <Math tex={item.content} displayMode={true}/>
                </div>
            {/each}
        </div>

        <div class="right">
            {#each imageItems as item}
                <img class="spImage" src={item.content} alt="" />
            {/each}
        </div>
    </div>
{/if}

<style>
.sidePanel{
    width:100%;
    box-sizing:border-box;
    margin:0 0 14px;
    padding:14px 24px 16px 58px;

    display:grid;
    grid-template-columns:minmax(0,58%) minmax(0,42%);
    gap:20px;

    background:rgba(15,23,42,.28);
    border:2px solid rgba(147,197,253,.90);
    border-top:0;
    border-left:8px solid #60a5fa;
    border-radius:0 0 12px 12px;

    box-shadow:
        0 0 0 1px rgba(255,255,255,.04) inset,
        0 8px 18px rgba(96,165,250,.12);

    backdrop-filter:blur(6px);
}

.left{
    min-width:0;
    display:flex;
    flex-direction:column;
    gap:10px;
    justify-content:center;
}

.right{
    min-width:0;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    overflow:hidden;
}

.spCard{
    box-sizing:border-box;
    width:100%;
    padding:12px 16px;

    border-radius:9px;
    background:rgba(15,23,42,.38);
    border:1px solid rgba(255,255,255,.10);

    box-shadow:0 2px 8px rgba(0,0,0,.12);
}

.spText{
    font-size:1.25rem;
    line-height:1.45;
    font-weight:500;
}

.spMath{
    min-height:64px;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
}

.spMath :global(.katex-display){
    margin:0;
}

.spMath :global(.katex){
    font-size:1.25em;
}

.spImage{
    display:block;
    width:100%;
    max-width:100%;
    max-height:300px;
    height:auto;
    object-fit:contain;
    border-radius:10px;
}

/* Mobile */
@media(max-width:700px){
    .sidePanel{
        padding:8px 10px 10px 30px;
        grid-template-columns:1fr;
        gap:8px;
        border-left-width:5px;
        border-radius:0 0 9px 9px;
    }

    .left{
        gap:6px;
    }

    .spCard{
        padding:8px 10px;
    }

    .spText{
        font-size:1rem;
        line-height:1.35;
    }

    .spMath{
        min-height:48px;
    }

    .spMath :global(.katex){
        font-size:1em;
    }

    .right{
        max-height:150px;
    }

    .spImage{
        max-height:145px;
        width:auto;
        max-width:100%;
    }
}

/* Very short mobile screens */
@media(max-width:700px) and (max-height:600px){
    .sidePanel{
        padding-top:5px;
        padding-bottom:6px;
        gap:5px;
    }

    .spText{
        font-size:.9rem;
        line-height:1.3;
    }

    .spMath{
        min-height:40px;
    }

    .spMath :global(.katex){
        font-size:.85em;
    }

    .right{
        max-height:95px;
    }

    .spImage{
        max-height:90px;
    }
}
</style>