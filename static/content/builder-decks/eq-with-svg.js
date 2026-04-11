import Builder from "taleem-builder";

export default function build() {
  const b = new Builder();

  b.meta({ name: "eq-with-svg" });

  b.background()
    .color("#000000")
    .image("bg.webp")
    .opacity(0);

    
////////////////////////////////////////////////////
/* ---------------- SLIDE 1 ---------------- */

b.at(0)
  .eq()
  .eqHeading("Understanding Motion", 0)
    .eqSpText("building the idea step by step")
    .eqSpImage("/eqsvg-distance-formulat.svg")

  .eqMath("Object at rest", 2)
    .eqSpText("no movement")
    .eqSpImage("/eqsvg-eq-svg.svg")

  .eqMath("Object starts moving", 4)
    .eqSpText("position changes")
    .eqSpImage("/eqsvg-eq-svg.svg")

  .eqMath("Speed = distance / time", 6)
    .eqSpText("how fast something moves")
    .eqSpImage("/eqsvg-distance-formulat.svg")

  .eqMath("More speed → more distance", 8)
    .eqSpText("in same time")
    .eqSpImage("/eqsvg-distance-formulat.svg")

  .eqMath("Velocity = speed + direction", 10)
    .eqSpText("direction matters")
    .eqSpImage("/eqsvg-velocity.svg");

/* ---------------- SLIDE 2 ---------------- */

b.at(14)
  .eq()
  .eqHeading("Acceleration Concept", 14)
    .eqSpText("motion can change")
    .eqSpImage("/eqsvg-accelleration.svg")

  .eqMath("Same speed, different direction", 16)
    .eqSpText("velocity changes")
    .eqSpImage("/eqsvg-velocity.svg")

  .eqMath("Acceleration = change in velocity", 18)
    .eqSpText("Δv / t")
    .eqSpImage("/eqsvg-accelleration.svg")

  .eqMath("Speeding up", 20)
    .eqSpText("positive acceleration")
    .eqSpImage("/eqsvg-accelleration.svg")

  .eqMath("Slowing down", 22)
    .eqSpText("negative acceleration")
    .eqSpImage("/eqsvg-decelration.svg")

  .eqMath("Motion = speed + direction + change", 24)
    .eqSpText("complete understanding 🎯")
    .eqSpImage("/eqsvg-eq-svg.svg");

////////////////////////////////////////////////////
    b.end(28);

  return b.build();
}



