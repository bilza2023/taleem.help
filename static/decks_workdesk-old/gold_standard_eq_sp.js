// GoldStandard_eq_sp_flat.js
// EQ slide with all sidebar types per step, using flat-style data

export function defineDeck(deckbuilder) {
  deckbuilder.addDetails({
    name:        "goldstandard_eq_sp",
    description: "EQ slide with all sidebar types per step (flat format)",
    tags:        ["eq", "sidebar", "gold-standard"],
    status:      "draft",
    createdAt:   "2025-07-09T00:00:00Z",
    editedAt:    "2025-07-09T00:00:00Z"
  });

  deckbuilder.s.eq(50, [
    // STEP 1
    { type:    "heading",  content: "Test All Sidebar Types", showAt: 0 },
    { type:    "spHeading", content: "SP Heading" },
    { type:    "spText",    content: "This is a sidebar comment." },
    { type:    "spMath",    content: "a^2 + b^2 = c^2" },
    { type:    "spImage",   content: "images/box.webp" },

    // STEP 2
    { type:    "math",      content: "E = mc^2", showAt: 10 },
    { type:    "spHeading", content: "Einstein's Law" },
    { type:    "spText",    content: "Energy-mass equivalence" },
    { type:    "spImage",   content: "images/box.webp" },

    // STEP 3
    { type:    "math",      content: "\\int_0^\\pi \\sin x \\,dx = 2", showAt: 20 },
    { type:    "spHeading", content: "Integral Result" },
    { type:    "spText",    content: "Area under sine curve from 0 to π" },
    { type:    "spMath",    content: "\\int_0^\\pi \\sin x \\,dx = 2" },

    // STEP 4
    { type:    "math",      content: "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}", showAt: 30 },
    { type:    "spHeading", content: "Basel Problem" },
    { type:    "spText",    content: "Euler's famous result" },
    { type:    "spImage",   content: "images/box.webp" },

    // STEP 5
    { type:    "text",      content: "End of test. All sidebar types shown.", showAt: 40 },
    { type:    "spText",    content: "Thanks for testing EQ format!" }
  ]);
}
