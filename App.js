import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },[
        React.createElement("div",{ id: "child", key: "child1" },[
        React.createElement("h1", {key: "1"}, "This is Namaste React"),
        React.createElement("h1", {key: "2"}, "By Ankita"),
    ]),
     React.createElement("div",{ id: "child2", key: "child2" },[
        React.createElement("h1", {key: "1"}, "I'm an h1 tag"),
        React.createElement("h1", {key: "2"}, "I'm an h2 tag"),
    ]),

]);



const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello World from React!"
);

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);