let myDecorator = function (originalFunction) {
  let callHistory = [];

  return function (...args) {
    // convert arguments to string for comparison
    let argsString = args.join(",");

    // check if this combination of arguments was already used
    let wasUsedBefore = callHistory.some((prevArgs) => prevArgs === argsString);

    if (wasUsedBefore) {
      console.log(`arguments already used: ${argsString}`);
    }

    // add this call to history
    callHistory.push(argsString);

    // call the original function
    return originalFunction(...args);
  };
};

//! TEST CASES, DO NOT MODIFY
let sum = function (...args) {
  let retVal = 0;
  for (let arg of args) {
    retVal += arg;
  }
  return retVal;
};
let dfn = myDecorator(sum);
dfn(2, 3, 4);
dfn(4, 5);
dfn(2, 3, 4); // -> arguments already used: 2,3,4
dfn(4, 5); // -> arguments already used: 4,5
