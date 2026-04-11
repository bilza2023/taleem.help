import Builder from "taleem-builder";

export default function build() {
  const b = new Builder();

  b.meta({ name: "pythagorean-theorem-intro" });

  b.background()
    .color("#111111")
    .image("bg.webp")
    .opacity(0.3);
 
  // SLIDE 1 — TITLE

  b.at(0)
  .titleAndSubtitle()
    .title("Pythagorean Theorem")
    .subtitle("The most famous triangle rule");

    // SLIDE 2 — CORE VISUAL (SVG)

    b.at(5)
    .fillImage()
    .image("pythagorean-theorem.svg", 0);

  // =========================
  // SLIDE 3 — EXPLANATION
  // =========================
  b.at(10)
  .imageLeftBulletsRight()
  .image("pythagorean-theorem.svg", 10)
  .bullet("A right triangle has one 90° angle 📐", 12)
  .bullet("The sides are named a, b, and c", 14)
  .bullet("c is always the longest side (hypotenuse)", 16)
  .bullet("The rule: a² + b² = c²", 18)
  .bullet("This connects lengths to AREA idea 🟦", 20);
 
  b.at(25)
  .fillImage()
  .image("pythagorean-theorem-calculations.svg", 25);



  b.end(40);

  return b.build();
}
