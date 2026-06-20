# Learn ReactJS - From Beginner to Master

A structured, chapter-by-chapter curriculum to learn React from zero to advanced. Each chapter contains:
- **Notes** - Concepts explained simply
- **Programs** - Hands-on code examples
- **Projects** - Mini projects to apply what you learned

---

## How to Use This

1. Go through chapters **in order** - each builds on the previous
2. Read the notes, run the programs, then build the mini project
3. Type the code yourself - don't copy-paste
4. By the end, you'll have both knowledge AND a portfolio of projects

---

## React Architecture at a Glance

```
                          REACT APPLICATION
                     ┌─────────────────────────┐
                     │      Components          │
                     │   (building blocks)       │
                     │   ┌─────┐  ┌─────┐       │
                     │   │ Nav │  │Card │  ...  │
                     │   └─────┘  └─────┘       │
                     └───────────┬───────────────┘
                                 │
                                 ▼
                     ┌─────────────────────────┐
                     │     Virtual DOM          │
                     │   (lightweight copy)      │
                     │   in-memory JS object     │
                     └───────────┬───────────────┘
                                 │  diffing (reconciliation)
                                 ▼
                     ┌─────────────────────────┐
                     │     Real DOM              │
                     │   (what user sees)        │
                     │   only changed parts       │
                     │   get updated              │
                     └─────────────────────────┘
```

---

## Learning Path

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌──────────────┐
│   PHASE 1   │     │   PHASE 2   │     │   PHASE 3   │     │   PHASE 4    │
│ Foundations │────▶│ Intermediate│────▶│  Advanced   │────▶│  Production  │
│             │     │             │     │             │     │   Ready       │
│ Ch 1 - 6    │     │ Ch 7 - 12   │     │ Ch 13 - 17  │     │ Ch 18 - 21    │
└─────────────┘     └─────────────┘     └─────────────┘     └──────────────┘
      │                    │                    │                    │
      ▼                    ▼                    ▼                    ▼
  JS Basics +         Hooks, Lists,       Router, Forms,          TypeScript,
  JSX + State         Context, useReducer  Zustand, Testing       Next.js, Apps
```

---

## The Complete Roadmap

### Phase 1: Foundations

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 1 | **JavaScript Refresher** | let/const, arrow functions, template literals, destructuring, spread/rest, map/filter/reduce, promises, async/await, modules |
| 2 | **Hello React** | What is React, CDN setup, React.createElement, ReactDOM.createRoot, Virtual DOM concept |
| 3 | **JSX Deep Dive** | JSX syntax, expressions in JSX, JSX vs createElement, attributes, styling, fragments |
| 4 | **Components & Props** | Functional components, component composition, props, prop drilling, children prop |
| 5 | **State & useState** | useState hook, state vs props, state updates, immutability, lifting state up |
| 6 | **Event Handling** | onClick, onSubmit, synthetic events, form handling, controlled components |

### Phase 2: Intermediate

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 7 | **Conditional Rendering & Lists** | if/else, ternary, &&, map, filter, keys |
| 8 | **useEffect & Side Effects** | useEffect, dependency array, cleanup, data fetching, loading/error states |
| 9 | **useRef & DOM** | useRef, forwardRef, DOM manipulation, storing mutable values |
| 10 | **Context API** | createContext, useContext, when to use context, avoiding prop drilling |
| 11 | **Custom Hooks** | Building reusable hooks, hook composition, useLocalStorage, useFetch |
| 12 | **useReducer** | useReducer for complex state, action types, reducer pattern, dispatch |

### Phase 3: Advanced

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 13 | **React Router** | react-router-dom v6, BrowserRouter, Routes, Route, Link, NavLink, useParams, nested routes, lazy loading routes |
| 14 | **Forms & Validation** | Controlled inputs, form libraries (react-hook-form), validation (zod/yup), form state |
| 15 | **Performance** | memo, useMemo, useCallback, React.memo, code splitting, Suspense, React.lazy |
| 16 | **State Management (Zustand)** | Zustand store, create, subscribe, persist middleware, devtools |
| 17 | **Testing** | Vitest, React Testing Library, unit tests, integration tests, mocking |

### Phase 4: Production-Ready

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 18 | **TypeScript with React** | TS basics, typing props, typing hooks, generics, best practices |
| 19 | **Next.js (App Router)** | SSR, SSG, file-based routing, layouts, server components, API routes |
| 20 | **Advanced Patterns** | Error boundaries, portals, HOCs, render props, compound components, composition patterns |
| 21 | **Full-Stack Project** | Capstone: build a complete real-world app (auth, database, API, deployment) |

---

## How Components Compose

```
                          App
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
         Header           Main          Footer
    ┌──────┼──────┐   ┌────┼────┐   ┌────┼────┐
    ▼      ▼      ▼   ▼    ▼    ▼   ▼    ▼    ▼
   Logo   Nav   Theme  Card Card Card Copy Social Links
                         │    │    │
                         ▼    ▼    ▼
                    (data flows from parent to child via props)
```

## Data Flow in React

```
        ┌──────────────────────────────────┐
        │          PARENT COMPONENT         │
        │                                  │
        │   const [count, setCount]         │
        │        = useState(0)              │
        │                                  │
        │   props ──────────────────┐       │
        │   (read-only, top-down)   │       │
        └──────────┬────────────────┼───────┘
                   │                │
                   ▼                │
        ┌──────────────┐            │
        │    CHILD      │◄───────────┘
        │   {count}     │   receives props
        │   {setCount}  │   (data + callbacks)
        └──────────────┘
                   │
                   │  calls setCount(newVal)
                   ▼
        ┌──────────────────────┐
        │  STATE UPDATES        │
        │  React re-renders      │
        │  parent + child with   │
        │  new values            │
        └──────────────────────┘
```

---

## Progress Tracker

- [ ] Chapter 1: JavaScript Refresher
- [ ] Chapter 2: Hello React
- [ ] Chapter 3: JSX Deep Dive
- [ ] Chapter 4: Components & Props
- [ ] Chapter 5: State & useState
- [ ] Chapter 6: Event Handling
- [ ] Chapter 7: Conditional Rendering & Lists
- [ ] Chapter 8: useEffect & Side Effects
- [ ] Chapter 9: useRef & DOM
- [ ] Chapter 10: Context API
- [ ] Chapter 11: Custom Hooks
- [ ] Chapter 12: useReducer
- [ ] Chapter 13: React Router
- [ ] Chapter 14: Forms & Validation
- [ ] Chapter 15: Performance
- [ ] Chapter 16: State Management (Zustand)
- [ ] Chapter 17: Testing
- [ ] Chapter 18: TypeScript with React
- [ ] Chapter 19: Next.js (App Router)
- [ ] Chapter 20: Advanced Patterns
- [ ] Chapter 21: Full-Stack Project

---

## Prerequisites

- Basic HTML, CSS, JavaScript knowledge (you have this!)
- Node.js installed (for later chapters)
- A code editor (VS Code recommended)

---

## Tools You'll Need

| Tool | When | Purpose |
|------|------|---------|
| Browser (Chrome) | All chapters | Run & debug React apps |
| VS Code | All chapters | Code editor |
| Node.js | Chapter 8+ | Run React build tools |
| Vite | Chapter 3+ | Modern React project setup |

---

## Your Current Progress

You are here: **Day 1 - Chapter 2 (Hello React) completed**

You've already built:
- Pure JS Hello World (`index.html`)
- React Hello World using CDN (`react.html` + `App.js`)

Next up: **Chapter 3 - JSX Deep Dive**

---

## Resources

- [React Official Docs](https://react.dev)
- [Namaste React (Akshay Saini)](https://namastedev.com/namaste-react) - course you're following
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

Happy Learning! Keep coding every day.
