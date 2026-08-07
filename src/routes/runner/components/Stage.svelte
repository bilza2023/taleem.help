<div class="stage">

    <div class="scene-area">
        <slot name="scene" />
    </div>

    <div class="controls-area">
        <slot name="controls" />
    </div>

</div>

<style>
:global(html),
:global(body),
:global(#app){
    margin:0;
    width:100%;
    height:100%;
    overflow:hidden;
}

.stage{
    position:fixed;
    inset:0;

    display:grid;
    grid-template-rows:1fr 72px;

    background:#111;
}

.scene-area{
    overflow:hidden;

    display:flex;
    justify-content:center;
    align-items:center;
}

.controls-area{
    border-top:1px solid rgba(255,255,255,.08);
    background:#181818;
}
</style>