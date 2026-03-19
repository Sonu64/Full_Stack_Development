import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MyName from './MyName.jsx'
import React from 'react'

const renderedString = "This is a Rendered String !";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me to Visit Google !",
  
};

const actualReactElement = React.createElement(
  // tagname goes first
  "a",
  // then goes the props object
  { href: "https://google.com", target: "_blank", style: { color: "red" } },
  // Direct text to be displayed goes next
  "Click Me to Visit Google !",
  renderedString,
);


createRoot(document.getElementById("root")).render(
  // After all App is a function, so they can be called !
  // Can we put React Element here ? After all we are saving a step of the bundler by directly passinng the tree-like struct.
  // reactElement But this gives error, and does not work !
  // this is because in reactElement we created the object according to our own naming conventions, this will not be allowed by react !! 
  
  // To create an Element by our own Tree-like Structure, we have to use React.createElement and follow the object key naming conventions used by react !
  // Now we can put the actualReactElement directly here ! as it follows the object naming convention used actually by react, achieved by React.createElement
  actualReactElement
);
