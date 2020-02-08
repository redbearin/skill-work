function checkSubstring(ransomNote, magazine, lengthNote, lengthMagazine) {
  if(magazineLength === 0) return true;
  if(noteLength === 0) return false;
  if(ransomNote[lengthNote -1] === magazine[lengthMagazine - 1]) {
    return checkSubstring(ransomNote, magazine, lengthNote - 1, lengthMagazine - 1);
  } else {
    return checkSubstring(ransomNote, magazine, lengthNote - 1, lengthMagazine);
  }
}

function canConstruct(ransomNote, magazine) {
  var lengthNote = randomNote.length;
  var lengthMagazine = magazine.length;
  return checkSubstring(ransomNote, magazine, noteLength, magazineLength);
}

var ransomNote = "aa";
var magazine = "aab";

canConstruct(ransomNote, magazine);
