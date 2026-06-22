/*
* <div id ="parent">
*       <div id ="chlid">
*         <h1>I'm an h1 tag</h1>
*          <h2>I'm an h2 tag</h2>
*       </div>
*</div>

*       <div id ="chlid2">
*         <h1>I'm an h1 tag</h1>
*          <h2>I'm an h2 tag</h2>
*       </div>
*</div>

ReactElement(object) => HTML(Browser Understands)
*/

const parent = React.createElement(
    "div",
    { id: "parent" },[
        React.createElement("div",{ id: "child" },[
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h1", {}, "I'm an h2 tag"),
    ]),
     React.createElement("div",{ id: "child2" },[
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h1", {}, "I'm an h2 tag"),
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