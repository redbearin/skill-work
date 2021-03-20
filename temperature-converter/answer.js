const convert = (temp) => {
  const units = temp.slice(temp.length - 2);
  const number = temp.slice(0, temp.length - 2);
  if (units === '°F')
    return Math.round((number - 32) / 1.8000) + '°C';
  if (units === '°C') 
    return Math.round(number * 1.8000 + 32) + '°F'
  else
    return 'Error';
};

temp = '33';
convert(temp);