<script>

    import { getBaseFont } from "../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: image = slide.data.find(x => x.name === "image");
    $: baseFont = getBaseFont(width, height);
</script>

<section
    class="slide"
    style={`
        --base-font:${baseFont}px;
        --panel:${theme.panel};
        --border:${theme.border};
    `}
>
    {#if image}
        <div class="imageBox" class:visible={currentTime >= image.showAt}>
            <img src={image.content} alt="" />
        </div>
    {/if}
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
}

.imageBox{
    width:min(90%,1200px);
    height:min(90%,700px);
    padding:calc(var(--base-font)*.5);
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:calc(var(--base-font)*.45);
    box-sizing:border-box;
    opacity:.15;
}

.imageBox.visible{
    opacity:1;
}

img{
    width:100%;
    height:100%;
    object-fit:contain;
    display:block;
}
</style>