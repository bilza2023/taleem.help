
<script>
  import { onMount, onDestroy } from "svelte";
  import DrawEngine from "./taleem-canvas-components/drawEngine/DrawEngine"; 
///////////////////////////////////////////////////////
  export let items;
  export let assets = {}; //asssets should come with images loaded
  // assets.images = await loadImages(['/images/scene.png']);     
  let canvasElement;
  let taleem_draw_engine=null;
  let interval=null;
/////////////////////////////////////////////////////
  onMount(async () => {
    
    if (canvasElement){
      const ctx = canvasElement.getContext("2d");
      taleem_draw_engine = new DrawEngine(canvasElement, ctx);
      const itemExtras = stripItemExtraFromItems(items);
      taleem_draw_engine.clear();
      taleem_draw_engine.draw(itemExtras);//FIX THIS
    //   interval = setInterval(gameloop,20);
    }
  });
//////////////////////////////////////////////////////
function gameloop(){
    if(taleem_draw_engine && items){

        taleem_draw_engine.draw(items) 
    } 
}
//////////////////////////////////////////////////////
  onDestroy(() => {
      if (interval) clearInterval(interval)
  });

 function stripItemExtraFromItems(items){
    let itemExtras = [];
    for (let i = 0; i < items.length; i++) {
        const itemExtra = items[i].itemExtra;
        itemExtras.push(itemExtra);
    }
    return itemExtras;
 }
</script>

<!-- <canvas bind:this={canvasElement}></canvas> -->
<canvas 
bind:this={canvasElement} 
style="border: 1px solid black; display: block; width: 1000px; height: 360px;"
></canvas>