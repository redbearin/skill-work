const farey = (num) => {
  // create string array and add first element
  const strings = ['0/1'];
  // initialize orderedStrings array
  const orderedStrings = [];
  // create nums array and add first element
  const nums = [0];

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      // there is a remainder
      if (j % i && j/i <= 1) {
        // denominator / numerator leaves no 
        // remainder and quotient less 
        // than denominator then fraction
        // can be reduced, so skip
        if (i % j === 0 && i / j < i)
          continue;
        // cannot be reduced
        // add string to string array
        // add number to nums array
        else {
          strings.push(j.toString() + '/' + i.toString());
          nums.push(j/i);
        }
      }
    }
  }
  // add ending entry to string
  //  and nums arrays
  strings.push('1/1');
  nums.push(1);
  // make a copy of nums array
  // and sort
  const copy = [...nums];
  copy.sort((a,b) => a - b);

  let index;
  // go element by element through sorted
  // copy of nums array
  // take that index in the string array 
  // and push it into the ordered string array
  for (let i = 0; i < copy.length; i++) {
    index = nums.indexOf(copy[i]);
    orderedStrings.push(strings[index]);
  }
  return orderedStrings;
}

const num = 1;
document.getElementById('ans').innerHTML = farey(num);