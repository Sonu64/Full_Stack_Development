// JavaScript is strictly single-threaded and synchronous, yet it behaves as if it’s doing a million things at once. How? The Event Loop!

// Single Thread in action 
// 1. Open the Google Search page and run a for loop that counts to 1 billion in the console. You will see that the page becomes unresponsive until the loop finishes. This is because JavaScript is single-threaded and the loop is blocking the main thread.

// 2 Now, if we create event listeners for 3 buttons, JS alone can't listen to all those events at the same time. Similarly, if we have 2 setTimeOuts 1 for 5s and other for 6s...if JS simply waited, output would come first after 5s are done...then again it waits for 6 seconds and then that output comes. So practically, it would take 5+6=11 seconds to get both outputs. But in reality, we get the first output after 5 seconds and the second output after 6 seconds. What's the magic behind this as we know that JS can't do multiple things at same time...it can't count for both the timers !!! Who is the WIZARD sitting behind ? Web APIs contain all the functions given by Browser or Node.js... and the Web APIS are given by browser and the browser is multithreaded and it can manage multiple counters at once.... and The Callback Queue and EVENT LOOP comes as the main Hero of our story, they only handle those WebAPIS which are Async in nature !!!!!!!!



// 1. The Confusion: "If it's a Web API, isn't it Async?"
// Not necessarily. The term "Web API" just means "tools provided by the environment (browser) that are not part of the core JavaScript language."

// Async Web APIs: setTimeout, fetch, promises. These are sent to the "side office" and handled via the Callback Queue.

// Sync Web APIs: console.log, alert(), localStorage.getItem(). These are provided by the browser, but they execute immediately on the Call Stack. They "block" the next line of code until they finish. So, while they are Web APIs, they are not asynchronous. They run synchronously on the main thread. The Event Loop only manages the asynchronous tasks that are offloaded to the Web APIs and then pushed to the Callback Queue. Synchronous Web API calls are executed directly on the Call Stack and do not involve the Event Loop.







// the individual timers are handled by the browser's Web APIs, registering them and counting down independently. 

// 1. Why Single-Threaded?
// JavaScript was designed to be a simple scripting language for browsers. If it were multi-threaded, two different threads could try to change the same HTML element (the DOM) at the same time, leading to massive conflicts and crashes. To keep things safe and predictable, JS has one Call Stack.

// 2. The "Synchronous" Reality
// By default, JS executes code line-by-line. If Line 2 is a heavy calculation, Line 3 must wait. This is "blocking" behavior. So by default JS is blocking and synchronous.

// 3. The "Asynchronous" Illusion
// To avoid blocking, JS uses the Event Loop to handle asynchronous tasks like API calls, timers, or user interactions. When you call setTimeout or fetch data from an API, JS offloads that work to the browser's Web APIs. Once the task is done, it pushes a callback function onto the Callback Queue. The Event Loop continuously checks if the Call Stack is empty and if there are any tasks in the Callback Queue. If the stack is empty, it moves the next task from the queue to the stack for execution.

// 4. Why the Callback Queue must wait for the Call Stack to be empty?
// This ensures that the current code finishes executing before any new code runs. It prevents conflicts and keeps the execution predictable. If the Event Loop allowed callbacks to run immediately, it could lead to race conditions and unpredictable nature.

console.log("Start");
setTimeout(() => {
    console.log("This is from setTimeout, it runs after 4 seconds. I was pushed to Web API and then to Callback Queue, and finally executed when Call Stack was empty ! While I could run early but I have to wait for the Call Stack to be empty, that's how the Event Loop works ! This prevents unexpected behavior and keeps the execution predictable.");
}, 4000);
console.log("End");