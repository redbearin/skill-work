const halvesAreAlike = (s) => {
  // not an even number of characters
  if (s.length % 2)
    return false;

  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let countLft = 0;
  let countRt = 0;

  // count vowels on left side
  for (let index = 0; index < s.length/2; index++) {
    if (vowels.includes(s[index])) 
      countLft++;
  }

  //count vowels on right side
  for (let index = s.length/2; index < s.length; index++) {
    if (vowels.includes(s[index])) 
      countRt++;
  }

  // compare counts
  // same count
  if (countLft === countRt)
    return true;
  // different counts
  else
    return false;
};

const s = "AbCdEfGh";

halvesAreAlike(s);