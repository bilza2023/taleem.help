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
            <span class="contentSpan">{line.content}</span>
        {/if}
    </div>
</div>


<style>

.content :global(.katex){
    font-size:max(1.2em, 24px);
}


.line{
    width:100%;
    min-height:calc(var(--base-font)*3);
    padding:calc(var(--base-font)*.7) calc(var(--base-font)*1.2);
    margin-bottom:calc(var(--base-font)*.5);
    box-sizing:border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    background:var(--player-surface);
    border:2px solid var(--player-border);
    border-radius:calc(var(--base-font)*.4);
    color:var(--player-text);
    font-size:calc(var(--base-font)*1.2);

    transition:
        border-color .35s ease,
        box-shadow .35s ease,
        background .35s ease,
        transform .35s ease;
}
.contentSpan{
    font-size:calc(var(--base-font)*1.5);
}
.line.active{
 border-top:2px solid #ef4444;
border-left:2px solid #ef4444;
border-right:2px solid #ef4444;

        background:color-mix(in srgb,var(--player-surface) 90%,var(--player-text) 15%);
   
    border-left:calc(var(--base-font)*.3) solid var(--player-primary);
    box-shadow:0 0 calc(var(--base-font)*.5)
        color-mix(in srgb,var(--player-primary) 25%,transparent);
    transform:scale(1.01);
}
.content{
    
    width:100%;
    text-align:center;
    color:var(--player-text);
}
</style>