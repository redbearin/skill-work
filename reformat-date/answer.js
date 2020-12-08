const reformatDate = (date) => {
  const month = {Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'};
  // split the day, month, yr into array
  const arrayDate = date.split(' ');
  // for day remove st, nd, rd, th
  // and make 2 digit string
  arrayDate[0].length === 4 ?
    arrayDate[0] = arrayDate[0].slice(0, 2):
    arrayDate[0] = '0' + arrayDate[0].slice(0, 1);
  // convert 3 char month to two digit string
  arrayDate[1] = month[arrayDate[1]];
  return arrayDate[2] + '-' + arrayDate[1] + '-' + arrayDate[0];
}

const date = "26th May 1960";

reformatDate(date);