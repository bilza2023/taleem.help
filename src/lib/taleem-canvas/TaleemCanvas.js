
import Create from "./Create.js";
import ItemsMap from "./ItemsMap.js";
import BackgroundItem from "./items/BackgroundItem.js";
import EventModule from "./EventModule.js";
import Env from "./Env.js";
import Add from "./Add.js";
// import InputModule from "../core/InputModule.js";
// import loadImagesLocal from "./loadImagesLocal.js";
/////////////////////////////////////////////////////////////////
function itemsToObjects(items){
  let itemObjects = [];
  for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const OBJECT = ItemsMap.get(item.type);
      const itemObject = new OBJECT(item);
      itemObject.env = this.env; //=====> INJECT ENV INTO EACH OBJECT
      itemObjects.push(itemObject);
  }
  return itemObjects;
}
/////////////////////////////////////////////////////////////////
export default class TaleemCanvas  {
// Create has to be totally external since this has to be a subscriber app
// The Editor and the Player must be seperate such that both take in itemData literals and the Static Player can also take directly itemObjects 
// ===> THIS IS THE POINT THE STATIC PLAYER SHOULD BE ABLE TO TAKE IN DATA-ITEM-LITERALS AS WELL AS ITEM-OBJECTS SO THAT IT CAN PAIR WITH THE APP AS WELL AS THE EDITOR AND ITS SELF DOES NOT DO ANY EDITING (though the base class is same for all item-objects).

static Create = Create;  
// static ItemsMap = ItemsMap;-->Bas idea
///////////////////////////////////////////////////////////////
  constructor(canvas, ctx) {
    if (!canvas || !ctx) {
      console.error("TaleemCanvas requires both a canvas element and a 2D rendering context.");
      throw new Error("TaleemCanvas requires both `canvas` and `ctx`.");
    }
    this.canvas = canvas;
    this.ctx = ctx;
    this.env = new Env(this.ctx);
    // this._background = new BackgroundItem();
    // this._background.env = this.env; // very important
    

    this.width = 1000;
    this.height = 360;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
     
    this.imagesArray = [];
    ////////////////////////////////////////////////////////////////////////
    this.eventModule = new EventModule(this.canvas); // No longer passing items array
    // this.inputModule = new InputModule();
  }

 
  async loadImages(imagesArray=[]){//thise can be loaded later
    // this.env.images = await loadImagesLocal(imagesArray);
    return true;
  }

  clear(){
    const { ctx, canvas, slideExtra } = this;
    const bgColor =  'gray';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
  }

  onMouse(eventType, callback) {
    // debugger;
    this.eventModule.on(eventType, callback);
  }
//if am not using items firectly rather using _items
 set items(items){
  //add checking fields system here so that no item has less or more fields
 this._items = items;
 } 
 get items(){
  return this._items;
 }

 set background(itemExtra){
    this._background.itemExtra = itemExtra;
 }
 get background(){
    return this._background.itemExtra;
 }
//   onKey(eventType, callback) {
    // this.inputModule.on(eventType, callback);
//   }

//--Add drawing background item : 
  draw() {
    const itemObjects = this.itemsToObjects(this._items);
    this.eventModule.updateItems(itemObjects);
    this.clear();
    this._background.draw(this.ctx);
    this.drawItems(itemObjects);
  }
  drawItems(items = []) {
    items.forEach(item => {
      if (typeof item.draw === 'function') {
        item.draw(this.ctx);
      }
    });
  }

}