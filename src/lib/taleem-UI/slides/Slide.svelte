<script>
    // /src/lib/taleem-UI/slides/Slide.svelte

    import { SlideType } from "$lib/taleem-specs/enums/SlideType.js";

    import TitleAndSubtitle from "./templates/TitleAndSubtitle.svelte";
    import BulletList from "./templates/BulletList.svelte";
    import TwoColumnText from "./templates/TwoColumnText.svelte";
    import ImageSlide from "./templates/ImageSlide.svelte";
    import ImageWithTitle from "./templates/ImageWithTitle.svelte";
    import ImageWithCaption from "./templates/ImageWithCaption.svelte";
    import ImageLeftBulletsRight from "./templates/ImageLeftBulletsRight.svelte";
    import ImageRightBulletsLeft from "./templates/ImageRightBulletsLeft.svelte";
    import Table from "./templates/Table.svelte";
    import BarChart from "./templates/BarChart.svelte";
    import ProgressBar from "./templates/ProgressBar.svelte";
    import Quote from "./templates/Quote.svelte";
    import KeyIdeas from "./templates/KeyIdeas.svelte";
    import Eq from "./templates/Eq.svelte";
    import FillImage from "./templates/FillImage.svelte";
    import TitleAndPara from "./templates/TitleAndPara.svelte";

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

    {:else if slide.type === SlideType.BulletList}
        <BulletList {slide} {currentTime} {width} {height} {theme}/>

    {:else if slide.type === SlideType.TwoColumnText}
        <TwoColumnText {slide} {currentTime} {width} {height} {theme}/>
 
        {:else if slide.type === SlideType.ImageSlide}
        <ImageSlide {slide} {currentTime} {width} {height} {theme}/>
     
        {:else if slide.type === SlideType.ImageWithTitle}
        <ImageWithTitle {slide} {currentTime} {width} {height} {theme}/>
        {:else if slide.type === SlideType.ImageWithCaption}
        <ImageWithCaption {slide} {currentTime} {width} {height} {theme}/>
        {:else if slide.type === SlideType.ImageLeftBulletsRight}
        <ImageLeftBulletsRight {slide} {currentTime} {width} {height} {theme}/>
        {:else if slide.type === SlideType.ImageRightBulletsLeft}
        <ImageRightBulletsLeft {slide} {currentTime} {width} {height} {theme}/>
        {:else if slide.type === SlideType.Table}
        <Table {slide} {currentTime} {width} {height} {theme}/>
        {:else if slide.type === SlideType.BarChart}
        <BarChart {slide} {currentTime} {width} {height} {theme}/>
        {:else if slide.type === SlideType.ProgressBar}
        <ProgressBar {slide} {currentTime} {width} {height} {theme}/>
        {:else if slide.type === SlideType.Quote}
        <Quote {slide} {currentTime} {width} {height} {theme}/>
        {:else if slide.type === SlideType.KeyIdeas}
        <KeyIdeas {slide} {currentTime} {width} {height} {theme}/>
        {:else if slide.type === SlideType.Eq}
        <Eq {slide} {currentTime} {width} {height} {theme}/>
        {:else if slide.type === SlideType.FillImage}
        <FillImage {slide} {currentTime} {width} {height} {theme}/>
      
        {:else if slide.type === SlideType.TitleAndPara}
        <TitleAndPara {slide} {currentTime} {width} {height} {theme}/>

    {/if}

{/if}
