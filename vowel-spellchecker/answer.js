const spellchecker = (wordlist, queries) => {
  const output = [];
  // populate the output array with "" for number of
  // elements in queries array
  for (let index = 0; index < queries.length; index++) {
    output.push("");
  }
  // if there is an exact match in the word list for the
  // queries array element, put that element in the output 
  // array and mark that element in the query array as 
  // addressed (designate with a '*')
  for (let index = 0; index < queries.length; index++) {
    if(wordlist.includes(queries[index])) {
      output[index] = queries[index];
      queries[index] = '*';
    }
  }
  // make all the queries array elements lowercase
  for (let index = 0; index < queries.length; index++) {
    queries[index] = queries[index].toLowerCase();
  }

  for (let index = 0; index < queries.length; index++) {
    for (let index1 = 0; index1 < wordlist.length; index1++) {
      // wordlist array element adjusted to lowercase and
      // queries array element (which is now all lowercase) match
      // put wordlist array element in  output array and mark
      // that element as addressed (designate with a '*')
      if (wordlist[index1].toLowerCase() === queries[index]) {
        output[index] = wordlist[index1];
        queries[index] = '*'
        break;
      }
    }
  }

  // create wordlist array (wordlist$Vowels) with vowels marked with $
  const wordlist$Vowels = []
  const vowelList = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < wordlist.length; index++) {
    let wordstring = '';
    for (let index1 = 0; index1 < wordlist[index].length; index1++) {
      if (vowelList.includes(wordlist[index][index1].toLowerCase()))
        wordstring += '$';
      else 
        wordstring += wordlist[index][index1];
    }
    wordlist$Vowels.push(wordstring);
  }

  // create query array (queries$Vowels) with vowels marked with $
  const queries$Vowels = [];
  for (let index = 0; index < queries.length; index++) {
    if (queries[index] === '*') {
      queries$Vowels.push('*')
    }
    else  {
      let wordstring = '';
      for (let index1 = 0; index1 < queries[index].length; index1++) {
        if (vowelList.includes(queries[index][index1].toLowerCase()))
          wordstring += '$';
        else 
          wordstring += queries[index][index1];
      }
      queries$Vowels.push(wordstring);
    }
  }
  // check to see if there is a wordlist and query list match when
  // vowels are $
  for (let index = 0; index < queries$Vowels.length; index++)  {
    let  queriesWord = queries$Vowels[index].toLowerCase();
    // skips those elements that have already been addressed
    if(queries[index] !== '*')  {
      // find those elements where the wordlist with $ for vowels
      // and queries elements with $ for vowels match
      for (let index1 = 0; index1 < wordlist$Vowels.length; index1++) {
        let listWord = wordlist$Vowels[index1].toLowerCase();
        if(listWord === queriesWord) {
          output[index] = wordlist[index1];
          break;
        }
      }
    }
  } 
  return output;
};

const wordlist = ["KiTe","kite","hare","Hare"];

const queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"];

spellchecker(wordlist, queries);