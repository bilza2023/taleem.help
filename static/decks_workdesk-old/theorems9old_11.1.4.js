// File: theorem_11_1_1_deck.js
export  function defineDeck(b) {
  b.addDetails({
    name: "theorem_11_1_4",
    description: "Slide for Theorem 11.1.1",
    tags: ["theorem", "geometry", "class9"],
    status: "draft"
  });

  // Optional: set background if desired
  b.setBackgroundColor("#F5F5F5");
  b.setBackgroundOpacity(0.1);

  // Slide 1: Title Slide with image
  b.s.imageWithTitle(10, [
    { name: "image", content: "/images/theorems9old_11.1.4.svg", showAt: 0 },
    { name: "title", content: "Theorem 11.1.4", showAt: 1 }
  ]);

  // Slide 2: EQ slide with image and title only
  b.s.eq(30, [
    { type: "spImage", content: "/images/theorems9old_11.1.4.svg" },
    { type: "heading", content: "Theorem 11.1.1 — Opposite Sides of Parallelogram" , showAt: 5 }
  ]);
}
