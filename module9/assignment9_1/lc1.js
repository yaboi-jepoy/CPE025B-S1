let getRandomSet = function (m, n, allowRepeat, shouldSort) {
  let resultSet = new Set();

  // keep drawing until we have m numbers
  while (resultSet.size < m) {
    let randomNum = Math.floor(Math.random() * (n + 1));

    if (allowRepeat) {
      // if repetition allowed, always add
      if (resultSet.size < m) {
        resultSet.add(randomNum);
      }
    } else {
      // if no repetition, only add if not already present
      resultSet.add(randomNum);
    }

    // if no repetition allowed and we can't get m unique numbers, break
    if (!allowRepeat && resultSet.size < m && m > n + 1) {
      break;
    }
  }

  // convert Set to Array
  let resultArray = Array.from(resultSet);

  // sort if requested
  if (shouldSort) {
    resultArray.sort((a, b) => a - b);
  }

  return resultArray;
};

//! TEST CASES, DO NOT MODIFY
console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));
