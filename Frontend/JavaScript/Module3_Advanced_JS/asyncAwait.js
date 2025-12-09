const myPromise = (username) => {
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

const myFunc = async (username) => {
  try {
    const data = await myPromise(username);
    console.log("Promise Resolved");
    console.log(data);
  } catch (err) {
    console.log("Promise Rejected !");
    console.log(err);
  }
};

myFunc("Sonu");
