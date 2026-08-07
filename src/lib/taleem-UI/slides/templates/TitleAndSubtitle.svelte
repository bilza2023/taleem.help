<script>
    export let slide;
    export let width = 0;
    export let height = 0;

    const title = slide.data.find(x => x.name === "title");
    const subtitle = slide.data.find(x => x.name === "subtitle");

    $: console.log({
        width,
        height
    });
</script>

<section
    class="slide titleAndSubtitle"
    style={`
        --title-size:${Math.max(32, width * 0.04)}px;
        --subtitle-size:${Math.max(18, width * 0.02)}px;
    `}
>
    <h1>{title?.content}</h1>
    <h2>{subtitle?.content}</h2>
</section>

<style>
.slide{
    width:100%;
    height:100%;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    text-align:center;
    gap:2rem;

    padding:5%;
    box-sizing:border-box;
}

h1{
    margin:0;

    font-size:var(--title-size);
    line-height:1.1;
}

h2{
    margin:0;

    font-size:var(--subtitle-size);
    font-weight:400;
    opacity:.8;

    line-height:1.3;
}
</style>