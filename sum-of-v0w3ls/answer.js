const sumOfVowels = (str) => {
  let count = 0;
  for(let index = 0; index < str.length; index++) {
    if(str[index] === 'a' || str[index] === 'A')
      count += 4;
    if(str[index] === 'e' || str[index] === 'E')
      count += 3;
    if(str[index] === 'i' || str[index] === 'I')
      count += 1;
  }
  return count;
}

const str = "Do I get the correct output?";
sumOfVowels(str);