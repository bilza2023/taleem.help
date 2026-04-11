import Builder from "taleem-builder";

export default function build() {
  const b = new Builder();

  b.meta({ name: "eq-with-svg" });

  b.background()
    .color("#000000")
    .image("bg.webp")
    .opacity(0);

////////////////////////////////////////////////////
/* ---------------- SINGLE SLIDE ---------------- */

b.at(0)
  .eq()
  .eqHeading("Understanding Motion", 0)
  .eqSpImage("/svg-icons.svg")
  .eqSpText("We build motion step by step.")
  .eqSpText("From rest to movement.")

  .eqMath("Object at rest", 2)
  .eqSpImage("/eqsvg-eq-svg.svg")
  .eqSpText("No change in position.")
  .eqSpText("Velocity is zero.")

  .eqMath("Object starts moving", 4)
  .eqSpImage("/eqsvg-distance-formula.svg")
  .eqSpText("Position begins to change.")
  .eqSpText("Motion starts here.")

  .eqMath("Speed = distance / time", 6)
  .eqSpImage("/eqsvg-distance-formula.svg")
  .eqSpText("Speed tells how fast.")
  .eqSpText("Distance covered per time.")

  .eqMath("More speed → more distance", 8)
  .eqSpImage("/eqsvg-distance-formula.svg")
  .eqSpText("Faster means more distance.")
  .eqSpText("In same time interval.")

  .eqMath("Velocity = speed + direction", 10)
  .eqSpImage("/eqsvg-velocity.svg")
  .eqSpText("Direction makes it velocity.")
  .eqSpText("Now movement has direction.")

  .eqMath("Same speed, different direction", 12)
  .eqSpImage("/eqsvg-velocity.svg")
  .eqSpText("Direction change matters.")
  .eqSpText("Velocity changes even if speed same.")

  .eqMath("Acceleration = change in velocity", 14)
  .eqSpImage("/eqsvg-accelleration.svg")
  .eqSpText("Acceleration measures change.")
  .eqSpText("Δv over time.")

  .eqMath("Speeding up", 16)
  .eqSpImage("/eqsvg-accelleration.svg")
  .eqSpText("Velocity increases.")
  .eqSpText("Positive acceleration.")

  .eqMath("Slowing down", 18)
  .eqSpImage("/eqsvg-decelration.svg")
  .eqSpText("Velocity decreases.")
  .eqSpText("Negative acceleration.");

////////////////////////////////////////////////////
  b.end(22);

  return b.build();
}