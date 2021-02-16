const verticalText = (str) => {
  strArr = str.split(' ');
  let longest = 0;
  const final = [];
  for (let i = 0; i < strArr.length; i++) {
    if(strArr[i].length > longest) 
      longest = strArr[i].length;
  }
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < longest; j++) {
      if (i === 0) {
        if (!strArr[i][j])
          final.push([' ']);
        else 
          final.push([strArr[i][j]]);
      }
      else {
        final[j].push(strArr[i][j]);
      }
    }
  }
  return final;
}

const str = "Hello fellas";
document.getElementById('ans').innerHTML = verticalText(str);