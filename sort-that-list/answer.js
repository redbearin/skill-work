const revSortObj = (obj) => {
  return Object.keys(obj).sort().reverse().reduce((final, key) => {
    final[key] = obj[key];
    return final;
  }, {});
}

const obj = { c: 100, a: 50, b: 10, d: 50 };
revSortObj(obj);