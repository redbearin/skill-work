const testMatch = (str) => {
  const myRegExp = /^(\d{6}|^\d{4})$/;
  return myRegExp.test(str);
};

const str = " 4983";

testMatch(str);