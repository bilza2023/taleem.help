# Taleem Action Runner

## Overview

The Taleem Action Runner is a lightweight, time-based rendering engine.

Its responsibility is simple:

Given a point in time, render the user interface so that it exactly matches the state defined for that moment.

The runner performs no animations, stores no history, and makes no decisions.

---

# Philosophy

The Action Runner is built around a single principle:

> State is the truth.

At every moment in time, the complete state of the interface is already known.

The runner simply applies that state to the document.

---

# Motivation

Most animation systems work by recording changes.

Elements are added, removed, moved, animated, and updated over time.

This approach introduces complexity, hidden state, and dependencies on previous frames.

The Taleem Action Runner takes a different approach.

Instead of describing how the interface should change, it describes how the interface should look at a specific moment.

---

# Declarative Rendering

The runner does not execute animation commands.

It renders state.

For any given time `t`:

```
time
    ↓
state
    ↓
CSS classes
    ↓
DOM
```

The same input always produces the same output.

---

# Stateless Execution

The runner has no memory.

It never asks:

- What happened previously?
- Which animation is currently running?
- What should happen next?

It only asks:

> What is the state at this moment?

This makes rendering completely deterministic.

---

# Separation of Responsibilities

The Action Runner intentionally contains almost no intelligence.

Complexity belongs elsewhere.

- Compilers generate states.
- Editors generate data.
- AI may generate timelines.
- Validation tools verify correctness.

The runner simply renders the supplied state.

---

# Time-Based State

Each point in time describes the complete visual state of the interface.

Effects such as visibility, focus, dimming, highlighting, correctness, or future visual styles are represented as state rather than procedural instructions.

This makes every moment independent of every other moment.

---

# Benefits

The Action Runner provides several important advantages.

- Deterministic rendering.
- No hidden state.
- No side effects.
- Easy debugging.
- Direct timeline scrubbing.
- Simple implementation.
- Predictable behaviour.
- Compiler-friendly architecture.

---

# Beyond Taleem

Although developed for educational presentations, the Action Runner is intentionally independent of the Taleem ecosystem.

Any system capable of producing its state format can use the runner.

Future applications may include:

- Educational software
- Interactive tutorials
- Data visualizations
- Simulations
- User interface walkthroughs
- Timeline-driven applications

The runner makes no assumptions about the source of the data.

---

# Design Principle
Visual motion should never compete with learning. Motion is used only to introduce a new state or redirect the learner's attention. Once that purpose has been served, the interface returns to a stable, motionless state.

A Taleem lesson is a sequence of stable educational states connected by brief attention transitions.


The complexity of a system should exist in the compiler, not the renderer.

The renderer should remain small, predictable, and stable.

As new tools generate richer state descriptions, the runner itself should require little or no modification.

---

# Summary

The Taleem Action Runner is a declarative, time-based rendering engine.

Rather than executing animations, it renders complete interface states for any point in time.

By separating state generation from state rendering, it provides a simple, deterministic foundation upon which many different applications can be built.