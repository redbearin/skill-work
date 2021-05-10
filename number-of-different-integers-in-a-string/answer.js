const numDifferentIntegers = (word) => {
  const nums = [];
  let sub = '';
  // go letter by letter thru word
  for (let i = 0; i < word.length; i++) {
    // if it is a number add it to sub
    if (!isNaN(word[i]))
      sub += word[i];
    // if not a number or the last letter
    if (isNaN(word[i]) || i === word.length - 1) {
      // if sub has content
      // push the content of sub to nums array
      // and reset sub to no content
      if (sub.length) {
        nums.push(sub);
        sub = '';
      }
    }
  }
  // remove leading zeroes
  for (let i = 0; i < nums.length; i++) {
    nums[i] = parseInt(nums[i]);
  }
  // remove duplicates
  let uniqueNums = [];
  nums.forEach((num) => {
    if (!uniqueNums.includes(num)) {
      uniqueNums.push(num);
    }
  });

  return uniqueNums.length;
};

const word = "a1b01c001";

document.getElementById('ans').textContent = numDifferentIntegers(word);