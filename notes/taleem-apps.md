# Taleem Apps

## 1. Purpose

Taleem Apps are small, reusable interactive visualizations used alongside Taleem presentations and articles.

A typical learning unit may contain:
- 1 presentation/deck for explanation
- 1–2 articles for reference or deeper reading
- 1 or more Apps for experimentation and repeated practice

Examples:
- Move a point on a number line and read its position.
- Change radius and observe circumference and area.
- Change variables in a formula and see the result immediately.
- Change projectile angle and observe the trajectory.
- Move a point and observe slope.

An App does not need to be spectacular. Its value is that a student can use the same small tool many times while learning.

## 2. Core Definition

> **A Taleem App is a small interactive visualization that explores one educational idea through changing state.**

An App is a reusable interactive visualization, not:
- a new slide type
- a replacement for TaleemSlides
- a new UI framework
- a new animation engine
- a new graphics engine

It is simply another Taleem asset type:

```text
Taleem assets
├── Articles
├── Presentations / Players
└── Apps
```

## 3. Golden Deck and TaleemSlides

Apps do not modify the Golden Deck architecture.

Apps do not introduce new Taleem slide types. The existing TaleemSlides system remains stable and continues to support its established 16 slide types.

An App is separate from TaleemSlides.

Presentations explain; Apps provide interactive exploration.

## 4. Canvas Is an Implementation Detail

The asset is called **App**, not Canvas.

Canvas is only the likely rendering technology:

```text
App
  ↓
TaleemCanvasEngine
  ↓
Render Engine
  ↓
PixiJS
  ↓
Canvas / GPU
```

The App contract must not depend on PixiJS.

`TaleemCanvasEngine.js` is a Taleem wrapper around the render engine.

## 5. Render Engine Choice

### PixiJS

PixiJS is the preferred first render engine because it is a mature high-performance 2D renderer, provides high-level graphics capabilities, supports animation/interaction, and is already familiar from previous Taleem work.

### Konva

A strong alternative for interactive 2D Canvas applications, especially diagrams and draggable geometry. Pixi is preferred for potentially richer simulations and continuous visualizations.

### p5.js

Excellent for creative coding, mathematical experiments, and educational sketches. Its natural model is a creative-coding sketch, while Taleem's desired model is a small application runtime.

### D3

Not preferred as the primary renderer because it is strongly oriented toward data visualization and SVG/DOM rather than the Canvas-based visualization model.

### Decision

Use:

```text
TaleemCanvasEngine
        ↓
Render Engine
        ↓
PixiJS
```

Pixi is an implementation choice, not part of the App contract.

## 6. The App Contract

The final App contract is intentionally tiny:

```js
draw(state)
```

That is it.

The App receives current state and draws the visualization corresponding to that state.

```text
STATE
  ↓
draw(state)
  ↓
Render Engine
  ↓
PixiJS
  ↓
Canvas
```

The App does not need to expose events, object models, animation classes, database logic, networking, or MCQ logic.

## 7. State

The App's meaningful persistent information is the state of the visualization.

Example:

```js
state = {
    radius: 5,
    angle: 30,
    speed: 10
}
```

Controls simply modify state. Controls are not part of the core App contract.

A slider, button, keyboard, or other UI can change a state value. The App only cares about the resulting state.

## 8. Rendering Loop

The App uses a render-loop model rather than requiring an event-driven visualization architecture.

Conceptually:

```text
clock
  ↓
current state
  ↓
draw(state)
  ↓
next frame
  ↓
current state
  ↓
draw(state)
  ↓
...
```

For simulations:

```text
clock
  ↓
update state
  ↓
draw(state)
  ↓
next frame
```

Clock/render-loop behavior and user events are separate concepts. An event system is not part of the fundamental App contract.

## 9. No Static App

There is no separate static App category.

Every App is a state-driven visualization. Some state changes only through controls; some changes continuously through a simulation/game loop.

## 10. Apps May Be Unique

An individual App does not need to be reusable.

For example:

> Move a dot along a ray and read its position.

may be a one-off educational App.

That is fine.

The reusable layer is below the App:

```text
App
  ↓
Reusable drawing functions
  ↓
Render Engine
  ↓
PixiJS
```

## 11. Reusable Visual Components Are Functions

Do not create a second object-oriented graphics framework around PixiJS.

Avoid stateful graphics objects such as:

```js
const triangle = new Triangle();
triangle.rotate();
triangle.move();
triangle.scale();
```

Instead use simple drawing functions:

```js
drawLine(...)
drawRay(...)
drawArrow(...)
drawCircle(...)
drawTriangle(...)
drawGrid(...)
drawPoint(...)
```

They simply draw.

They do not own persistent state, lifecycle, animation, or events.

Every frame is a fresh rendering of the current state.

## 12. Do Not Rebuild PixiJS

Pixi already provides rendering, graphics, transforms, positioning, scaling, rotation, layering, interaction, and renderer lifecycle machinery.

Taleem should not recreate those systems.

> **Do not build Pixi again.**

Taleem is building a small educational drawing vocabulary on top of Pixi, not another general-purpose graphics framework.

## 13. Taleem Visual Vocabulary

A likely eventual vocabulary is around 10–20 primitives:

- Grid
- Point
- Line
- Segment
- Ray
- Arrow
- Circle
- Arc
- Triangle
- Rectangle
- Polygon
- Axis
- Curve
- Angle
- Text / Label
- Image

This is not a final list. Primitives should be added when real Apps need them.

A primitive represents something visually meaningful to education, not necessarily one Pixi object.

## 14. Logical Coordinate System

Apps should use a simple logical coordinate system rather than arbitrary physical pixels.

The proposed model is a normalized 100-unit width with a 16:9 logical surface:

```text
width  = 100
height = 56.25
```

Example:

```js
drawCircle(33, 28, 5)
drawLine(10, 45, 90, 45)
```

The Render Engine converts logical coordinates into physical Pixi coordinates.

This keeps Apps resolution-independent and much easier to author.

## 15. Fixed Logical Aspect Ratio

Apps should use a fixed logical aspect ratio: **16:9**.

The logical App world stays constant while the physical render surface is responsive.

Examples:

```text
640 × 360
1280 × 720
1920 × 1080
```

Fullscreen or player resizing changes the physical dimensions, not the App's logical coordinate system.

## 16. Example: Number Line App

A simple App:

> Draw a number line, place a dot according to a value, and mark its position.

Possible state:

```js
{
    min: 0,
    max: 10,
    divisions: 20,
    value: 6.5
}
```

`draw(state)`:
1. Draws the line.
2. Draws tick marks.
3. Draws labels.
4. Calculates the position of `value`.
5. Draws the dot.
6. Marks/displays the value.

The same App can support hundreds of questions:

```text
Question 1 → value = 2.6
Question 2 → value = 7/8
Question 3 → value = -3
Question 4 → value = 4.25
...
Question 100 → value = 17/20
```

These are not 100 Apps. They are 100 states/configurations of one App.

The same App can also be used to generate images for presentations/articles and then be used interactively by students.

## 17. Apps Do Not Need to Be Spectacular

An App can be extremely simple.

For example:

```text
a = 5
b = 8

a² + b² = 89
```

Controls change `a` and `b`; the formula and result update continuously.

A student may use the same App hundreds of times.

Therefore App value is measured by useful repeated interaction, not visual complexity.

## 18. Formula Visualization

An App can display a formula and its variables:

```text
A = πr²
```

The user changes `r` and the App continuously redraws:

```text
r = 5
A = 78.54
```

The App lets the learner manipulate the concept rather than merely watch an explanation.

## 19. Presentation vs Article vs App

A typical learning unit can be:

```text
Presentation
    ↓
explanation

Article
    ↓
reference/deeper explanation

App
    ↓
interactive experimentation
```

Presentation = explain.

Article = read/reference.

App = manipulate/explore.

## 20. MCQ Separation

MCQ is a separate concern.

An MCQ player can use the same TaleemSlides and provide different controls/assessment behavior.

Apps are interactive visualizations, not MCQs.

Do not put MCQ behavior into TaleemSlide or into the App contract.

## 21. App Code vs JSON

An App contains executable behavior because it contains:

```js
draw(state)
```

Therefore the App itself should be JavaScript, not JSON containing drawing instructions.

Do not turn JavaScript drawing behavior into JSON. That would effectively create another programming language that has to be interpreted.

Keep the separation:

```text
Database
    ↓
What App is this?
    ↓
App code
    ↓
How does it draw?
```

The database can store App metadata and identify the App. The executable App code belongs in the application/content code or another deployable App asset system.

Conceptually:

```text
apps/
├── number-line/
│   └── app.js
├── circumference/
│   └── app.js
├── projectile/
│   └── app.js
└── slope/
    └── app.js
```

Exact storage/deployment remains a separate implementation decision.

## 22. Metadata and State Definitions

There may eventually be metadata describing App state:

```json
{
    "radius": {
        "type": "number",
        "default": 5,
        "min": 1,
        "max": 20,
        "step": 1
    }
}
```

This could allow Taleem to generate controls automatically.

Possible controls include sliders, number inputs, increment/decrement buttons, toggles, and selects.

However, this metadata is not part of the fundamental App contract.

The confirmed contract remains:

```js
draw(state)
```

## 23. Render Engine Responsibility

`TaleemCanvasEngine.js` is the Taleem wrapper around the chosen render engine.

Conceptually:

```text
App
  ↓
draw(state)
  ↓
TaleemCanvasEngine
  ↓
Render Engine
  ↓
PixiJS
```

It should handle renderer-specific concerns such as:
- rendering surface
- Pixi initialization
- physical dimensions
- resolution handling
- logical-to-physical coordinate mapping
- render loop
- cleanup

The App should not need to understand these concerns.

## 24. Architectural Boundaries

```text
                         TALEEM
                           │
          ┌────────────────┼────────────────┐
          │                │                │
     Presentations       Articles          Apps
          │                                 │
      Golden Deck                       state
          │                                 │
    TaleemSlides                         draw(state)
          │                                 │
       TaleemUI                    TaleemCanvasEngine
                                            │
                                       Render Engine
                                            │
                                          PixiJS
                                            │
                                         Canvas
```

Inside an App:

```text
               USER
                │
                ↓
             controls
                │
                ↓
              STATE
                │
                ↓
           draw(state)
                │
                ↓
      Taleem drawing functions
          / direct Pixi code
                │
                ↓
         TaleemCanvasEngine
                │
                ↓
              Pixi
                │
                ↓
             Canvas
```

## 25. Explicit Non-Goals

Do not build:
- CanvasSlide
- a second slide system
- a second animation engine
- a second graphics engine
- Pixi-like shape objects
- stateful Triangle/Rectangle/Circle classes
- event-driven rendering as the fundamental architecture
- JSON drawing instructions
- a giant App framework
- dozens of abstractions before real Apps exist
- responsive layout logic inside every App
- MCQ logic inside Apps
- TaleemSlides extensions for Apps

## 26. Final Decisions

1. Apps are a new Taleem asset type.
2. The asset is called `App`, not `Canvas`.
3. Canvas is an implementation detail.
4. Apps are separate from TaleemSlides.
5. TaleemSlides remains unchanged.
6. The existing 16 slide types remain supported.
7. Apps are state-driven visualizations.
8. The fundamental App contract is exactly:
   ```js
   draw(state)
   ```
9. Controls simply modify state.
10. No event system is required by the App contract.
11. Rendering uses a loop/clock model.
12. Apps may be continuously animated.
13. App code is JavaScript because it contains executable behavior.
14. JSON is not used as a drawing-programming language.
15. PixiJS is the preferred initial render engine.
16. `TaleemCanvasEngine.js` wraps the render engine rather than replacing it.
17. The render engine should remain replaceable.
18. Reusable visual primitives are functions, not stateful objects.
19. Primitives contain drawing logic only.
20. Pixi owns generic graphics capabilities such as transforms and rendering.
21. Taleem will maintain a small educational drawing vocabulary, likely around 10–20 primitives.
22. Primitive library growth is driven by real Apps.
23. Apps use a normalized logical coordinate system.
24. The preferred logical aspect ratio is 16:9.
25. Physical canvas resolution is responsive; logical App coordinates remain stable.
26. One App can be reused with hundreds of different states/questions.
27. Apps can be used both to create visual content and as interactive student tools.
28. Apps should be small and focused on one educational idea.
29. An App may be unique/disposable; its reusable primitives are the long-lived assets.
30. The framework should remain deliberately small.

## 27. Guiding Principle

The system can be reduced to:

```js
draw(state)
```

The learner changes state.

The render loop keeps running.

The App draws the current state.

Pixi renders it.

Taleem provides the environment.

Everything else must earn its existence before being added.

> **Do not build another graphics framework.**
>
> **Build a tiny educational visualization layer on top of PixiJS.**
