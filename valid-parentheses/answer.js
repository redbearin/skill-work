function isValid(s) {
  var leftParentheses = [];
  for (var index = 0; index < s.length; index++) {
    if (s[index] === '(' || s[index] === '{' || s[index] === '[') {
      leftParentheses.push(s[index]);
    } else {
      var lastParen = leftParentheses.pop();
      if ((s[index] === ')' && lastParen === '(') || (s[index] === '}' && lastParen === '{') || (s[index] === ']' && lastParen === '[')) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

var s = "{([]})";

isValid(s);

