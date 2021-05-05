const countMatches = (items, ruleKey, ruleValue) => {
  // set indices associated with each key
  const keyAndIdx = {type: 0, color: 1, name: 2}
  // determine index where value of key is stored
  const index = keyAndIdx[ruleKey];
  // initialize count
  let count = 0;
  // go thru items and find matches
  for (let i = 0; i < items.length; i++) {
    if (items[i][index] === ruleValue)
      count++;
  }
  return count;
};

const items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]];
const ruleKey = "type"; 
const ruleValue = "phone";

document.getElementById('ans').textContent = countMatches(items, ruleKey, ruleValue);