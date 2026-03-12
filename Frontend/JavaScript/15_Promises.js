// 1. The Need: Why Promises?

/* In your food app, if the placeOrder callback failed (e.g., payment rejected), handling that error across 4 nested levels becomes a nightmare.
we have to use 2 callbacks, one for success and one for failure, and that leads to a lot of nesting and makes the code hard to read and maintain. This is known as "Callback Hell" or "Pyramid of Doom."

Callback Disadvantages: Inversion of control (you trust another function to call yours), poor error handling, and unreadable "Pyramid of Doom."

The Promise Solution: A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It’s like a "receipt" for a task that hasn't finished yet.*/ 






















/* The "Golden Rules" of Promise Chaining 📕
To achieve a clean, sequential flow like your food application needs, follow these three rules:

🔖 Wrap in Functions: This prevents the "Immediate Execution" bug you encountered.

🔖 The return Keyword: Inside a .then(), you must return the next Promise. If you don't return it, the next .then() in the chain won't wait for it—it will run immediately.

🔖 Flat, Not Nested: Avoid putting a .then() inside another .then(). Keep them all at the same indentation level. */


















/*  Revision Summary for Notepad:

➡️ Encapsulation: Always wrap Promise logic in functions for control.
➡️ Flow Control: The return keyword is the "bridge" between two links in the chain. 

➡️Catch-All: A single .catch() handles any failure in the entire pipeline, making it very similar to a try-catch block in Java.

*/





















// 2. Creating a function to Return a Promise - then consuming its different states
let paymentPromise = () => new Promise((resolve, reject) => {
    console.log("--- Payment Started ----"); // Simulate payment processing time
    // Real payment processing logic here (e.g., API call), the process takes 5 seconds, and then we resolve or reject the promise based on the outcome.
    setTimeout(() => {
        let paymentSuccessful = true; // Simulate payment success or failure
        if (paymentSuccessful) {
            resolve({
                status: "Payment Successful ✅",
                transactionId: "TXN123456789",
                amount: 49.99,
                currency: "INR",
                refundPolicy: "No refunds after 24 hours",
                refundNeeded: false,
                timestamp: new Date().toISOString()
            });
        } 
        else {
            reject({
              status: "Payment Failed ❌",
              transactionId: "TXN123456789",
              amount: 49.99,
              currency: "INR",
              refundPolicy: "No refunds after 24 hours",
              refundNeeded: true,
              timestamp: new Date().toISOString(),
            });
        }
}, 5000)
});





// Food prepartion Promise
let foodPreparationPromise = () => new Promise((resolve, reject) => {
    console.log("--- Food Preparation Started ----");
    setTimeout(() => {
        let foodReady = true; // Simulate food preparation outcome
        if (foodReady) {
            resolve({
                status: "Food Ready ✅",
                itemId: "ITEM123456789",
                itemName: "Delicious Burger",
                preparationTime: "10 minutes",
                refundNeeded: false
            });
        } else {
            reject({
                status: "Food Preparation Failed ❌",
                itemId: "ITEM123456789",
                itemName: "Delicious Burger",
                refundNeeded: true
            });
        }
    }, 3000);
});




// Food packaging Promise
let foodPackagingPromise = () => new Promise((resolve, reject) => {
    console.log("--- Food Packaging Started ----");
    setTimeout(() => {
        let packagingDone = true; // Simulate packaging outcome
        if (packagingDone) {
            resolve({
                status: "Food Packaged ✅",
                itemId: "ITEM123456789",
                itemName: "Delicious Burger",
                packagingTime: "5 minutes",
                refundNeeded: false
            });
        } else {
            reject({
                status: "Food Packaging Failed ❌",
                itemId: "ITEM123456789",
                itemName: "Delicious Burger",
                refundNeeded: true
            });
        }
    }, 2000);
});



let foodPickUpPromise = () => new Promise((resolve, reject) => {
    console.log("--- Food Pickup Started ----");
    setTimeout(() => {
        let pickupDone = false; // Simulate pickup outcome
        if (pickupDone) {
            resolve({
                status: "Food Picked Up ✅",
                itemId: "ITEM123456789",
                itemName: "Delicious Burger",
                pickupTime: "2 minutes",
                refundNeeded: false
            });
        } else {
            reject({
                status: "Food Pickup Failed ❌",
                itemId: "ITEM123456789",
                itemName: "Delicious Burger",
                refundNeeded: true
            });
        }
    }, 1000);
});







// We can't do Promise chaining without Functions returning Promises. Promises themselves are just objects that represent the future result of an asynchronous operation. To create a chain of Promises, we need to have functions that return Promises. This allows us to use .then() to handle the resolved value and return the next Promise in the chain. If we don't return a Promise from these functions, we won't be able to continue the chain properly, and it will break the flow of asynchronous operations.





// Consuming the Promises
// 2. THE CHAIN (The Flattened Way)
paymentPromise()
    .then((msg) => {
        console.log(msg);
        return foodPreparationPromise(); // RETURN the next promise to keep the chain alive
    })
    .then((msg) => {
        console.log(msg);
        return foodPackagingPromise(); // RETURN the next promise
    })
    .then((msg) => {
        console.log(msg);
        return foodPickUpPromise(); // RETURN the next promise
    })
    .then((msg) => {
        console.log(msg);
        console.log("✅ Order Completed!!!");
    })
    .catch((error) => {
        // One catch at the bottom handles errors from ANY step above
        console.error("❌ Order Stopped:");
        console.log(error);
    });



