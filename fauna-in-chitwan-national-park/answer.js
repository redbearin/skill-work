const faunaNumber = (str) => {
  const animals = ["muggercrocodile", "one-hornedrhino", "python", "moth", "monitorlizard", "bengaltiger"];
  const final = [];
  
  // remove punctuation 
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ',' || str[i] === '.')
      if (i === str.length - 1) 
        str = str.slice(0, str.length - 1);
      else 
        str = str.slice(0, i) + str.slice(i + 1);
  }
  // put allowed animals and associated numbers into final array
  // convert string to array
  let strArr = str.split(' ');
  let obj = {};
  for (let i = 0; i < strArr.length; i++) {
    // element is a number 
    // next element is an allowed animal
    if(!isNaN(strArr[i]) && animals.includes(strArr[i+1])) {
      obj[strArr[i+1]] = strArr[i];
      final.push(obj);
      obj = {};
    }
  }
  return final;
}


const str = "There are 244 bengaltiger, 200 monitorlizard and 5000 apples.";

document.getElementById('ans').innerHTML = faunaNumber(str);