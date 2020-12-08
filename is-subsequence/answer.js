function checkSubsequence(substring, string, lengthSubstring, lengthString) 
{ 
    //analysis conditions
    if (lengthSubstring === 0) return true; 
    if (lengthString === 0) return false; 
  
    // if last characters of string and substring match
    if (substring[lengthSubstring - 1] === string[lengthString - 1]) 
        return checkSubsequence(substring, string, lengthSubstring - 1, lengthString - 1); 
  
    // if last characters of string and substring do not match 
    return checkSubsequence(substring, string, lengthSubstring, lengthString - 1); 
} 

function isSubsequence(substring, string) {
var lengthSubstring = substring.length;
var lengthString = string.length;
return checkSubsequence(substring, string, lengthSubstring, lengthString);
}

var substring = "axc";
var string = "ahbgdc";

isSubsequence(substring, string);

