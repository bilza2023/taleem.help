<script>
    export let slide;
    export let currentTime = 0;
    $: bar = slide.data[0];
</script>

<section class="slide" >
    <div class="panel">

        <h1>{bar.label}</h1>

        <div class="track">
            <div
                class="fill"
                class:visible={currentTime >= bar.showAt}
                style={`width:${bar.value}%`}
            ></div>
        </div>

        <div class="percent">
            {bar.value}%
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
    color:var(--player-text);
}

.panel{
    width:min(92%,1200px);
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    box-sizing:border-box;
}

h1{
    margin:0 0 calc(var(--base-font)*1);
    text-align:center;
    font-size:calc(var(--base-font)*2);
    line-height:1.2;
    color:var(--player-text);
}

.track{
    width:100%;
    height:calc(var(--base-font)*1.2);
    flex:0 0 auto;
    overflow:hidden;
    background:var(--player-surface);
    border:2px solid var(--player-border);
    border-radius:999px;
    box-sizing:border-box;
}

.fill{
    width:0;
    height:100%;
    background:var(--player-primary);
    border-radius:inherit;
    opacity:.15;
}

.fill.visible{
    opacity:1;
}

.percent{
    margin-top:calc(var(--base-font)*1);
    text-align:center;
    font-size:calc(var(--base-font)*2);
    font-weight:600;
    color:var(--player-text);
}
</style>