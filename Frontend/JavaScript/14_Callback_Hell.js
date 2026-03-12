// Food ordering application
// Our goal is to Start the Food Preparation only after the Payment is successful.

// Simple Payment System simulator
// Placing order takes 4s
const placeOrder = (callback) => {
    console.log("💰Payment Started");
    setTimeout(()=>{
        console.log("Payment Finished.✅");
        if(callback) {
            callback(); // Call the callback    function after payment is successful
        }
    }, 4000)
    console.log("Payment in Progress...⏲️")
}

// Simple Food preparation simulation
// Preparing food takes 6s.
const prepareFood = (callback) => {
    console.log("🍳Food Preparation Started");
    setTimeout(()=>{
        console.log("Food is ready! 🍽️");
        if (callback) {
            callback(); // Call the callback function after food is prepared
        }
    }, 6000)
}

// Simple Food Packaging simulation -> Packaging is the last step after food is prepared, so it should be called inside the prepareFood function as a callback to ensure it runs only after the food is ready.
// Takes 2s.
const packageFood = (callback) => {
    console.log("📦Food Packaging Started");
    setTimeout(()=>{
        console.log("Food is packaged! 📦");
        if (callback) {
            callback(); // Call the callback function after food is packaged
        }
    }, 2000)
}

// Simple Food pickup simulation -> This is the last step after packaging, so it should be called inside the packageFood function as a callback to ensure it runs only after the food is packaged.
// Takes 3s.
const pickupFood = (callback) => {
    console.log("🚗Food Pickup Started");
    setTimeout(()=>{
        console.log("Food is picked up! 🚗");
        if (callback) {
            callback(); // Call the callback function after food is picked up
        }
    }, 3000)
}

// When your callbacks has callbacks, below is the standard way to write it, though we will see why it's bad. Hardcoding directly without using callbacks is also possible, but extremly risky !

// THE "CALLBACK HELL" (Pyramid of Doom)
// Ensures strict sequential execution in an Async environment
placeOrder(() => {
    prepareFood(() => {
        packageFood(() => {
            pickupFood();
        });
    });
});







// Pass prepareFood as a callback to placeOrder
// placeOrder()
// prepareFood()
// packageFood()
// pickUpOrder()
// ---> This will lead to a problem because the food preparation starts immediately without waiting for the payment to finish. We need to ensure that the food preparation only starts after the payment is successful. To achieve this, we can use callbacks. We need callbacks to maintain the Order of Tasks, which is not possible without callbacks as JS processes inside the Browser ,which is multithreaded in nature !



















// 2. Why placeOrder(prepareFood(packageFood())) fails
// In JavaScript, when you put parentheses () after a function name, you execute it immediately.

// If you write placeOrder(prepareFood()):

// JavaScript executes prepareFood() immediately to see what it returns.

// prepareFood() starts its 6s timer.

// Then it tries to pass the result of prepareFood into placeOrder.

// Result: All timers (Payment, Cooking, Packaging) start at the exact same time. The order is lost.
















// 3. Why Hardcoding inside the function is Risky
// You mentioned "Hardcoding directly without using callbacks." This means writing prepareFood() inside the placeOrder function definition.

// The Risks:

// Zero Reusability: If you have a different flow (e.g., "Guest Checkout" where you don't need a profile update), you can't reuse placeOrder because it is "hard-wired" to always call prepareFood.


