

export function getSlideAtTime(deck, time) {
    if (!deck || !Array.isArray(deck.deck)) return null;
  
    const slides = deck.deck;
  
    for (let i = slides.length - 1; i >= 0; i--) {
      const s = slides[i];
      if (time >= s.start && time < s.end) {
        return s;
      }
    }
  
    return null;
  }