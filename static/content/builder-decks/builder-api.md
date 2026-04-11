
# 📘 taleem-builder API

This is a **copy-paste API reference**.

All examples are valid and produce schema-compliant decks.

---

## 🧠 Basic Structure

```js
import Builder from "taleem-builder";

const b = new Builder();

b.meta({ name: "My Deck" });

b.at(0).titleAndSubtitle()
  .title("Hello", 0)
  .subtitle("World", 2);

b.end(10);

const deck = b.build();
````

---

# 🟢 Basic Slides

## titleAndSubtitle

```js
b.at(0)
  .titleAndSubtitle()
  .title("Taleem Slides", 0)
  .subtitle("A calm, structured way to present ideas", 3);
```

---

## titleAndPara

```js
b.at(10)
  .titleAndPara()
  .title("What is Taleem Slides?", 10)
  .para("Structured explanation text...", 13);
```

---

## bulletList

```js
b.at(20)
  .bulletList()
  .bullet("Point 1", 20)
  .bullet("Point 2", 22)
  .bullet("Point 3", 24);
```

---

## twoColumnText

```js
b.at(30)
  .twoColumnText()
  .leftText("Left content", 30)
  .rightText("Right content", 34);
```

---

# 🟡 Image Slides

## imageSlide

```js
b.at(40)
  .imageSlide()
  .image("image.png", 40);
```

---

## imageWithTitle

```js
b.at(50)
  .imageWithTitle()
  .title("Visual Support Matters", 50)
  .image("image.png", 53);
```

---

## imageWithCaption

```js
b.at(60)
  .imageWithCaption()
  .image("image.png", 60)
  .caption("Images help anchor understanding", 63);
```

---

## imageLeftBulletsRight

```js
b.at(70)
  .imageLeftBulletsRight()
  .image("image.png", 70)
  .bullet("Point 1", 72)
  .bullet("Point 2", 74);
```

---

## imageRightBulletsLeft

```js
b.at(80)
  .imageRightBulletsLeft()
  .image("image.png", 80)
  .bullet("Point 1", 82)
  .bullet("Point 2", 84);
```

---

# 🔵 Data Slides

## table

```js
b.at(90)
  .table()
  .row("A , B", 90)
  .row("1 , 2", 92);
```

---

## barChart

```js
b.at(100)
  .barChart()
  .bar("Clarity", 6, 100)
  .bar("Structure", 5, 102);
```

---

## progressbar

```js
b.at(110)
  .progressbar()
  .progress("Lesson Progress", 60, 110);
```

---

# 🟣 Concept Slides

## quoteSlide

```js
b.at(120)
  .quoteSlide()
  .quote("Clarity makes learning easier for everyone.", 120)
  .author("— Taleem", 123);
```

---

## keyIdeasSlide

```js
b.at(130)
  .keyIdeasSlide()
  .card("Focus", "🧠", 130)
  .card("Clarity", "📘", 132)
  .card("Pace", "⏱️", 134)
  .card("Understanding", "🎯", 136);
```

---

## focusList

```js
b.at(160)
  .focusList()
  .heading("Steps", 160)
  .bullet("Step 1", 162)
  .bullet("Step 2", 164);
```

---

# 🔴 Advanced Slides

## eq

```js
b.at(140)
  .eq()
  .eqHeading("Structured Explanation", 140)
  .eqSpText("Intro")
  .eqSpImage("/img.png")

  .eqMath("a + b", 143)
  .eqSpText("Step");
```

---

## fillImage

```js
b.at(150)
  .fillImage()
  .image("image.png", 150);
```

---

## imageStrip

```js
b.at(170)
  .imageStrip()
  .image("a.png", 170)
  .image("b.png", 172);
```

---

## imageGrid

```js
b.at(180)
  .imageGrid()
  .image("a.png", 180)
  .image("b.png", 182);
```

---

## textGrid

```js
b.at(200)
  .textGrid()
  .text("Item 1", 200)
  .text("Item 2", 202);
```

---

## skeleton

```js
b.at(190)
  .skeleton()
  .title("Topic", 190)
  .image("image.png", 192)
  .para("Explanation", 194);
```

---

# 🧩 Meta & Background

## meta

```js
b.meta({
  name: "My Deck"
});
```

---

## background

```js
b.background()
  .color("#111111")
  .image(null)
  .opacity(0.3);
```

---

# ⏱ Timeline Rules

* Use absolute time (seconds)
* Slides are continuous
* No overlaps
* Final `.end()` is required

```js
b.end(210);
```

---

# 🔒 Validation

All decks are validated automatically:

```js
const deck = b.build(); // throws if invalid
```

---

# ✅ Summary

* Copy → paste → works
* All examples are valid
* Output is schema-enforced
* Builder guarantees correctness
