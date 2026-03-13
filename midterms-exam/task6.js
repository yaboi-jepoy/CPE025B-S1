function firstUniqueChar(s) {
  const charCounts = {};
  for (const char of s) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (charCounts[s[i]] === 1) {
      if (s[i + 1] === undefined) {
        return s[i];
      } else {
        return s[i + 1];
      }
    }
  }

  return -1;
}

// Test Code
console.log(firstUniqueChar("sTreSS"));
console.log(firstUniqueChar("aabbc"));
