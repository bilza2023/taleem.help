# Taleem Server

## Overview

Taleem Server is the core backend of the Taleem ecosystem. It is a content distribution server designed primarily for education, while remaining independent of any specific content format.

Its purpose is to store, organize, secure, and distribute educational content to client applications such as the Taleem Player, article reader, or future applications.

The server does not render content. It only manages it.

---

# Philosophy

Educational content changes over time, but the responsibilities of a server should remain stable.

The Taleem Server is responsible for identity, permissions, organization, and content distribution. Client applications are responsible for presenting and interacting with that content.

---

# Core Concepts

## Course

A Course is the central entity of the system.

Every educational resource belongs to a course. Courses provide organization, access control, and subscription management.

A course may contain lessons, articles, presentations, documents, or other educational resources.

---

## Library Item

A Library Item represents a single piece of content.

Examples include:

- Article
- Taleem Presentation
- HTML page
- Markdown document
- JSON resource
- Audio
- Images
- Future content types

The server stores metadata about the item while remaining independent of its internal format.

---

## Lesson

A Lesson links educational content to a course.

A lesson may reference one or more library items and defines the learning structure of a course.

---

# Course Types

The server currently supports three access models.

## OPEN

Content is publicly accessible without authentication.

## MEMBERS

Users must be logged in before accessing the content.

## SUBSCRIPTION

Users must have an active subscription to access the content.

These three access levels cover the vast majority of educational publishing requirements while keeping the authorization model simple.

---

# Current Content Types

Version 1 officially supports two primary educational content types.

## Articles

HTML-based educational documents intended for reading.

## Taleem Presentations

Interactive educational presentations played using the Taleem Player.

The server is intentionally designed so additional content types can be introduced in the future without changing the core architecture.

---

# Body and Source

A Library Item may store its content in one of two ways.

## Body

The content is stored directly inside the database.

This is suitable for smaller resources such as text, HTML, or Markdown.

## Source

The content is stored externally while the Library Item contains a reference to it.

This approach is used for larger or file-based resources such as Taleem presentation decks and other assets.

Both approaches appear identical to the rest of the system.

---

# Responsibilities

The Taleem Server is responsible for:

- User authentication
- Authorization
- Course management
- Library management
- Lesson organization
- Subscription management
- Educational communication
- Content distribution

Rendering and playback are intentionally delegated to client applications.

---

# Design Principles

The architecture of the Taleem Server is intentionally conservative.

Core concepts such as Courses, Lessons, Library Items, Authentication, and Authorization are expected to remain stable over the long term.

New features should extend the system without requiring changes to these foundations.

---

# Version 1

This document describes the philosophy and architecture of Taleem Server Version 1.

Future versions may introduce new content types and capabilities, but the core concepts described here are intended to remain stable and backwards compatible.

---

# Summary

The Taleem Server is a format-agnostic educational content distribution server.

Its responsibility is not to interpret educational content, but to organize it, secure it, and deliver it to the appropriate client application.