<script>
  import {Editor} from '$lib/app';
  import {onMount,toast} from "$lib/util";
  import fetchPresentation from '$lib/apiCalls/fetchPresentation';
  import savePresentation  from '$lib/apiCalls/savePresentation';
  import Nav from '../Nav.svelte';
  import SlideEditBox from '$lib/SlideEditBox.svelte'; 
  import {presentationData} from './static_slide_data';
  //Environment variables
  const SOUND_URL = import.meta.env.VITE_SOUND_BASE_URL;
  const IMAGES_URL = import.meta.env.VITE_IMAGES_BASE_URL;
  const DEFAULT_AUDIO = import.meta.env.VITE_DEFAULT_AUDIO;
    ////////////////////////////////////////////
      let slides=null;
      let id;
      let presentation;
      let soundUrlComplete=null;
      let showToolbar=true;
      let showSlideEditBox = false; //showSlideEditBox

/////////////////////////////////////////////////////////////\\\\\\      
onMount(async () => {
  // id = new URLSearchParams(location.search).get("id");
  // presentation = await fetchPresentation(id);
  // soundUrlComplete = SOUND_URL + "/" + presentation.filename + ".opus";
  // if (presentation) slides = presentation.slides;
  slides = presentationData;
});
//////////////////////////////////////////////////////////////////\\\\
async function save() {
  await savePresentation(presentation, slides);
}
</script>
  
<Nav bind:showSlideEditBox={showSlideEditBox} {presentation} bind:showToolbar={showToolbar}/>
  
  {#if showSlideEditBox}
  <SlideEditBox   bind:item={presentation}  />
  {/if}

        <div class="w-full bg-gray-800">
        {#if slides}
              <Editor
                      soundUrl={soundUrlComplete}
                      imagesUrl= {IMAGES_URL}
                      {showToolbar}
                      bind:slides={slides}
                      {save}
              />
        {/if}
        </div>