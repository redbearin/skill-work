const busyStudent = (startTime, endTime, queryTime) => {
  let count = 0
 for (let index = 0; index < startTime.length; index++) {
   if(startTime[index] <= queryTime && 
    queryTime <= endTime[index]) 
      count++;
 }
 return count;
}
    
const startTime = [1,2,3];
const endTime = [3,2,7]; 
const queryTime = 4;

busyStudent(startTime, endTime, queryTime);