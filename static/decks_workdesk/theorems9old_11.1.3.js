// File: theorem_11_1_1_deck.js
export function defineDeck(b) {
  /* ── meta ─────────────────────────────────────────── */
  b.addDetails({
    name:        "theorem_11_1_3",
    description: "Slide for Theorem 11.1.1",
    tags:        ["theorem", "geometry", "class9"],
    status:      "draft"
  });

  b.setBackgroundColor("#F5F5F5");
  b.setBackgroundOpacity(0.1);

  /* ── slide 1 ─ image-left / bullets-right ──── 0-30 s */
  b.s.imageLeftBulletsRight(30, [
    { name: "image",  content: "/images/theorems9old_11.1.3.svg", showAt: 0 },
    { name: "bullet", content: "Step 1 – Congruent Triangles",               showAt: 0 },
    { name: "bullet", content: "Step 2 – NB ∥ AM and NB = MC",              showAt: 0 },
    { name: "bullet", content: "Step 3 – Parallelogram NBMC",               showAt: 0 },
    { name: "bullet", content: "Step 3b – Prove LM 1/2 of BC",               showAt: 0 },
  ]);

  /* ── slide 2 ─ EQ (diagram + narrative) ──── 30-120 s */
  b.s.eq(90, [
    { type: "spImage",   content: "/images/theorems9old_11.1.3.svg",                      showAt: 30 },

    { type: "spHeading", content: "Given",                                               showAt: 31 },
    { type: "spText",    content: "Point L and M are mid-points of AB and AC",            showAt: 32 },

    { type: "spHeading", content: "To Prove",                                            showAt: 33 },
    { type: "spText",    content: "LM ∥ BC",                                             showAt: 34 },
    { type: "spText",    content: "LM = ½ BC",                                           showAt: 35 },

    { type: "spHeading", content: "Construction",                                        showAt: 36 },
    { type: "spText",    content: "Draw LN so that ML = LN",                             showAt: 37 },

    { type: "heading",   content: "Theorem 11.1.3",                                      showAt: 38 },
    { type: "heading",   content: "Mid-segment of a triangle is parallel to the 3rd side and half its length", showAt: 39 },

    { type: "heading",   content: "Step 1 – Congruent Triangles",                        showAt: 40 },
    { type: "text",      content: "Use SAS",                                             showAt: 41 },
    { type: "text",      content: "∠2 = ∠1",                                             showAt: 42 },
    { type: "text",      content: "AL = LB",                                             showAt: 43 },
    { type: "text",      content: "LN = ML",                                             showAt: 44 },
    { type: "text",      content: "Will feed into Step 2",                               showAt: 45 },

    { type: "heading",   content: "Step 2 – NB ∥ AM and NB = MC",                        showAt: 46 },
    { type: "text",      content: "∠3 = ∠A",                                             showAt: 47 },
    { type: "text",      content: "NB ∥ AM",                                             showAt: 48 },
    { type: "text",      content: "⇒ NB ∥ MC",                                           showAt: 49 },
    { type: "text",      content: "NB = AM and AM = MC ⇒ NB = MC",                       showAt: 50 },

    { type: "heading",   content: "Step 3 – Parallelogram NBMC",                          showAt: 51 },
    { type: "text",      content: "NBMC is a parallelogram",                             showAt: 52 },
    { type: "text",      content: "BC ∥ LM",                                             showAt: 53 },
    { type: "text",      content: "BC = NM",                                             showAt: 54 },
    { type: "text",      content: "LM = ½ NM",                                           showAt: 55 },
    { type: "text",      content: "⇒ LM = ½ BC",                                         showAt: 56 },

    { type: "heading",   content: "Proved",                                              showAt: 57 }
  ]);
}
