const sunLoungers = (str) => {
  strArr = str.split('');
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '0') {
      if (strArr.length === 1)
        return 1;
      if (strArr.length === 2) {
        if (strArr[i + 1] === '0')
          return 1;
        else
          return 0;
      }
      if (strArr[i-1] === '0' && strArr[i+1] === '0' ||
          i === 0 && strArr[i+1] === '0' ||
          i === strArr.length -1 && strArr[i-1] === '0') {
        strArr[i] = '1';
        count++;
      }
    }
  }
  return count;
}

const str = "00101";

document.getElementById('ans').innerHTML = sunLoungers(str);