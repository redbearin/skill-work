const decode = (encoded, first) => {
  const decoded = [first];
  let current = first;
  for (let index = 0; index < encoded.length; index++) {
    decoded.push(encoded[index] ^ current);
    current = encoded[index] ^ current;
  }
  return decoded;
};

encoded = [6,2,7,3]; 
first = 4;

decode(encoded, first);