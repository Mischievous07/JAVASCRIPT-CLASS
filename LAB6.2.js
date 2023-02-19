const func1 = () => {
  console.log("One");
};

const func2 = () => {
  console.log("Two");
};

const func3 = () => {
  console.log("Three");
  func1();
  func2();
};

const func4 = () => {
  console.log("Four");
  setTimeout(() => func1(), 1);
  setTimeout(func3, 0);
};

func4();
