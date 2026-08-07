<script>
    // /src/lib/taleem-UI/slides/Slide.svelte

    import { SlideType } from "$lib/taleem-specs/enums/SlideType.js";

    import TitleAndSubtitle from "./templates/TitleAndSubtitle.svelte";
    import BulletList from "./templates/BulletList.svelte";

    export let slide;
    export let theme;
    export let currentTime = 0;
    export let width = 0;
    export let height = 0;
    
    $: console.log("slide-current slide" , slide);
$: console.log("slide.type =", slide?.type);
$: console.log("SlideType.BulletList =", SlideType.BulletList);

</script>

{#if slide}
{#if slide.type === SlideType.TitleAndSubtitle}
    <TitleAndSubtitle {slide} {currentTime} {width} {height} {theme}/>
{/if}

{#if slide.type === SlideType.BulletList}

    <BulletList {slide} {currentTime} {width} {height} {theme}/>
{/if}

{/if}

<style>
.unknown {
    padding: 2rem;
    color: white;
}
</style>