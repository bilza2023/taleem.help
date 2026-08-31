<script>
    ///home/bilal-tariq/00--TALEEM/taleem.help/src/lib/taleem-slides/TaleemSlide.svelte

    import { SlideType } from "$lib/taleem-specs/enums/SlideType.js";
    import { TaleemPlayerThemes } from "./themes/index.js";  
    import { getBaseFont } from "./utils/layout.js";


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
    import Eq from "./templates/eq/Eq.svelte";
    import FillImage from "./templates/FillImage.svelte";
    import TitleAndPara from "./templates/TitleAndPara.svelte";

    export let slide;
    export let theme;
    export let currentTime = 0;
    export let width = 844;
    export let height = 390;
    
   $: resolvedTheme = TaleemPlayerThemes[theme] ?? TaleemPlayerThemes.default;
    $: baseFont = getBaseFont(width, height);
//    $: console.log("resolvedTheme",resolvedTheme) 
</script>
{#if slide}
<div
    class="slide"
    style="
        --slide-width:{width}px;
        --slide-height:{height}px;
        --base-font:{baseFont}px;
        --player-background:{resolvedTheme.background};
        --player-primary:{resolvedTheme.primary};
        --player-secondary:{resolvedTheme.secondary};
        --player-surface:{resolvedTheme.surface};
        --player-text:{resolvedTheme.text};
        --player-muted:{resolvedTheme.muted};
        --player-border:{resolvedTheme.border};
    "
>
    {#if slide.type === SlideType.TitleAndSubtitle}
        <TitleAndSubtitle {slide} {currentTime} {width} {height} />

    {:else if slide.type === SlideType.BulletList}
        <BulletList {slide} {currentTime} {width} {height} theme={resolvedTheme}/>

    {:else if slide.type === SlideType.TwoColumnText}
        <TwoColumnText {slide} {currentTime} {width} {height} theme={resolvedTheme}/>
 
        {:else if slide.type === SlideType.ImageSlide}
        <ImageSlide {slide} {currentTime} {width} {height} theme={resolvedTheme}/>
     
        {:else if slide.type === SlideType.ImageWithTitle}
        <ImageWithTitle {slide} {currentTime} {width} {height} theme={resolvedTheme}/>
        {:else if slide.type === SlideType.ImageWithCaption}
        <ImageWithCaption {slide} {currentTime} {width} {height} theme={resolvedTheme}/>
        {:else if slide.type === SlideType.ImageLeftBulletsRight}
        <ImageLeftBulletsRight {slide} {currentTime} {width} {height} theme={resolvedTheme}/>
        {:else if slide.type === SlideType.ImageRightBulletsLeft}
        <ImageRightBulletsLeft {slide} {currentTime} {width} {height} theme={resolvedTheme}/>
        {:else if slide.type === SlideType.Table}
        <Table {slide} {currentTime} {width} {height} theme={resolvedTheme}/>
        {:else if slide.type === SlideType.BarChart}
        <BarChart {slide} {currentTime} {width} {height} theme={resolvedTheme}/>
        {:else if slide.type === SlideType.ProgressBar}
        <ProgressBar {slide} {currentTime} {width} {height} theme={resolvedTheme}/>
        {:else if slide.type === SlideType.Quote}
        <Quote {slide} {currentTime} {width} {height} theme={resolvedTheme}/>
        {:else if slide.type === SlideType.KeyIdeas}
        <KeyIdeas {slide} {currentTime} {width} {height} theme={resolvedTheme}/>
        
        {:else if slide.type === SlideType.Eq}
        <Eq {slide} {currentTime} {width} {height} />
       
        {:else if slide.type === SlideType.FillImage}
        <FillImage {slide} {currentTime} {width} {height} theme={resolvedTheme}/>
      
        {:else if slide.type === SlideType.TitleAndPara}
        <TitleAndPara {slide} {currentTime} {width} {height} theme={resolvedTheme}/>

    {/if}
</div>
{/if}

<style>
.slide{
    width:100%;
    height:100%;
    min-width:0;
    min-height:0;
    box-sizing:border-box;
    overflow:hidden;
    color:var(--player-text);
    background:transparent;
}
</style>