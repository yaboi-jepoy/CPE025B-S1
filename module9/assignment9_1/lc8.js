let getPromiseArray = function (array) {
  return array.map((element) => {
    return new Promise((resolve, reject) => {
      // check if element is a positive integer
      if (Number.isInteger(element) && element > 0) {
        // fulfill the promise after element milliseconds
        setTimeout(() => {
          resolve(element);
        }, element);
      } else {
        // reject immediately if not positive integer
        reject(new Error(`${element} is not a positive integer`));
      }
    });
  });
};

//! TEST CASES, DO NOT MODIFY
let promises1 = getPromiseArray([10, 30, 5, 20, "a"]);
Promise.all(promises1)
  .then((a) => console.log(`all: ${a}`))
  .catch((e) => console.log(`all: ${e.message}`)); // -> all: a is not a positive integer
Promise.any(promises1)
  .then((a) => console.log(`any: ${a}`))
  .catch((e) => console.log(`any: ${e.message}`)); // -> any: 5
