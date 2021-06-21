let magicalString = (n) => {
  const base = '122112';
  // Find full based units (note there are 6 elements in the base)
  const fullBaseUnits = Math.floor(n/6);
  let number = '';
  // create number with full base units
  for (let num = 1; num <= fullBaseUnits; num++) {
    number += base;
  }
  /* get partial base unit and add it to number
  using the modulus to get the remainder */
  const additional = base.slice(0, n % 6);
  number += additional;
  //count the 1s in the final number
  let count = 0;
  for (let index = 0; index < number.length; index++) {
    if (number[index] === '1') count++;
  }
  return count;
}

const n  = 12;
magicalString(n);