const getUserInfo = (username, callbackFunc) => {
  // Fetching Data using username, maybe some database calls, etc...
  console.log("Fetching User Info from username...");
  setTimeout(() => {
    // Time to fetch below data is 3 seconds
    userData = {
      _id: 1234,
      username: username,
      age: 22,
      email: "sonu@outlook.com",
    };
    callbackFunc(userData);
  }, 3000);
};

const getAllPosts = (id, callbackFunc) => {
  // Fetching Posts using id, maybe some database calls, etc...
  console.log("Fetching All Posts of User...");
  setTimeout(() => {
    // Time to fetch below data is 3 seconds
    posts = { id: id, posts: ["Post 1", "Post 2", "Post 3", "Post 4"] };
    callbackFunc(posts);
  }, 3000);
};

getUserInfo("Sonu", (userData) => {
  console.log(
    `User Data received from getUserInfo() function: ${userData.username}, ${userData.email}`
  );
  getAllPosts(userData._id, (posts) => {
    console.log(posts);
  });
});
