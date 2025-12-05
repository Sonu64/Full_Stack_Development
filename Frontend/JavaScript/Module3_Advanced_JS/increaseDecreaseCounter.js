const counter = () => {
  count = 0;
  return (type) => {
    if (type === "increase") {
      count++;
      console.log(count);
    } else if (type === "decrease") {
      count--;
      console.log(count);
    }
  };
};

const counterFunc = counter();
counterFunc("increase");
counterFunc("increase");
counterFunc("increase");
counterFunc("increase");
counterFunc("decrease");
counterFunc("decrease");
counterFunc("decrease");
