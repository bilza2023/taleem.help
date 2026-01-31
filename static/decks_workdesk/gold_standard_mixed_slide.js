// GoldStandard_mixed_slide.js
// Mixed “gold standard” deck: normal slides, extended EQ slide, and farewell slide

export function defineDeck(deckbuilder) {
    deckbuilder.addDetails({
      name:        "goldstandard_mixed_slide",
      description: "Mixed deck: normal slides, extended EQ slide, and farewell slide",
      tags:        ["mixed", "eq", "gold-standard"],
      status:      "draft",
      createdAt:   "2025-07-10T00:00:00Z",
      editedAt:    "2025-07-10T00:00:00Z"
    });
  
    // Slide 1: Title
    deckbuilder.s.titleSlide(10, [
      { name: "title", content: "GoldStandard Mixed Demo", showAt: 0 }
    ]);
  
    // Slide 2: Image with Caption
    deckbuilder.s.imageWithCaption(20, [
      { name: "image",   content: "/images/box.webp",     showAt: 0 },
      { name: "caption", content: "A normal image slide", showAt: 1 }
    ]);
  
    // Slide 3: Extended EQ Slide Example
    // start = 20 (previous end), end = 40
    deckbuilder.s.eq(40, [
      // Line 1
      { type:    "math",      content: "E = mc^2",                showAt: 20 },
      { type:    "spHeading", content: "Einstein's Law" },
      { type:    "spText",    content: "Energy–mass equivalence" },
      { type:    "spImage",   content: "/images/relativity.png" },
  
      // Line 2
      { type:    "text",      content: "Implications?",            showAt: 25 },
      { type:    "spText",    content: "Mass and energy are interchangeable" },
  
      // Line 3
      { type:    "math",      content: "F = ma",                   showAt: 30 },
      { type:    "spText",    content: "Newton's Second Law" },
  
      // Line 4
      { type:    "math",      content: "a = F / m",                showAt: 32 },
      { type:    "spText",    content: "Acceleration formula" },
  
      // Line 5
      { type:    "text",      content: "Unit Analysis",            showAt: 34 },
      { type:    "spText",    content: "N = kg·m/s²" },
  
      // Line 6
      { type:    "math",      content: "p = m v",                  showAt: 36 },
      { type:    "spText",    content: "Momentum definition" },
  
      // Line 7
      { type:    "text",      content: "Wrap-up",                  showAt: 38 },
      { type:    "spText",    content: "Core equations summary" }
    ]);
  
    // Slide 4: Goodbye Title
    deckbuilder.s.titleSlide(50, [
      { name: "title", content: "Thank You!", showAt: 0 }
    ]);
  }
  