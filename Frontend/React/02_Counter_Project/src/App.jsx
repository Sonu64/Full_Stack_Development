import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


// import React from 'react': This is like asking for the Entire Warehouse. You get everything, but it's heavy and you have to access tools like React.useState.

// import { useState } from 'react' - Named Import: This is like asking for a Specific Tool from the shelf. By using the {} (curly braces), you are "destructuring" the package to grab only what you need.

function App() {
  const MAX_VALUE = 20;
  const MIN_VALUE = 0;
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter != MAX_VALUE)
      setCounter(counter + 1); // Now UI updates also visible !
    console.log(counter); // This will still show previous value ! Because until this function is complete, the Re-render does not happen and we are looking at the current Snapshot counter
  }
  const reduceValue = () => {
    if (counter != MIN_VALUE)
      setCounter(counter - 1); // Now UI updates also visible !
    console.log(counter); // This will still show previous value !
  }

  // But the UI does not update ! ---> Lots of vanilla JS concepts needed to make this possible, leading to Messy and extrememly lengthy code !
  // We wanted the UI 'react' to Variable updates -> That's why the name "React"  
  // Thus React solves this problem by introducing Hooks !

  return (
    <>
      <h1>Hello, time for Hooks !</h1>
      <h3>
        Counter Value → <span>{counter}</span>
      </h3>
      <div className="button-group">
        <button onClick={addValue} className="btn-add">
          Increase
        </button>
        <br />
        <button onClick={reduceValue} className="btn-reduce">
          Decrease
        </button>
      </div>

      <section>
        Counter is updating here as well → <span>{counter}</span>
      </section>
      <footer>
        And here → <span>{counter}</span>
      </footer>
    </>
  );
}

export default App



// 1. HTML: A "String" of Code
// In standard HTML, the onclick attribute takes a String.

// When the browser sees <button onclick="reduceValue()">, it essentially evaluates that string using eval() the moment the click happens.

// It needs the () because it's a piece of code to be executed by the browser's global engine.

// 2. React: A "Pointer" to a Function
// React doesn't use the browser's native string-based event system. It uses its own system called Synthetic Events.

// In JSX, onClick (notice the camelCase) takes a JavaScript Variable (a function reference) inside curly braces { }.

// You aren't giving React a "command string"; you are giving it the actual function object.




// So counter does not change actually ??

// Gemini said
// You have hit the most profound "Gotcha" in React. The answer is both yes and no, depending on which "version" of the component you are looking at.

// 🏛️ The "Immutable" Truth
// In React, the counter variable inside a single render never changes. It is a const (even if you labeled it let).

// The Current Snapshot: When React renders your App for the first time, it sets counter = 0. That 0 is "baked into" that version of the function.

// The Update Request: When you call setCounter(counter + 1), you aren't changing the current counter variable. You are sending a message to React: "Hey, next time you run this function, please make the counter 1."

// The New Snapshot: React then calls the entire App function again. In this new execution, it sets counter = 1