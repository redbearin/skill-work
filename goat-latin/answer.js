function toGoatLatin(string){
  stringArray = string.split(' ');
  
  for (var index = 0; index < stringArray.length; index++) {
    var word = stringArray[index];
    if ((/^[aeiou]$/i).test(stringArray[index][0])) {
      word += 'ma';
    } else {
      word += stringArray[index][0] + 'ma';
      word = word.slice(1, word.length);
    }

    for (var index1 = 0; index1 <= index; index1++) {
      word += 'a';
    }

    stringArray[index] = word;
  }

  return stringArray.join(' ');
};

var string = "I speak Goat Latin";
toGoatLatin(string);