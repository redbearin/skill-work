function topKFrequent(nums, k) {
  let counts = {};
  let topKFrequentNumbers = [];
  for (let index = 0; index < nums.length; index++) {
    let number = nums[index];
    counts[number] ?
      counts[number] = counts[number] + 1 :
      counts[number] = 1;
  }
  let sortedCountValues = (Object.values(counts)).sort((a,b) => b-a);
  for (let index = 0; index < k; index++) {
    for (let key in counts) {
      if (counts[key] === sortedCountValues[index]) topKFrequentNumbers.push(parseInt(key));
    }
  }
  return topKFrequentNumbers;
}

const nums = [1];
const k = 1;

topKFrequent(nums, k);