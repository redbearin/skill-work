const bitwiseComplement = (N) => {
  const base2Str = N.toString(2);
  let comp2Str = '';
  // cycle through the base 2 string
  for(let index =0; index < base2Str.length; index++) {
    // character is '0' change to '1'
    if (base2Str[index] === '0') 
      comp2Str += '1';
    // character is '1' change to '0'
    else 
      comp2Str += '0';
  }
  // change base 2 string to a base 10 number
  return parseInt(comp2Str, 2);
};

const N = 10;
bitwiseComplement(N);