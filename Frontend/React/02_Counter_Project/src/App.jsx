import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let counter = 0;
  const addValue = () => {
    counter++;
    alert(counter) // Update of the variable visible here !
  }
  const reduceValue = () => {
    counter--;
    alert(counter) // Visible here as well !
  }

  // But the UI does not update ! ---> Lots of vanilla JS concepts needed to make this possible, leading to Messy and extrememly lengthy code !
  // We wanted the UI 'react' to Variable updates -> That's why the name "React"  
  // Thus React solves this problem by introducing Hooks !

  return (
    <>
      <h1>Hello, time for hooks !</h1>
      <h3>Counter Value: {counter}</h3> 
      <button onClick={addValue}>Increase</button><br />
      <button onClick={reduceValue}>Decrease</button>
    </>
  )
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