
# taleem-http

A tiny HTTP communication framework for Taleem applications.

`taleem-http` provides a simple, method-based communication layer between a
frontend and a server. It is intentionally small and does not attempt to
replace Express, GraphQL, tRPC, or a general-purpose server framework.

The goal is to remove repetitive HTTP wiring while keeping the application
architecture explicit.

---

## Core Idea

An application declares its modules once:

```js
const modules = [
	"course",
	"library",
	"image",
	"svg"
];
````

`taleem-http` uses this module list to create the communication surface.

```text
modules
   ↓
TaleemHttp
   ├── FrontEnd
   └── BackEnd
```

The frontend and backend therefore share only one structural contract:

**the module names.**

HTTP methods are already standardized:

```text
GET
POST
PUT
PATCH
DELETE
```

`taleem-http` does not define application-specific method names or data
schemas.

---

# FrontEnd

The frontend API is generated automatically from the module list.

For:

```js
["course", "library"]
```

the frontend provides:

```js
frontend.course.get(data);
frontend.course.post(data);
frontend.course.put(data);
frontend.course.patch(data);
frontend.course.delete(data);

frontend.library.get(data);
frontend.library.post(data);
frontend.library.put(data);
frontend.library.patch(data);
frontend.library.delete(data);
```

The frontend does not know about server modules, database code, or handlers.

A call such as:

```js
frontend.course.get("fbise9math");
```

is converted into an HTTP request to the application's single dispatch
endpoint.

The frontend transport is handled internally by `taleem-http`.

---

# Server

The server receives the HTTP request and converts it into a simple command:

```js
{
	method,
	module,
	data
}
```

For example:

```js
{
	method: "GET",
	module: "course",
	data: "fbise9math"
}
```

The server then dispatches the command to the registered backend handler.

Conceptually:

```text
HTTP request
     ↓
server request()
     ↓
module
     ↓
HTTP method
     ↓
Backend handler
     ↓
result
```

---

# Backend

The Backend is generated from the same module list.

Initially, modules exist even if no implementation has been registered.

Application code then connects real implementations:

```js
backend.addRoute("course", "get", course.getCourse);

backend.addRoute("course", "list", course.listCourses);

backend.addRoute("library", "get", library.getLibrary);

backend.addRoute("library", "list", library.listLibrary);
```

The framework is responsible for dispatching.

The application is responsible for implementation.

---

# Routes

There are three types of backend routes.

## Normal Route

A normal route uses a module and an HTTP method:

```js
backend.addRoute("course", "get", course.getCourse);
backend.addRoute("course", "list", course.listCourses);
```

The HTTP method is the operation.

---

## Named Route

A named route belongs to a module but uses an application-specific method name:

```js
backend.addNamedRoute(
	"course",
	"getMyCourses",
	course.getMyCourses
);
```

Named routes are for operations that do not naturally map to the normal
HTTP-method surface.

---

## Special Route

A special route does not belong to a module.

For example:

```js
backend.addSpecialRoute("login", login);
```

Special routes are intended for standalone operations such as login or
other application-level endpoints.

---

# Hooks

`taleem-http` deliberately does not implement an Express-style middleware
pipeline.

Hooks are simply functions executed before the main handler.

There are two levels:

```js
http.addBeforeEach(fn);
```

Runs before every API request.

```js
http.addBeforeModule("course", fn);
```

Runs before every request belonging to the `course` module.

The execution model is intentionally shallow:

```text
request
   ↓
beforeEach
   ↓
beforeModule
   ↓
handler
   ↓
result
```

There is currently no post-hook system.

---

# Authentication

`taleem-http` does not define an authentication system.

The framework can expose request authentication information, such as a
cookie/JWT, but the meaning and validation of that information belongs to
the application.

For example, an application may use:

```js
authenticate()
requireAdmin()
requireSubscription()
```

inside its own server methods or hooks.

The framework does not know what authentication, authorization,
subscription, or admin access means.

---

# Data

`taleem-http` deliberately does not define application data schemas.

The framework transports:

```js
data
```

without interpreting its meaning.

For example:

```js
frontend.course.get("fbise9math");
```

may send a string.

Another method may receive:

```js
frontend.library.list({
	course: "fbise9math",
	type: "ARTICLE"
});
```

The individual server method is responsible for knowing what its data
should look like.

Validation belongs to the application or its existing utilities.

---

# Application Structure

A Taleem application using the framework may look like:

```text
src/lib/
│
├── taleem-http/
│   └── ... framework ...
│
├── http/
│   ├── modules.json
│   └── index.js
│
└── server/
    ├── backend.js
    ├── server.js
    ├── course.js
    ├── library.js
    └── ...
```

The application creates one `TaleemHttp` instance:

```js
const http = new TaleemHttp(modules);
```

and exposes its generated FrontEnd to application pages.

The server obtains the Backend from the same instance and registers the
real implementations.

---

# Design Philosophy

`taleem-http` intentionally does NOT try to become:

* Express
* GraphQL
* tRPC
* a database layer
* an authentication framework
* a validation framework
* a business-logic framework

Its job is much smaller:

```text
Frontend method
      ↓
HTTP
      ↓
server dispatcher
      ↓
Backend method
      ↓
result
```

The framework should remain predictable, shallow, and easy to understand.

The application owns its business logic.

`taleem-http` owns the communication wiring.

---

# Current Status

This is a draft design.

The basic FrontEnd → HTTP → server → Backend pipeline has been proven in
Taleem Studio.

The framework is currently being developed inside Taleem Studio first.
Once the API has been exercised by real Taleem application code, the
framework may be extracted into a reusable package for other Taleem
applications.

The goal is to stabilize the design before extraction.

```

I think this is the right **first README**: it documents the architecture without prematurely freezing implementation details. The current FrontEnd generator already reflects the generated HTTP-method surface described above. :contentReference[oaicite:0]{index=0} The current `TaleemHttp` class also captures the route/hook/backend concepts we're developing. :contentReference[oaicite:1]{index=1}
```
