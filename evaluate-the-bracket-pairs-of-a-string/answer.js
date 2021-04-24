const evaluate = (s, knowledge) => {
  // word inside the parentheses
  let key = '';
  // rebuild the string with the replacement
  let str = '';
  // inside the parentheses
  let inside = false;
  for (let i = 0; i < s.length; i++) {
    // beginning designation for a key
    if (s[i] === '(') {
      inside = true;
    }
    // ending designation for a key
    else if (s[i] === ')') {
      for (let j = 0; j < knowledge.length; j++) {
        if (knowledge[j][0] === key)
          str += knowledge[j][1];
      }
      key = '';
      inside = false;
    }
    // letter of a key
    else if (inside === true)
      key += s[i];
    // letter that is not part of a key
    else if (s[i] !== '(' || s[i] !== ')' && inside === false)
      str += s[i];
  }
  return str;
};

s = "(a)(b)";
knowledge = [["a","b"],["b","a"]];

document.getElementById('ans').innerHTML = evaluate(s, knowledge);