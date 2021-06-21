var removeOuterParentheses = function(S) {
  // current depth of parentheses
  let depthCount = 0; 
  // return string
  let afterRemoval = '';
  
  for (let index = 0; index < S.length; index++) {
    // left bracket
    if (S[index] === '(') {
        depthCount += 1;
        // more than a single left bracket
        if (depthCount > 1) {
          afterRemoval += S[index];
        }
    }
    // right bracket 
    else {
      // more than a single left bracket
      if (depthCount > 1) {
        afterRemoval += S[index];
      }
      // reduce the depth count by one
      depthCount -= 1;
    }   
  }

  return afterRemoval;
};

const S = "(()())(())(()(()))";

removeOuterParentheses(S);