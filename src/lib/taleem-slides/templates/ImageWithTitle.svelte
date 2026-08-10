<script>
    export let slide;
    export let currentTime = 0;

    $: title = slide.data.find(x => x.name === "title");
    $: image = slide.data.find(x => x.name === "image");
</script>

<section class="slide" >
    <div class="panel">

        {#if title}
            <div class="titleBox" class:visible={currentTime >= title.showAt}>
                <h1>{title.content}</h1>
            </div>
        {/if}

        {#if image}
            <div class="imageBox" class:visible={currentTime >= image.showAt}>
                <img src={image.content} alt="" />
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

.titleBox{
    flex:0 0 auto;
    padding:calc(var(--base-font)*.6);
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:calc(var(--base-font)*.4);
    color:var(--text);
    opacity:.15;
}

.titleBox.visible{
    opacity:1;
}

.titleBox h1{
    margin:0;
    text-align:center;
    font-size:calc(var(--base-font)*1.6);
    line-height:1.2;
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
@media (max-width:700px){
    .titleBox h1{
         font-size:calc(var(--base-font)*2.2);
    }
}
</style>