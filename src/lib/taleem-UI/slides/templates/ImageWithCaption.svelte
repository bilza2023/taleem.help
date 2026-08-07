<script>
    import { getBaseFont } from "../../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: image = slide.data.find(x => x.name === "image");
    $: caption = slide.data.find(x => x.name === "caption");
    $: baseFont = getBaseFont(width, height);
</script>

<section
    class="slide"
    style={`
        --base-font:${baseFont}px;
        --text:${theme.text};
        --panel:${theme.panel};
        --border:${theme.border};
    `}
>
    <div class="panel">

        {#if image}
            <div class="imageBox" class:visible={currentTime >= image.showAt}>
                <img src={image.content} alt="" />
            </div>
        {/if}

        {#if caption}
            <div class="captionBox" class:visible={currentTime >= caption.showAt}>
                <p>{caption.content}</p>
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
}

.panel{
    width:min(92%,1200px);
    height:100%;
    display:flex;
    flex-direction:column;
    gap:calc(var(--base-font)*.7);
}

.imageBox{
    flex:1;
    min-height:0;
    display:flex;
    justify-content:center;
    align-items:center;
    opacity:.15;
}

.imageBox.visible{
    opacity:1;
}

.imageBox img{
    max-width:100%;
    max-height:100%;
    object-fit:contain;
    display:block;
}

.captionBox{
    flex:0 0 auto;
    padding:calc(var(--base-font)*.6);
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:calc(var(--base-font)*.4);
    color:var(--text);
    opacity:.15;
}

.captionBox.visible{
    opacity:1;
}

.captionBox p{
    margin:0;
    text-align:center;
    font-size:calc(var(--base-font));
    line-height:1.4;
}
</style>