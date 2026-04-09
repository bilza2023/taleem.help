
// core renderer
export function renderDeck(deck) {
    return deck.map(renderSlide).join("");
  }
  
  function renderSlide(raw) {
    const fn = SlideRegistry[raw.type];
  
    if (!fn) {
      throw new Error(`Unknown slide: ${raw.type}`);
    }
  
    return fn(raw.data);
  }