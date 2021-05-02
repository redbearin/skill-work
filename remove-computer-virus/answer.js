// determine if string contains a word
const findWord = (word, str) => {
  return RegExp(word +'\\b').test(str)
};

const removeVirus= (str) => {
  // break string into array at spaces
  const strArr = str.split(' ');
  // go element by element backwards thru array
  for (let i = strArr.length - 1; i >= 0; i--) {
    // if the word start with antivirus or notvirus skip
    if (findWord('antivirus', strArr[i]) || findWord('notvirus', strArr[i]))
      continue;
    // if word contains virus or malware remove or if an blank elment
    // remove that index
    if(strArr[i] === "" || findWord('virus', strArr[i]) || findWord('malware', strArr[i])){
      strArr.splice(i, 1);
    }
  }
  // create the final string
  let finalStr = strArr.join(' ');
  // if there is a comma at the end remove it
  if (finalStr[finalStr.length - 1] === ',')
    return finalStr.slice(0, -1);
  // no comma at end
  else 
    return finalStr;
};

const str = "PC Files: notvirus.exe, funnycat.gif";

document.getElementById('ans').textContent = removeVirus(str);