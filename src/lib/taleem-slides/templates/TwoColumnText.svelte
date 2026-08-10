
<script>
    import { getBaseFont } from "../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: left = slide.data.find(x => x.name === "left");
    $: right = slide.data.find(x => x.name === "right");

    $: baseFont = getBaseFont(width, height);
</script>

<section class="slide">
    <div class="columns">
        <div class="column" class:visible={currentTime >= left?.showAt}>
            {left?.content}
        </div>

        <div class="column" class:visible={currentTime >= right?.showAt}>
            {right?.content}
        </div>
    </div>
</section>

<style>
    .slide{
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
}

.columns{
    width:min(92%,1200px);
    display:flex;
    align-items:center;
    justify-content:center;
    gap:40px;
}

.column{
    flex:1;
    padding:40px;
    box-sizing:border-box;
    border:2px solid white;
    border-radius:16px;
    text-align:left;
    font-size:48px;
    line-height:1.5;
}

.column.visible{
    opacity:1;
}
</style>