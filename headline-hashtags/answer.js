const getHashTags = (str) => {
  // make string into array
  const strArr = str.split(' ');
  // remove commas at ends of words
  for (let index = 0; index < strArr.length; index++) {
    if (strArr[index][strArr[index].length-1] === ',') 
      strArr[index] = strArr[index].slice(0, - 1);
  }
  // sort the array based on length
  strArr.sort((a,b) => b.length - a.length);
  const longest = [];
  // create array of up to 3 longest words
  for (let index = 0; index < strArr.length; index++) {
    if (index >  2)
      break;
    longest.push('#' + strArr[index][0].toLowerCase() + strArr[index].slice(1));
  }
  return longest;
};

const str = "Hey Parents, Surprise, Fruit Juice Is Not Fruit";

getHashTags(str);
