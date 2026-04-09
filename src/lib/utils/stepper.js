
export function createTaleemStepper(deck = []) {
  let slideIndex = 0;

  // per-slide state
  let steps = [];
  let showAtIndex = 0;

  function getSteps(slide) {
    const items = Array.isArray(slide.data) ? slide.data : [];

    const values = items
      .map(d => d.showAt)
      .filter(v => typeof v === "number" && v > 0);

    const unique = [...new Set(values)];

    unique.sort((a, b) => a - b);

    return unique;
  }

  function loadSlide(index) {
    slideIndex = Math.max(0, Math.min(deck.length - 1, index));
    const slide = deck[slideIndex];

    steps = getSteps(slide);

    // if no steps → treat as single state
    showAtIndex = 0;
  }

  function current() {
    const slide = deck[slideIndex];

    const currentShowAt =
    steps.length === 0
      ? null
      : steps[showAtIndex] ?? steps[0];

    return {
      slide,
      slideIndex,
      totalSlides: deck.length,
      currentShowAt,
      stepIndex: showAtIndex,
      totalSteps: steps.length
    };
  }

  function next() {
    if (steps.length === 0) {
      // no steps → jump slide
      if (slideIndex < deck.length - 1) {
        loadSlide(slideIndex + 1);
      }
      return current();
    }

    if (showAtIndex < steps.length - 1) {
      showAtIndex++;
    } else {
      // move to next slide
      if (slideIndex < deck.length - 1) {
        loadSlide(slideIndex + 1);
      }
    }

    return current();
  }

  function prev() {
    if (steps.length === 0) {
      if (slideIndex > 0) {
        loadSlide(slideIndex - 1);
        // go to last step of that slide
        if (steps.length > 0) {
          showAtIndex = steps.length - 1;
        }
      }
      return current();
    }

    if (showAtIndex > 0) {
      showAtIndex--;
    } else {
      // move to previous slide
      if (slideIndex > 0) {
        loadSlide(slideIndex - 1);

        if (steps.length > 0) {
          showAtIndex = steps.length - 1;
        }
      }
    }

    return current();
  }

  // init
  loadSlide(0);

  return {
    next,
    prev,
    current
  };
}