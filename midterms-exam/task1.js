function sumDeepStrictNumbers(arr) {
  let sum = 0;
  let flattenArray = function (arr) {
    return arr.reduce((consolidated, child) => {
      if (Array.isArray(child)) {
        consolidated.push(...flattenArray(child));
      } else {
        consolidated.push(child);
      }
      return consolidated;
    }, []);
  };
  let resArray = flattenArray(arr);
  for (let i = 0; i < 7; i++) {
    if (typeof resArray[i] === typeof 1) {
      sum += resArray[i];
    }
  }

  return sum;
}

// Test Code
const testArray1 = [10, ["5", [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1));
