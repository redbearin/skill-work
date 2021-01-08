const wrapAround = (str, offset) => {
  // offset more than word length
  if (Math.abs(offset) > str.length) 
    offset = offset % str.length;
  // offset positive
  if (offset >= 0) 
    return str.slice(offset) + str.slice(0, offset);
  // offset negative
  else 
    return str.slice(offset) + str.slice(0, str.length + offset);
}

str = "Nonscience";
offset = -116;
wrapAround(str, offset);