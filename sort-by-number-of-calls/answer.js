const f1 = _ => "hello"

const f2 = _ => _ => "edabit";

const f3 = _ => _ => _ => "user";

const funcSort = (arr) => {
  const times = [];
  const final = [];
  let sortedTimes, str, idx;
  // break each function into a string
  // and find the length based on number
  // of calls
  for (let i = 0; i < arr.length; i++) {
    str = arr[i].toString();
    times.push(str.split('=>').length);
  } 
  // sort the times by length
  sortedTimes = [...times];
  sortedTimes.sort((a,b) => a - b);
  // find the index in original array
  // of each time in sorted
  for (let i = 0; i < times.length; i++) {
    idx = times.indexOf(sortedTimes[i]);
    if (arr[idx].name === undefined)
      final.push(arr[idx]);
    else
      final.push(arr[idx].name);
  }
  return final;
}

const arr = [f2, f3, f1];

document.getElementById('ans').textContent = funcSort(arr);