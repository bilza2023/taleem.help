perfect — here’s your **updated `templates.md` with implementation details + workspace system baked in**
kept it clean, practical, and aligned with your current direction.

---

# 📄 `templates.md`

## 🧠 Purpose

Templates are the core mechanism for generating decks in the Taleem system.

Instead of manually building decks slide-by-slide, we define **fixed structures (templates)** and feed them **structured content (schema)**.

This allows:

* fast production
* consistent output
* reuse across lessons, revision, and discussion

---

# 🎯 Core Concept

```text
Template = Structure + Mapping Rules + Loop
```

* **Structure** → fixed flow (e.g. Q → A)
* **Mapping Rules** → how content becomes slides
* **Loop** → repeat pattern over items

---

# 🔁 System Flow

```text
Workspace (data + images)
        ↓
Template (.js)
        ↓
Deck (JSON)
        ↓
Player
```

Templates are **pure transformers**:

* input → structured data
* output → validated deck

---

# 🆚 Template vs Deck

## Deck

* manually defined
* flexible
* one-off
* mixes structure + content

```text
use when:
- experimenting
- special cases
```

---

## Template

* structure is fixed
* content is injected
* loop-driven
* scalable

```text
use when:
- repeating patterns
- production content
- automation
```

---

# 🧱 Types of Templates

## 1. Loop Templates (most important)

Example: **eq-qa**

```text
for each item:
  render question
  render answer
```

Used for:

* Q/A
* steps
* MCQs
* comparisons

---

## 2. Sequence Templates

Fixed small flows, no heavy loop.

Examples:

* intro slides
* summary slides
* title + few slides

---

## 3. Data-Driven Templates

Simple mapping from array → slides

Example:

```text
images[] → fillImage slides
```

---

# 🔥 Current Template: eq-qa

## Structure

```text
1 slide
10 lines (5 Q + 5 A)

Q:
  eqMath
  2–3 spText

A:
  eqMath
  1 svg
  2 spText
```

---

## Schema Example

```js
{
  title: "Visual Math Concepts",
  items: [
    {
      question: {
        text: "...",
        explain: ["...", "..."]
      },
      answer: {
        text: "...",
        svg: "...",
        explain: ["...", "..."]
      }
    }
  ]
}
```

---

## Mapping

```text
question → eqMath + spText[]
answer   → eqMath + spImage + spText[]
```

---

# ⚙️ Template File Design

Location:

```bash
/templates
```

Each template:

```text
- simple .js file
- uses Builder
- exports function(data, ctx)
```

Responsibilities:

✅ transform data → deck
❌ do NOT fetch data
❌ do NOT contain business logic

---

# 📁 Workspace System (CRITICAL)

## Concept

> **1 workspace = 1 template = 1 deck**

---

## Structure

```bash
/workspace/<deck-name>/
  data.js
  *.svg (optional local images)
```

Rules:

* no subfolders
* no nesting
* everything required is local

---

## Workflow

```text
1. create workspace
2. add data.js
3. add svg files (optional)
4. run template
5. deck generated
```

👉 no searching
👉 no file jumping
👉 fast iteration

---

# 🖼️ Image Resolution Strategy

Templates must resolve images using:

```text
1. workspace/<name>.svg
2. static/content/images/<name>.svg
```

---

## Resolution Logic

```text
if image exists in workspace → use it
else → fallback to global images
```

---

## Benefits

* no copying required
* reuse global assets
* allow local overrides
* zero path confusion

---

# ⚙️ Implementation Details

## Template Function Signature

```js
export default function build(data, ctx) {
  const b = new Builder();

  // ctx.workspacePath
  // ctx.resolveImage(name)

  return b.build();
}
```

---

## Context (`ctx`)

Provided by build script:

```js
{
  workspacePath: "...",
  resolveImage: (name) => finalPath
}
```

---

## Image Resolver (concept)

```text
resolveImage(name):
  if exists in workspace → return workspace path
  else → return global path
```

---

## Build Script Role

The build script:

```text
1. loads workspace/data.js
2. selects template
3. creates ctx (resolver, paths)
4. runs template
5. writes output JSON
```

---

## Output Location

```bash
/static/content/decks/<deck-name>.json
```

---

# 💡 Design Philosophy

## 1. Templates are cheap

* create many
* keep each simple
* avoid “universal template”

---

## 2. Prefer multiple templates over options

❌ bad:

```text
if (mode === "qa") ...
if (mode === "explain") ...
```

✅ good:

```text
eq-qa.js
eq-explain.js
fillImage.js
```

---

## 3. Strict structure = strength

* less thinking
* fewer bugs
* easier generation

---

# 📦 SVG Strategy

## Current (Recommended)

* use filenames
* resolve via workspace/global

---

## Future (Optional)

* embed svg into deck JSON

Benefits:

* self-contained decks
* no path issues
* portable

---

# 💬 Discussion Template (Future Use)

## Idea

Replace comment system with:

```text
Discussion = Generated Deck
```

---

## Flow

```text
student Q/A data
   ↓
discussion template
   ↓
deck (generated on load)
   ↓
player UI
```

---

## Benefits

* structured discussion
* readable
* reusable as content
* no new UI system needed

---

# 🚨 Constraints

* max 5–10 items per deck
* each item = 1 concept
* spText = 2–3 lines max
* svg required for answer

---

# 🚀 Next Steps

1. finalize eq-qa template rules
2. create `/templates/eq-qa.js`
3. create `/workspace/test-qa/`
4. test full flow (data → template → deck)
5. create second template (eq-explain)

---

# 🧠 Final Insight

```text
We don’t build decks anymore.
We feed content into templates.
```

---

this is now your **production blueprint**
you can scale this without changing fundamentals 😄
