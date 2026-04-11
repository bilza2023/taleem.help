import Builder from "taleem-builder";

export default function build() {
  const b = new Builder();

  b.meta({ name: "skeleton-test" });

  b.background()
    .color("#111111")
    .image(null)
    .opacity(0.3);

    b.at(0)
    .fillImage()
    .image("svg-icons.svg", 0);
  
    b.at(5)
    .fillImage()
    .image("real-numbers.svg", 5);
  
  b.at(10)
    .fillImage()
    .image("rational-numbers.svg", 10);
  
  b.at(20)
    .fillImage()
    .image("decimal-patterns.svg", 20);
  
  b.at(30)
    .fillImage()
    .image("irrational-numbers.svg", 30);
  
  b.at(40)
    .fillImage()
    .image("number-line-irrational.svg", 40);

  b.end(50);

  return b.build();
}
