const logger = {
  logMsg: "Message to be Logged",
  // ES5 Function, this refers to object, so this.logMsg is accessible
  logMsgES5: function () {
    console.log(this.logMsg);
  },
  // ES6 Function, this refers to 'this' of Parent Element. Parent of logMsgES6 is logger object
  // and its 'this' is Window object
  logMsgES6: () => {
    console.log(this.logMsg); // undefined, coz the Window object has no property called 'logMsg'
  },
};

// Calling the methods from the Object Itself, Independent Calling
logger.logMsgES5(); // Message to be Logged
logger.logMsgES6(); // undefined

// Calling the methods after extracting them in a variable, Standalone calling
const extractedES5Method = logger.logMsgES5;
const extractedES6Method = logger.logMsgES6;
extractedES5Method(); // undefined, coz now we are calling the method from the Window Object
extractedES6Method(); // undefined
