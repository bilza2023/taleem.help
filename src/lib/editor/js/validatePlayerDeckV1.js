/**
 * Player-level validator (V1)
 * Assumes deck has already passed zodDeckV1 (schema validation).
 * This file validates ONLY time / playback semantics.
 */

export function validatePlayerDeckV1(deck) {
    const errors = [];
  
    if (!deck || !Array.isArray(deck.deck)) {
      return fail("DECK_INVALID", "deck.deck must be an array");
    }
  
    const slides = deck.deck;
  
    validateSlideTiming(slides, errors);
    validateSlideSequence(slides, errors);
    validateShowAtRanges(slides, errors);
    validateEqSlides(slides, errors);
  
    return errors.length === 0
      ? { ok: true }
      : { ok: false, errors };
  }
  
  /* ───────────────────────── Helpers ───────────────────────── */
  
  function validateSlideTiming(slides, errors) {
    slides.forEach((slide, i) => {
      if (typeof slide.start !== "number" || typeof slide.end !== "number") {
        errors.push(err(
          "SLIDE_TIME_MISSING",
          `Slide ${i} must have numeric start/end`
        ));
        return;
      }
  
      if (slide.start >= slide.end) {
        errors.push(err(
          "SLIDE_TIME_ORDER",
          `Slide ${i} start (${slide.start}) must be < end (${slide.end})`
        ));
      }
  
      if (i === 0 && slide.start !== 0) {
        errors.push(err(
          "DECK_START_NOT_ZERO",
          `First slide must start at 0 (got ${slide.start})`
        ));
      }
    });
  }
  
  function validateSlideSequence(slides, errors) {
    for (let i = 0; i < slides.length - 1; i++) {
      const a = slides[i];
      const b = slides[i + 1];
  
      if (a.end !== b.start) {
        errors.push(err(
          "SLIDE_SEQUENCE_BREAK",
          `Slide ${i} ends at ${a.end} but next starts at ${b.start}`
        ));
      }
  
      if (b.start < a.start) {
        errors.push(err(
          "SLIDE_TIME_REVERSE",
          `Slide ${i + 1} starts before previous slide`
        ));
      }
    }
  }
  
  function validateShowAtRanges(slides, errors) {
    slides.forEach((slide, si) => {
      let lastShowAt = null;
  
      if (!Array.isArray(slide.data)) return;
  
      slide.data.forEach((item, di) => {
        if (typeof item.showAt !== "number") return;
  
        if (item.showAt < slide.start || item.showAt >= slide.end) {
          errors.push(err(
            "SHOWAT_OUT_OF_RANGE",
            `Slide ${si} item ${di} showAt ${item.showAt} outside [${slide.start}, ${slide.end})`
          ));
        }
  
        if (lastShowAt !== null && item.showAt < lastShowAt) {
          errors.push(err(
            "SHOWAT_ORDER",
            `Slide ${si} item ${di} showAt decreases (${item.showAt} < ${lastShowAt})`
          ));
        }
  
        lastShowAt = item.showAt;
      });
    });
  }
  
  function validateEqSlides(slides, errors) {
    slides.forEach((slide, si) => {
      if (slide.type !== "eq") return;
  
      let lastLineShowAt = null;
  
      slide.data.forEach((line, li) => {
        if (typeof line.showAt === "number") {
          if (line.showAt < slide.start || line.showAt >= slide.end) {
            errors.push(err(
              "EQ_LINE_SHOWAT_RANGE",
              `EQ slide ${si} line ${li} showAt ${line.showAt} outside slide range`
            ));
          }
  
          if (lastLineShowAt !== null && line.showAt < lastLineShowAt) {
            errors.push(err(
              "EQ_LINE_ORDER",
              `EQ slide ${si} line ${li} showAt decreases`
            ));
          }
  
          lastLineShowAt = line.showAt;
        }
  
        if (Array.isArray(line.spItems)) {
          line.spItems.forEach((sp, spi) => {
            if ("showAt" in sp) {
              errors.push(err(
                "EQ_SPITEM_SHOWAT_FORBIDDEN",
                `EQ slide ${si} line ${li} spItem ${spi} must not define showAt`
              ));
            }
          });
        }
      });
    });
  }
  
  /* ───────────────────────── Utils ───────────────────────── */
  
  function err(code, message) {
    return { code, message };
  }
  
  function fail(code, message) {
    return { ok: false, errors: [{ code, message }] };
  }
  