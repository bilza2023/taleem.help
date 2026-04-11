import Builder from "taleem-builder";

export default function build() {
  const b = new Builder();

  b.meta({ name: "math-visual-qa" });

  b.background()
    .color("#000000")
    .image("bg.webp")
    .opacity(0);

////////////////////////////////////////////////////
/* ---------------- SINGLE SLIDE ---------------- */

b.at(0)
  .eq()
  .eqHeading("Visual Math Concepts", 0)
  .eqSpImage("triangle-types.svg")
  .eqSpText("Some math ideas are easier to see.")
  .eqSpText("We answer using visuals.")

  /* -------- Q1 -------- */
  .eqMath("How are triangles classified?", 2)
  .eqSpText("Triangles are grouped by sides and angles.")
  .eqSpText("Different shapes show different properties.")
  .eqSpText("We can compare shapes to understand categories.")

  .eqMath("Equilateral • Isosceles • Scalene", 4)
  .eqSpImage("triangle-types.svg")
  .eqSpText("Each type has unique side lengths.")
  .eqSpText("Visual shape helps identify quickly.")

  /* -------- Q2 -------- */
  .eqMath("Why do triangle angles sum to 180°?", 6)
  .eqSpText("A triangle has three interior angles.")
  .eqSpText("They always combine to a straight line.")
  .eqSpText("No matter the shape, the total remains constant.")

  .eqMath("∠A + ∠B + ∠C = 180°", 8)
  .eqSpImage("triangle-angles-180.svg")
  .eqSpText("All angles form a straight line.")
  .eqSpText("Straight angle equals 180°.")

  /* -------- Q3 -------- */
  .eqMath("Why follow BODMAS order?", 10)
  .eqSpText("Expressions have multiple operations.")
  .eqSpText("Order ensures correct calculation.")
  .eqSpText("Without order, answers can become incorrect.")

  .eqMath("B → O → D → M → A → S", 12)
  .eqSpImage("bodmas-order.svg")
  .eqSpText("Solve brackets first.")
  .eqSpText("Then follow operation priority.")

  /* -------- Q4 -------- */
  .eqMath("Why are alternate angles equal?", 14)
  .eqSpText("A transversal crosses parallel lines.")
  .eqSpText("Certain angles match in position.")
  .eqSpText("These positions define equal angle pairs.")

  .eqMath("Alternate angles are equal", 16)
  .eqSpImage("alternate-angles.svg")
  .eqSpText("Parallel lines create equal angles.")
  .eqSpText("Positions determine equality.")

  /* -------- Q5 -------- */
  .eqMath("Why is triangle area = ½ × b × h?", 18)
  .eqSpText("A triangle fits inside a rectangle.")
  .eqSpText("It occupies exactly half the area.")
  .eqSpText("This relationship helps derive the formula.")

  .eqMath("Area = ½ × base × height", 20)
  .eqSpImage("triangle-area.svg")
  .eqSpText("Triangle is half of rectangle.")
  .eqSpText("Base and height define area.");

////////////////////////////////////////////////////
  b.end(24);

  return b.build();
}