const paulCipher = (str) => {
  let final = '';
  let firstChar = false;
  let ltrPos = null;
  let code;
  for(let i = 0; i < str.length; i++) {

    // number
    if(!isNaN(str[i]))
      final += str[i];

    // letter
    else {
      // first letter
      if (!firstChar) {
        firstChar = true;
        final += str[i].toUpperCase();
      }
      // not first letter
      else {
        // find charcode for letter
        code = str.charCodeAt(i);
        // make lowercase letter capital letter
        if (code > 96 && code < 123)
          code -= 32;
        // add charcode for letter to position of last letter
        // with turn wraparound and convert to new letter
        if (code + ltrPos > 90) {
          final += String.fromCharCode(code + ltrPos - 26);
        }
        // add charcode for letter to position of last letter
        // and convert to new letter
        else {
          // add letter for 
          final += String.fromCharCode(code + ltrPos);
        }
      }

      // set current letter position
      if (str.charCodeAt(i) < 91 && str.charCodeAt(i) > 64)
        ltrPos = str.charCodeAt(i) - 64;
      if (str.charCodeAt(i) < 123 && str.charCodeAt(i) > 96)
        ltrPos = str.charCodeAt(i) - 96;
    }
  }
  return final;
}

const str = "MATT";

document.getElementById('ans').innerHTML = paulCipher(str);
