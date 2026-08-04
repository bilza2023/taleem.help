// /src/dsl/compileTimings.js

export function compileTimings(deck, presentationEnd) {
    for (let i = 0; i < deck.length; i++) {
      const currentSlide = deck[i];
      const nextSlide = deck[i + 1];
  
      if (nextSlide) {
        currentSlide.end = nextSlide.start;
      } else {
        currentSlide.end = presentationEnd;
      }
    }
  
    return deck;
  }