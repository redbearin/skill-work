const keysAndValues= (obj) => {
  return [Object.keys(obj), Object.values(obj)];
};

const obj = { a: "Apple", b: "Microsoft", c: "Google" };

keysAndValues(obj);