import Builder from "taleem-builder";

export default function build() {
  const b = new Builder();

  b.meta({ name: "why-study-math" });

  b.background()
    .color("#000000")
    .image(null)
    .opacity(0);

  // Scene 1 (0–10)
  b.at(0)
    .fillImage()
    .image("math-education-01.webp", 0);

  // Scene 2 (10–20)
  b.at(10)
    .fillImage()
    .image("math-education-02.webp", 10);

  // Scene 3 (20–30)
  b.at(20)
    .fillImage()
    .image("math-education-03.webp", 20);

  // Scene 4 (30–40)
  b.at(30)
    .fillImage()
    .image("math-education-04.webp", 30);

  // Scene 5 (40–50)
  b.at(40)
    .fillImage()
    .image("math-education-05.webp", 40);

  b.end(50);

  return b.build();
}