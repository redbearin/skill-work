const findAndRemove = (obj) => {
  for (key in obj) {
    for (key1 in obj[key]) {
      if (isNaN(obj[key][key1]))
        delete obj[key][key1];
    }
  }
  return obj;
};

const obj = {
  kitchen: {
    ["gold spoons"]: "900",
    piano: "550",
    notes: "ga0r76ba22g4e",
  },
  cellar: {
    reminder: "dog",
    bottle: "750",
  }
}
findAndRemove(obj);