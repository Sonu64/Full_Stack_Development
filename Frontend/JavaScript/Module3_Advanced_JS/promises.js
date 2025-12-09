const myPromise = new Promise((resolve, reject) => {
  // That part of code which takes time to execute completely
  setTimeout(() => {
    let myNum = Math.ceil(Math.random() * 20);
    if (myNum >= 10) resolve("Promise Resolved with myNum = " + myNum);
    else reject("Promise Rejected with myNum = " + myNum);
  }, 3000);
});

// Standalone Promise assignment, pr is directly assigned to a Promise Object
const pr = myPromise;

pr.then((valuePassedOnResolve) => {
  console.log(valuePassedOnResolve);
}).catch((valuePassedOnReject) => {
  console.log(valuePassedOnReject);
});

// Functions returning Promises
const someAsyncTask = (username) => {
  return new Promise((resolve, reject) => {
    // That part of code which takes time to execute completely
    setTimeout(() => {
      if (username === "Sonu")
        resolve(
          JSON.stringify({ username: "Sonu", age: 22, email: "sonu@qmail.in" })
        );
      else {
        reject(
          JSON.stringify({
            error: "Unable to fetch User Data with username as " + username,
          })
        );
      }
    }, 3000);
  });
};

const userData = someAsyncTask("Sonu")
  .then((data) => {
    console.log(userData);
    console.log("Successfuly fetched User Data !");
    console.log(data);
    console.log(userData);
  })
  .catch((err) => {
    console.log(userData);
    console.log("Failed to get User Data");
    console.log(err);
  });

console.log(userData);
