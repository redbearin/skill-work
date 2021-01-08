function isIsomorphic(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  for (let index = 0; index < s.length; index++) {
      const sPlace = s.indexOf(s[index]);
      const tPlace = t.indexOf(t[index]);
      if (t[sPlace] !== t[index] || s[tPlace] !== s[index]) {
          return false;
      }
  }
  return true;
};

var s = "egg"
var t = "add"

isIsomorphic(s, t);