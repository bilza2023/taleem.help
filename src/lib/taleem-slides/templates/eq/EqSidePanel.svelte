<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/lib/taleem-slides/templates/eq/EqSidePanel.svelte
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
    background:color-mix(in srgb,var(--player-surface) 85%,var(--player-text) 15%);
    /* border:2px solid var(--player-border); */
     border-bottom:3px solid #ef4444;
    border-top:0;
    border-left:8px solid var(--player-primary);
    border-radius:0 0 12px 12px;
    box-shadow:0 0 0 1px rgba(255,255,255,.04) inset,0 8px 18px rgba(0,0,0,.12);
    backdrop-filter:blur(6px);
    color:var(--player-text);
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
    background:var(--player-surface);
    border:1px solid var(--player-border);
    box-shadow:0 2px 8px rgba(0,0,0,.12);
    color:var(--player-text);
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
    color:var(--player-text);
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
        padding:6px 8px 7px 24px;
        grid-template-columns:1fr;
        gap:6px;
        border-left-width:4px;
        border-radius:0 0 8px 8px;
    }

    .left{
        gap:5px;
    }

    .spCard{
        padding:6px 8px;
        border-radius:7px;
    }

    .spText{
        font-size:.7rem;
        line-height:1.15;
    }

    .spMath{
        min-height:38px;
    }

    .spMath :global(.katex){
        font-size:.7em;
    }

    .right{
        max-height:110px;
    }

    .spImage{
        max-height:105px;
        width:auto;
        max-width:100%;
    }
}


/* Very short mobile screens */
@media(max-width:700px) and (max-height:600px){
    .sidePanel{
        padding:4px 7px 5px 22px;
        gap:4px;
    }

    .left{
        gap:4px;
    }

    .spCard{
        padding:5px 7px;
    }

    .spText{
        font-size:.65rem;
        line-height:1.1;
    }

    .spMath{
        min-height:32px;
    }

    .spMath :global(.katex){
        font-size:.65em;
    }

    .right{
        max-height:80px;
    }

    .spImage{
        max-height:76px;
    }
}

</style>