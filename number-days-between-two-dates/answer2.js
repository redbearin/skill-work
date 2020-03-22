function daysBetweenDates(date1, date2) {
  var date1Formatted = new Date(date1); 
  var date2Formatted = new Date(date2);

  var differenceInTimeMilliseconds = date2Formatted.getTime() - date1Formatted.getTime(); 
  
  return Math.abs(differenceInTimeMilliseconds) / (1000 * 3600 * 24); 

}

var date1 = "2019-06-30"; 
var date2 = "2019-06-29";
  
daysBetweenDates(date1, date2);