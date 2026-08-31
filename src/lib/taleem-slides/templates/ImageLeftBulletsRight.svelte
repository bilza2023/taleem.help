<script>
    import { getBaseFont } from "../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: image = slide.data.find(x => x.name === "image");
    $: bullets = slide.data.filter(x => x.name === "bullet");

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

        <div class="imageColumn">
            {#if image}
                <img
                    class="image"
                    class:visible={currentTime >= image.showAt}
                    src={image.content}
                    alt=""
                />
            {/if}
        </div>

        <div class="bulletColumn">
            {#each bullets as bullet}
                <div class="bullet" class:visible={currentTime >= bullet.showAt}>
                    {bullet.content}
                </div>
            {/each}
        </div>

    </div>
</section>

<style>
.slide{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:calc(var(--base-font)*1.2);
    box-sizing:border-box;
    color:var(--text);
}

.panel{
    width:min(94%,1200px);
    height:100%;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:calc(var(--base-font));
}

.imageColumn{
    display:flex;
    justify-content:center;
    align-items:center;
    min-width:0;
    min-height:0;
}

.image{
    width:100%;
    height:100%;
    object-fit:contain;
    display:block;
    opacity:.15;
}

.image.visible{
    opacity:1;
}

.bulletColumn{
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:calc(var(--base-font)*.6);
    min-width:0;
}

.bullet{
    padding:calc(var(--base-font)*.7) calc(var(--base-font));
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:calc(var(--base-font)*.45);
    font-size:calc(var(--base-font));
    line-height:1.4;
    box-sizing:border-box;
    opacity:.15;
}

.bullet.visible{
    opacity:1;
    border-color:var(--accent);
}

@media (max-width:700px){
    .bullet{
         font-size:calc(var(--base-font)*1.7);
    }
}
</style>