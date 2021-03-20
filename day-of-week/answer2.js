function dayOfTheWeek(day, month, year) {
  const months = ['', 
                  'January', 
                  'February', 
                  'March', 
                  'April', 
                  'May', 
                  'June', 
                  'July', 
                  'August', 
                  'September', 
                  'October', 
                  'November', 
                  'December'];

  const weekdays = ['Sunday', 
                    'Monday',
                    'Tuesday', 
                    'Wednesday', 
                    'Thursday', 
                    'Friday', 
                    'Saturday'];

  let dateString = months[month].toString() + 
                   ' ' + 
                   day.toString() +
                   ' ' + 
                   year.toString();

  let date = new Date (dateString);

  let numberDayOfWeek = date.getDay();

  return weekdays[numberDayOfWeek];
}

let day = 18; 
let month = 7;
let year = 1999;

dayOfTheWeek(day, month, year);