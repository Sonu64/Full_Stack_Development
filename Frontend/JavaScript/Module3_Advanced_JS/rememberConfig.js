const createLogger = (logLevel) => {
  return (msg) => {
    if (logLevel === "DEBUG") console.log(`[DEBUG]: ${msg}.`);
    else if (logLevel === "INFO") console.log(`[INFO]: ${msg}.`);
  };
};

const debugLogger = createLogger("DEBUG");
const infoLogger = createLogger("INFO");
// 2 different execution contexts are made of createLogger with diff params.
// Those individual execution contexts are totally seperate from each other
// as well as are their inner returning functions.

debugLogger("Debug Message"); // DEBUG: Debug Message
infoLogger("Some Information"); // INFO: Some Information

// These inner functions remember the config options(logLevel) passed to them and
// does some task conditionally based on that config.
