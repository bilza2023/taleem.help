<script>
    export let slide;
    export let currentTime = 0;

    $: left = slide.data.find(x => x.name === "left");
    $: right = slide.data.find(x => x.name === "right");
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
    color:var(--player-text);
}

.columns{
    width:min(92%,1200px);
    display:flex;
    align-items:center;
    justify-content:center;
    gap:calc(var(--base-font)*1);
}

.column{
    flex:1;
    padding:calc(var(--base-font)*1);
    box-sizing:border-box;
    background:var(--player-surface);
    border:2px solid var(--player-border);
    border-radius:calc(var(--base-font)*.45);
    text-align:left;
    font-size:calc(var(--base-font)*1.4);
    line-height:1.4;
    color:var(--player-text);
    opacity:.15;
}

.column.visible{
    opacity:1;
    border-color:var(--player-primary);
}
@media (max-width:700px){
    .column{
          font-size:calc(var(--base-font)*2);
    }
}
</style>