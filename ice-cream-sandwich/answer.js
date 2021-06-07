const isIcecreamSandwich = (str) => {
  // if the first and last elements
  // are not the same
  if (str[0] !== str[str.length - 1])
    return false;

  // number of same elements at beginning
  const begCt = 0;
  // number of same elements at end
  const endCt = 0;
  // indices where middle begins
  // and ends
  let midIdxBegin, midIdxEnd;

  // count the number of same elements
  // at the beginning
  for (let i = 1; i < str.length; i++) {
    if (str[0] === str[i])
      begCt++;
    else {
      midIdxBegin = i;
      break;
    }
  }

  // count the number of same elements
  // at the end
  for (let i = str.length - 2; i >= 0; i--) {
    if (str[str.length - 1] === str[i])
      endCt++;
    else {
      midIdxEnd = i;
      break;
    }
  }

  // there is not middle
  if(!midIdxBeg)
    return false;

  // blocks of the element not the same 
  // at the beginning and the end
  if (begCt !== endCt) 
    return false;

  // check to see if all the elements
  // in the middle are the same
  for (let i = midIdxBegin; i <= midIdxEnd; i++) {
    if (str[midIdxBegin] !== str[i])
      return false;
  }

  return true;
}

const str = "AAABB";

document.getElementById('ans').textContent = isIcecreamSandwich(str);
