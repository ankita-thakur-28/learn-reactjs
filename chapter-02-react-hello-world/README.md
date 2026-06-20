# Chapter 2: Hello React

This chapter covers the absolute fundamentals of React - what it is, how to add it to a page, and how to create elements.

---

## How React Reaches the Browser

```
                          REACT CORE LAYER
                  ┌──────────────────────────────┐
                  │        react (library)        │
                  │    React.createElement()      │
                  │    State, Props, Context      │
                  │    Hooks, Lifecycle            │
                  └──────────────┬───────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────┐
                  │      react-dom (renderer)     │
                  │   ReactDOM.createRoot()       │
                  │   .render()                   │
                  │   Talks to real browser DOM   │
                  └──────────────┬───────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────┐
                  │        Browser DOM            │
                  │   <div id="root">             │
                  │     <h1>Hello React!</h1>     │
                  │   </div>                      │
                  └──────────────────────────────┘
```

---

## 1. What is React?

- A **JavaScript library** for building user interfaces
- Created by Facebook (2013)
- **Declarative** - you describe *what* the UI should look like, React handles *how* to build it
- **Component-based** - UI is composed of reusable pieces
- Uses a **Virtual DOM** for performance

## 2. Vanilla JS vs React

### Side-by-Side Comparison

```
   VANILLA JS (Imperative)                    REACT (Declarative)
   ─────────────────────────                 ─────────────────────
                                           
   You tell browser HOW:                    You tell React WHAT:
                                           
   ┌─────────────────────────┐              ┌─────────────────────────┐
   │ 1. Create element        │              │ Describe desired UI:     │
   │    document.createElement│              │                          │
   │         │                 │              │ <h1>Hello React!</h1>    │
   │         ▼                 │              │                          │
   │ 2. Set content            │              │ That's it! React figures │
   │    heading.innerHTML = .. │              │ out HOW to build it.     │
   │         │                 │              │                          │
   │         ▼                 │              └─────────────────────────┘
   │ 3. Find mount point       │
   │    getElementById("root") │              
   │         │                 │              SAME OUTPUT:
   │         ▼                 │              ┌─────────────────────────┐
   │ 4. Append to DOM          │              │ <div id="root">          │
   │    root.appendChild(...)  │              │   <h1 id="heading">      │
   └─────────────────────────┘              │     Hello World           │
                                              │   </h1>                  │
                                              │ </div>                   │
                                              └─────────────────────────┘
```

### Vanilla JS (what you wrote in `index.html`)
```js
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from JavaScript!";
const root = document.getElementById("root");
root.appendChild(heading);
```
- Imperative - you tell the browser *exactly* what to do, step by step
- Direct DOM manipulation

### React (what you wrote in `App.js`)
```js
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```
- Declarative - you describe the *desired output*
- React manages the DOM for you

## 3. Virtual DOM

```
                     THE RECONCILIATION CYCLE
        ┌─────────────────────────────────────────────────────┐
        │                                                      │
        │   ┌───────────┐      STATE/PROP       ┌───────────┐ │
        │   │  OLD       │       CHANGE          │  NEW       │ │
        │   │  VIRTUAL   │         │             │  VIRTUAL   │ │
        │   │  DOM       │─────────┼────────────▶│  DOM       │ │
        │   │  (tree)    │         │             │  (tree)    │ │
        │   └─────┬──────┘         │             └─────┬──────┘ │
        │         │                │                   │        │
        │         │                │                   │        │
        │         └────────────────┼───────────────────┘        │
        │                          │                            │
        │                          ▼                            │
        │              ┌────────────────────┐                   │
        │              │    DIFFING ALGO    │                   │
        │              │  (Reconciliation)  │                   │
        │              │  Find what changed  │                   │
        │              └────────┬───────────┘                   │
        │                       │                               │
        │                       │  minimal changes only         │
        │                       ▼                               │
        │              ┌────────────────────┐                   │
        │              │    REAL DOM         │                   │
        │              │  ┌──────────────┐   │                   │
        │              │  │ Browser       │   │                   │
        │              │  │ paints only   │   │                   │
        │              │  │ changed parts │   │                   │
        │              │  └──────────────┘   │                   │
        │              └────────────────────┘                   │
        │                                                      │
        └─────────────────────────────────────────────────────┘
```

- React keeps a lightweight copy of the real DOM in memory (Virtual DOM)
- When state changes, React:
  1. Creates a new Virtual DOM tree
  2. Diffs it against the previous one (Reconciliation)
  3. Calculates the minimum DOM updates needed
  4. Updates only those parts in the real DOM
- This makes React very efficient

## 4. How React Gets Added via CDN

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- **react** - core library (createElement, component logic)
- **react-dom** - browser-specific rendering (createRoot, render)

## 5. React.createElement

```js
React.createElement(type, props, ...children)
```

- `type` - HTML tag name ("h1", "div") or React component
- `props` - attributes object `{ id: "heading", className: "title" }`
- `children` - inner content (text, or more createElement calls)

### createElement  Tree

```
React.createElement(                           <div id="parent">
  "div",                                         <div id="child">
  { id: "parent" },        ──────────▶             <h1>I'm an h1 tag</h1>
  React.createElement(                             <h2>I'm an h2 tag</h2>
    "div",                                       </div>
    { id: "child" },                            </div>
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
  )
)

                       Each createElement = one node in the tree
                       ┌─────────────────────────────┐
                       │        div#parent            │
                       │  ┌────────────────────────┐  │
                       │  │      div#child          │  │
                       │  │  ┌─────────┐┌────────┐ │  │
                       │  │  │   h1     ││   h2   │ │  │
                       │  │  │"I'm h1" ││"I'm h2"│ │  │
                       │  │  └─────────┘└────────┘ │  │
                       │  └────────────────────────┘  │
                       └─────────────────────────────┘
```

### Creating nested elements:
```js
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
  )
);
```

---

## Programs (in programs/)

1. `01-nested-elements.html` - Creating nested HTML structure with createElement
2. `02-react-without-jsx.html` - Building a small page layout using only createElement

## Mini Project

Build a **Profile Card** using React.createElement only (no JSX). Display an avatar, name, bio, and social links.

---

## Your Existing Work

These files in the root of this project are part of Chapter 2:

| File | What It Shows |
|------|---------------|
| `index.html` | Vanilla JS approach (Hello World) |
| `react.html` | React CDN setup |
| `App.js` | React.createElement Hello World |

## Key Takeaway

JSX (next chapter) is just syntactic sugar for `React.createElement`. Understanding this makes React less mysterious.
