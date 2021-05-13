const equalCount = (str, names) => {
  const namesArr = names.split('&');
  // names with counts, difference, equality
  details = {};
  // set intial conditions in details object
  details[namesArr[0]] = 0;
  details[namesArr[1]] = 0; 
  details['equality'] = true; 

  // initialize name
  let name = '';

  // go character by character through str
  for (let i = 0; i < str.length; i++) {
    // a character
    if (str.charCodeAt(i) > 64 &&
        str.charCodeAt(i) < 91 ||
        str.charCodeAt(i) > 96 &&
        str.charCodeAt(i) < 123) {
      name += str[i];
      // last element
      if (i === str.length - 1) {
        // add count to name, if name is included
        if (details[name] !== undefined)
          details[name] += 1;
      }
    }
    // not a character
    else {
      if (name) {
        // add count to name, if name is included
        if (details[name] !== undefined)
          details[name] += 1;
        // reset name
        name = '';
      }
    }
  }
  // break the object into an array of subarrays
  const entries = Object.entries(details);

  // counts for names are not the same
  if (entries[0][1] !== entries[1][1]) {
    details.equality = false;
    details['difference'] = Math.abs(entries[0][1] - entries[1][1]);
  }

  console.log(details);
}

const str = "Elliot!@#$Sam!--@|#$Elliot@|Sam++Elliot$%^Elliot@|Sam!@#Elliot!@#$Sam!--@|#$Elliot";
const names = "Sam&Elliot";

document.getElementById('ans').textContent = equalCount(str, names);