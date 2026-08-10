<script>
    import { getBaseFont } from "../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: quote = slide.data.find(x => x.name === "quote");
    $: author = slide.data.find(x => x.name === "author");

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
    <div class="panel">

        {#if quote}
            <blockquote class:visible={currentTime >= quote.showAt}>
                “{quote.content}”
            </blockquote>
        {/if}

        {#if author}
            <div class="author" class:visible={currentTime >= author.showAt}>
                {author.content}
            </div>
        {/if}

    </div>
</section>

<style>
.slide{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:calc(var(--base-font));
    box-sizing:border-box;
    color:var(--text);
}

.panel{
    width:min(90%,1000px);
    display:flex;
    flex-direction:column;
    gap:calc(var(--base-font));
    padding:calc(var(--base-font)*1.5);
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:calc(var(--base-font)*.45);
    box-sizing:border-box;
}

blockquote{
    margin:0;
    text-align:center;
    font-size:calc(var(--base-font)*1.8);
    line-height:1.4;
    font-style:italic;
    opacity:.15;
}

blockquote.visible{
    opacity:1;
}

.author{
    text-align:right;
    font-size:calc(var(--base-font));
    opacity:.15;
}

.author.visible{
    opacity:1;
    color:var(--accent);
}

@media (max-width:700px){
    blockquote{
         font-size:calc(var(--base-font)*3.5);
    }
    .author{
         font-size:calc(var(--base-font)*2.5);
    }
}
</style>