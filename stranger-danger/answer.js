const noStrangers = (str) => {
  const acquains = [];
  const friends = [];
  let newStr = '';
  const words = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '.' || str[i] !== ',' || str[i] !== '!')
      newStr += str[i].toLowerCase();
  }
  const strArr = newStr.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (words[strArr[i]]) {
      words[strArr[i]] += 1;
      if (words[strArr[i]] === 5) {
        console.log('inside 5')
        friends.push(strArr[i]);
        let index = acquains.indexOf(strArr[i]);
        acquains.splice(index, 1);
      }
      else if (words[strArr[i]] === 3) {
        acquains.push(strArr[i]);
      }
    }
    else
      words[strArr[i]] = 1;
  }
  return [acquains, friends];
}

const str = "See Spot run. See Spot jump. Spot likes jumping. See Spot fly.";

document.getElementById('ans').innerHTML = noStrangers(str);