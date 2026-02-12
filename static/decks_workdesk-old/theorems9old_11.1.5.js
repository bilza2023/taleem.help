export function defineDeck(b) {
  b.addDetails({
    name: "theorem_11_1_5",
    description: "Parallel Line Segment in Triangle – DE ∥ BC",
    tags: ["theorem", "geometry", "class9"],
    status: "draft"
  });

  // 🔹 Slide 1 — SVG Pointer
  b.s.svgPointer(20, [
    { type: "image", content: "/images/theorems9old_11.1.5_pointer.svg" },

    { type: "arrow", x: 160, y: 110, showAt: 2, duration: 10, label: "DE" },
    { type: "arrow", x: 190, y: 140, showAt: 7, duration: 10, label: "BC" },
    { type: "arrow", x: 150, y: 130, showAt: 12, duration: 10, label: "AD" }
  ]);


  b.s.titleAndPara(40, [
    { name: "title",     content: "Super-Important Idea", showAt: 0 },
    { name: "paragraph", content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus nunc ac augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.


      `, showAt: 1 }
  ]);
  


}
