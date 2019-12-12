function strStr(haystack, needle) {
  let matchIndex = -1;
  let needleIndex = 0;
  for (let haystackIndex = 0; haystackIndex <= haystack.length; haystackIndex++){
    if (haystack[haystackIndex] === needle[needleIndex]) {
      matchIndex = haystackIndex;
      needleIndex++;
      haystackIndex++;
      while (needleIndex < needle.length) {
        if (needle[needleIndex] === haystack[haystackIndex]) {
          needleIndex++;
          haystackIndex++;
        }
        else {
          return -1;
        }
      }
      break;
    }
  }
  return matchIndex;
}


var haystack = 'aaaaa';
var needle = 'baa';
strStr(haystack, needle);
