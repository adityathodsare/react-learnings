import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function CustomAPP() {
  return (
    <div>
      <h1>happy new year </h1>
    </div>
  );
}

function Element0() {
  return <a href="https://www.google.com">click here to visit google </a>;
}

let Element3 = {
  type: "a",
  props: {
    target: "_blank",
    href: "https://google.com",
  },
  children: "click here",
};

// variable
let Element1 = <a href="https://www.google.com">click here to visit google </a>;

// createElement() in react
const ReactElement = () => {
  return React.createElement("a", { href: "https://www.google.com" }, "click");
};

const ReactElement1 = React.createElement(
  "a",
  { href: "https://www.google.com" },
  "click here second time "
);
const name2 = "aditya";
const EvaluatedExpression = React.createElement(
  "a",
  { href: "https://www.google.com" },
  `hello its ${name2} `,
  name2
);
createRoot(document.getElementById("root")).render(
  EvaluatedExpression
  // now we can pass this variable  ReactElement1 alone to skip parsing step
);
