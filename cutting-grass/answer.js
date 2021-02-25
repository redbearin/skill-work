const cuttingGrass = (arr, ...args) => {
  const final = [];
  let sub;
  // go through each argument
  for (let i = 0; i < args.length; i++) {
    sub = [];
    // modify arr based on the argument
    for (let j = 0; j < arr.length; j++) {
      arr[j] -= args[i];
      // if you have a 0 record done and move to next arg
      if (arr[j] <= 0) {
        sub.push('Done');
        break;
      }
      else 
        sub.push(arr[j]);
    }
    // add the subarray to the final array
    final.push(sub);
  }
  return final;
}

const arr = [1, 0, 1, 1];

document.getElementById('ans').innerHTML = cuttingGrass(arr, 1, 1, 1);