<script>
    export let slide;
    export let currentTime = 0;

    $: image = slide.data.find(x => x.name === "image");
</script>

<section class="slide">

    {#if image}
        <img
            class="image"
            class:visible={currentTime >= image.showAt}
            src={image.content}
            alt=""
        />
    {/if}

</section>

<style>
.slide{
    width:100%;
    height:100%;
    overflow:hidden;
}

.image{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
    opacity:.15;
}

.image.visible{
    opacity:1;
}
</style>