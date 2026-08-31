<script>
    export let background = {};
</script>

<div class="background" style={`background-color:${background.backgroundColor ?? "#111"};`}>

    {#if background.backgroundImage}
        <div
            class="image"
            style={`
                background-image:url(${background.backgroundImage});
                opacity:${background.backgroundImageOpacity ?? 1};
            `}
        />
    {/if}

    <div class="content">
        <slot/>
    </div>

</div>

<style>
.background{
    position:relative;
    width:100%;
    height:100%;
    overflow:hidden;
}

.image{
    position:absolute;
    inset:0;

    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;

    z-index:0;
}

.content{
    position:relative;
    width:100%;
    height:100%;
    z-index:1;
}
</style>