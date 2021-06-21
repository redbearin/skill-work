function dayOfYear(today) {
  var start = new Date(today.getFullYear(), 0, 0);
  var diff = (today - start) + ((start.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000);
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day;
}

var today = new Date();

dayOfYear(today);