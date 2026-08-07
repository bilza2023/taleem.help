<script>
    import { getBaseFont } from "../../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: lines = slide.data;

    $: currentLine =
        [...lines]
            .reverse()
            .find(line => currentTime >= line.showAt);

    $: baseFont = getBaseFont(width, height);
</script>

<section
    class="slide"
    style={`
        --base-font:${baseFont}px;
        --text:${theme.text};
        --panel:${theme.panel};
        --border:${theme.border};
        --accent:${theme.accent};
    `}
>

<div class="layout">

    <div class="left">

        {#each lines as line}
            <div
                class="line"
                class:active={line===currentLine}
                class:visible={currentTime>=line.showAt}
            >
                {line.content}
            </div>
        {/each}

    </div>

    <div class="right">

        {#if currentLine?.spItems}

            {#each currentLine.spItems as item}

                {#if item.type==="text"}
                    <p>{item.content}</p>
                {/if}

                {#if item.type==="image"}
                    <img src={item.content} alt="" />
                {/if}

            {/each}

        {/if}

    </div>

</div>

</section>

<style>
.slide{
    width:100%;
    height:100%;
    padding:calc(var(--base-font));
    box-sizing:border-box;
    color:var(--text);
}

.layout{
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns:3fr 1fr;
    gap:calc(var(--base-font));
}

.left,
.right{
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:calc(var(--base-font)*.45);
    padding:calc(var(--base-font));
    box-sizing:border-box;
}

.left{
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:calc(var(--base-font)*.7);
}

.line{
    padding:calc(var(--base-font)*.5);
    border-radius:calc(var(--base-font)*.3);
    opacity:.3;
    font-size:calc(var(--base-font)*1.3);
    transition:.2s;
}

.line.visible{
    opacity:.6;
}

.line.active{
    opacity:1;
    background:var(--accent);
    color:white;
}

.right{
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:calc(var(--base-font));
}

.right p{
    margin:0;
    line-height:1.5;
    font-size:calc(var(--base-font));
}

.right img{
    width:100%;
    object-fit:contain;
    display:block;
}
</style>