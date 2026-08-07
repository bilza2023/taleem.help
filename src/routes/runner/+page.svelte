<script>
    import deck from '$lib/runner/golden-dsl-8-may-26.json';
    import TaleemUI from '$lib/taleem-UI/TaleemUI.svelte';
    const currentSlideIndex = 0;
    const currentSlide = deck.deck[currentSlideIndex];
    // console.log("deck" , deck);
    console.log("currentSlide" , currentSlide);
</script>

<TaleemUI slide={currentSlide}/>