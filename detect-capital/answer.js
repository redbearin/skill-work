function correctCapitalUse(word) {
  var count = 0;
    for( var index = 0; index < word.length; index++) {
      if (/([A-Z])/.test(word[index])) {
        count++;
      }
    }
    if ((count === 1 && /([A-Z])/.test(word[0])) || count === word.length || count === 0) {
      return true;
    } 
    return false;
};

var word = 'USA';

correctCapitalUse(word);