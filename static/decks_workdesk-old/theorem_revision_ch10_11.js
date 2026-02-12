// File: first10TheoremsDeck.js

export function defineDeck(b) {
    b.addDetails({
      name: "first10Theorems",
      description: "Slides for Theorems 10.1–11.5: title+statement, then image",
      tags: ["theorem","geometry","class9"],
      status: "draft",
    });
  
    // Theorem 10.1
    b.s.titleAndPara(20, [
      { name: "title",     content: "Theorem 10.1", showAt: 0 },
      { name: "paragraph", content:
          "If two angles and non-included side of one triangle are congruent to the corresponding angles and non-included side of another triangle, then two triangles are congruent.",
        showAt: 1 },
    ]);
    b.s.imageSlide(40, [
      { name: "image", content: "/images/theorems9old_10.1.1.svg", showAt: 0 }
    ]);
  
    // Theorem 10.2
    b.s.titleAndPara(60, [
      { name: "title",     content: "Theorem 10.2", showAt: 0 },
      { name: "paragraph", content:
          "If two angles of a triangle are congruent, then the sides opposite to them are also congruent.",
        showAt: 1 },
    ]);
    b.s.imageSlide(80, [
      { name: "image", content: "/images/theorems9old_10.1.2.svg", showAt: 0 }
    ]);
  
    // Theorem 10.3
    b.s.titleAndPara(100, [
      { name: "title",     content: "Theorem 10.3", showAt: 0 },
      { name: "paragraph", content:
          "In the correspondence of two triangles, if three sides of one triangle are congruent to the corresponding three sides of the other, the two triangles are congruent.",
        showAt: 1 },
    ]);
    b.s.imageSlide(120, [
      { name: "image", content: "/images/theorems9old_10.1.3.svg", showAt: 0 }
    ]);
  
    // Theorem 10.4
    b.s.titleAndPara(140, [
      { name: "title",     content: "Theorem 10.4", showAt: 0 },
      { name: "paragraph", content:
          "If in the correspondence of two right-angled triangles, the hypotenuse and one side of one are respectively congruent to the hypotenuse and corresponding side of the other, the triangles are congruent.",
        showAt: 1 },
    ]);
    b.s.imageSlide(160, [
      { name: "image", content: "/images/theorems9old_10.1.4.svg", showAt: 0 }
    ]);
  
    // Theorem 11.1
    b.s.titleAndPara(180, [
      { name: "title",     content: "Theorem 11.1", showAt: 0 },
      { name: "paragraph", content:
          "In a parallelogram: (i) Opposite sides are congruent; (ii) Opposite angles are congruent; (iii) Diagonals bisect each other.",
        showAt: 1 },
    ]);
    b.s.imageSlide(200, [
      { name: "image", content: "/images/theorems9old_11.1.1.svg", showAt: 0 }
    ]);
  
    // Theorem 11.2
    b.s.titleAndPara(220, [
      { name: "title",     content: "Theorem 11.2", showAt: 0 },
      { name: "paragraph", content:
          "If two sides of a quadrilateral are congruent and parallel, it is a parallelogram.",
        showAt: 1 },
    ]);
    b.s.imageSlide(240, [
      { name: "image", content: "/images/theorems9old_11.1.2.svg", showAt: 0 }
    ]);
  
    // Theorem 11.3
    b.s.titleAndPara(260, [
      { name: "title",     content: "Theorem 11.3", showAt: 0 },
      { name: "paragraph", content:
          "The line segment joining the midpoints of two sides of a triangle is parallel to the third side and equal to one half of its length.",
        showAt: 1 },
    ]);
    b.s.imageSlide(280, [
      { name: "image", content: "/images/theorems9old_11.1.3.svg", showAt: 0 }
    ]);
  
    // Theorem 11.4
    b.s.titleAndPara(300, [
      { name: "title",     content: "Theorem 11.4", showAt: 0 },
      { name: "paragraph", content:
          "The medians of a triangle are concurrent and their point of concurrency is the point of trisection of each median.",
        showAt: 1 },
    ]);
    b.s.imageSlide(320, [
      { name: "image", content: "/images/theorems9old_11.1.4.svg", showAt: 0 }
    ]);
  
    // Theorem 11.5
    b.s.titleAndPara(340, [
      { name: "title",     content: "Theorem 11.5", showAt: 0 },
      { name: "paragraph", content:
          "If three or more parallel lines make congruent intercepts on a transversal, the lines are parallel to each other.",
        showAt: 1 },
    ]);
    b.s.imageSlide(360, [
      { name: "image", content: "/images/theorems9old_11.1.5.svg", showAt: 0 }
    ]);
  }
  