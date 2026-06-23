import React from "react";
import ReactDOM from "react-dom/client";

// JSX - is not HTML in JS.
// It is HTML/ XML like syntsx.
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => Object => HTMLElement(render)

const jsxHeading = <h1 id="heading">Namste React using JSX</h1>;

// React  Functional Component
const HeadingComponent = () => {
    return <h1> Namste React Functional Component</h1>;
}

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);