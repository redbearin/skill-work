const pyramidalString = (str, type) => {
  // increment the pyramid steps
  let step = 1;
  // intialize the substring
  let sub = '';
  // initialize the end for the substring build
  let end;
  // index in the string
  let strIndex = 0;
  // final pyramid array
  let final = [];
  // only one element in string 
  // or an empty string
  if (str.length === 1 || str === '') 
    return [str];
  // not the end of the string
  while (strIndex < str.length) {
    // ending index for this step of the pyramid
    end = strIndex + step;
    // go through index by index for the number
    // of elements in this step
    for (let i = strIndex; i < end; i++) {
      sub += str[i];
      strIndex++;
    }
    // add the substring to the final array
    final.push(sub);
    // go to the next step of the pyramid
    step++;
    // reinitialize the substring
    sub = '';
  }
  // last element of the array is not one 
  // bigger than the second to last
  if (final[final.length - 1].length - 1 !== final[final.length - 2].length)
    return 'Error!'; 
  // reverse the pyramid
  if (type === 'REV')
    final.sort((a,b) => b.length - a.length)
  return final;
}

const str = "";
const type = "REV";

document.getElementById('ans').textContent = pyramidalString(str, type);