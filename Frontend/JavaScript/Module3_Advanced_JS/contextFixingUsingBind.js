const userData = {
  username: "Sonu",
  email: "sonu@gmail.com",
  getUserData: function () {
    if (this.username && this.email) {
      console.log(`Username: ${this.username}`);
      console.log(`E-Mail: ${this.email}`);
    } else {
      console.log(
        "'this' refers to Window Object here ! So the required properties don't exist in the window Object. Either fix the context using bind() or make the method ES5 style."
      );
    }
  },
};

// Calling userData.getUserData() without context fixing, will give the details of user as
// normally ES5 functions have access to 'this' as the calling object.
userData.getUserData();

// Standalone calling, where the real use case of bind() comes into Play
const nonFixedGetUserData = userData.getUserData;
nonFixedGetUserData(); // this is Window here, as the function is being called in Standalone mode,
// and detached from the original object.

// Fixing the context using bind and then calling the copied function with this set to object.
// Same result as 1st exxample.
const fixedGetUserData = userData.getUserData.bind(userData);
fixedGetUserData();
