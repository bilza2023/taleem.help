<script>
    export let slide;

    const title = slide.data.find(x => x.name === "title");
    const subtitle = slide.data.find(x => x.name === "subtitle");
</script>

<section class="slide titleAndSubtitle">
    <h1>{title?.content}</h1>
    <h2>{subtitle?.content}</h2>
</section>

<style>
.slide {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    gap: 2rem;
}

h1 {
    margin: 0;
    font-size: 4rem;
}

h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
    opacity: 0.8;
}
</style>