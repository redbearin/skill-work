const altSemi = (num) => {
  let prod;
  // semifactorial
  let sf = 0;
  // loop backward by 2s
  for (let i = num; i >= 1; i -= 2) {
    prod = 1;
    // calculate factorial
    for (let j = i; j >= 1; j--) {
      prod *= j;
    }
    sf += prod;
  }
  // alternating factorial
  let af = 0;
  // determine even or odd place in 
  // factorial chain
  let count = 1;
  for (let i = num; i >= 1; i --) {
    prod = 1;
    for (let j = i; j >= 1; j--) {
      prod *= j;
    }
    if (count % 2 === 0) 
      af -= prod;
    else 
      af += prod;
    count++;
  }
  return af - sf;
}

const num = 1;

document.getElementById('ans').innerHTML = altSemi(num);