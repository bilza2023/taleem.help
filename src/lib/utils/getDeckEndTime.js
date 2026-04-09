
export function getDeckEndTime(deck) {
    if (!deck || !deck.deck || deck.deck.length === 0) {
      return 0;
    }
  
    return deck.deck[deck.deck.length - 1].end;
  }
  