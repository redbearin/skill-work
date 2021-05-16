const postfix = (str) => {
  strArr = str.split(' ');
  let num, opIdx;
  // as long as the final number has not been reached
  while (strArr.length > 1) {
    // determine the index of the operator
    for (let i = 0; i < strArr.length; i++) {
      if (isNaN(strArr[i])) {
        opIdx = i;
        break;
      }
    }
    // perform the operatio on the first two elements
    if (strArr[opIdx] === '+') {
      num = (+strArr[0] + +strArr[1]).toString();
    }
    if (strArr[opIdx] === '-') {
      num = (+strArr[0] - +strArr[1]).toString();
    }
    if (strArr[opIdx] === '/') {
      num = (+strArr[0] / +strArr[1]).toString();
    }
    if (strArr[opIdx] === '*') {
      num = (+strArr[0] * +strArr[1]).toString();
    }
    // take out the operators that was used
    strArr.splice (opIdx, 1);
    // take out the first two numbers and
    // replace with the total after operation
    strArr.splice(0, 2, num);
    // recreate the string
    str = strArr.join(' ');
    // repeat the process
    return postfix(str);
  }
  return str;
}

const str = "2 2 +";

document.getElementById('ans').textContent = postfix(str);