const distanceToNearestVowel = (str) => {
  const strArr = str.split('');
  const vowelIdx = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const final = [];
  for (let i = 0; i < str.length; i++) {
    if(vowels.includes(strArr[i]))
      vowelIdx.push(i);
  }
  let j = vowelInx[0]
  for (let i = 0; i < str.length; i++) {
    if(!vowels.includes(strArr[i])) {
      while(j) {
        if
      }
    }
      
  }
  console.log(vowelIdx);
}

const str = "shopper";

document.getElementById('ans').innerHTML = distanceToNearestVowel(str);
