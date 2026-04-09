
export function createSimpleSlideStepper(deck = []) {
    let index = 0;
  
    function clamp(i) {
      return Math.max(0, Math.min(deck.length - 1, i));
    }
  
    return {
      next() {
        index = clamp(index + 1);
        return this.current();
      },
  
      prev() {
        index = clamp(index - 1);
        return this.current();
      },
  
      go(i) {
        index = clamp(i);
        return this.current();
      },
  
      current() {
        return {
          index,
          slide: deck[index],
          total: deck.length
        };
      },
  
      hasNext() {
        return index < deck.length - 1;
      },
  
      hasPrev() {
        return index > 0;
      }
    };
  }