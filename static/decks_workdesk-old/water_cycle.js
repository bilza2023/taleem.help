
// GoldStart_WaterCycle_Deck.js
// A simple 6-slide deck on the Water Cycle

export function defineDeck(deckbuilder){
deckbuilder.addDetails({
  name:        "water_cycle",
  description: "A simple 6-slide deck on the Water Cycle",
  tags:        ["water", "environment", "cycle"],
  status:      "draft",
  createdAt:   "2025-07-09T00:00:00Z",
  editedAt:    "2025-07-09T00:00:00Z"
});

deckbuilder.s.titleSlide(10, [
    { name: "title",   content: "The Water Cycle",          showAt: 0 }
  ]);
  
  deckbuilder.s.titleAndSubtitle(20, [
    { name: "title",    content: "From Evaporation to Rain",    showAt: 0 },
    { name: "subtitle", content: "Nature’s Endless Recycling", showAt: 1 }
  ]);
  
  deckbuilder.s.bulletList(30, [
    { name: "bullet", content: "Evaporation: Water → Vapor",         showAt: 21 },
    { name: "bullet", content: "Condensation: Vapor → Clouds",       showAt: 22 },
    { name: "bullet", content: "Precipitation: Clouds → Rain/Snow",  showAt: 23 }
  ]);
  
  deckbuilder.s.imageWithCaption(40, [
    { name: "image",   content: "/images/box.webp", showAt: 0 },
    { name: "caption", content: "Diagram of the water cycle",      showAt: 1 }
  ]);
  
  deckbuilder.s.table(50, [
    { name: "headers", content: ["Stage","Description"], showAt: 0 },
    { name: "rows",    content: [
        ["Evaporation",    "Liquid water turns into vapor"],
        ["Condensation",   "Water vapor cools into droplets"],
        ["Precipitation",  "Droplets fall as rain or snow"]
      ], showAt: 1 }
  ]);
  
  deckbuilder.s.contactSlide(60, [
    { name: "headline", content: "Need More Info?",            showAt: 0 },
    { name: "email",    content: "help@taleem.help",          showAt: 1 },
    { name: "phone",    content: "+92 300 1234567",           showAt: 2 }
  ]);
  
}