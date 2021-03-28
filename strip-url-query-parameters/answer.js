const stripUrlParams = (str, remove) => {
  const arr = str.split('?');
  const final = [arr[0], '?'];
  // no ? in string
  if (!arr[1])
    return str;
  // ? in string
  else {
    const end = arr[1].split('&');

    // mark items that match remove array,
    // if there is one
    if (remove) {
      for (let i = 0; i < remove.length; i++) {
        for (let j = 0; j < end.length; j++) {
          if(remove[i] === end[j][0]) 
            end[j] = '*';
        }
      }
    }
    // mark items that are duplicates (keep second entry)
    for (let i = end.length - 1; i >= 0; i--) {
      if (end[i] === '*')
        continue;
      for (let j = end.length - 1; j >= 0; j--) {
        if (end[j] === '*')
          continue;
        if(end[i][0] === end[j][0] && i !== j) 
          end[j] = '*';
      }
    }
    // reconstruct arr without marked items
    for (let i = 0; i < end.length; i++) {
      if (end[i] !== '*')
        final.push(end[i]);
    }
    // return string
    return final.join('');
  }
}

const str = "https://edabit.com?a=1&b=2&a=2";
const remove = ['b'];

document.getElementById('ans').innerHTML = stripUrlParams(str, remove);