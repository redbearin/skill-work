const countStudents = (students, sandwiches) => {
  // number of no matches
  let noMatch = 0;
  // there are still sandwiches
  while(sandwiches.length) {
    // the student has gone all the way through
    // line without a match
    if (noMatch === students.length)
      break;
    // first student and sandwich preference match
    if (students[0] === sandwiches[0]) {
      // remove student
      students.shift();
      // remove sandwich
      sandwiches.shift();
      // reset no match noMatch counter
      noMatch = 0;
    }
    else {
      // move student to end of student line
      students.push(students.shift());
      // increment the no match counter
      noMatch++;
    }
  }
  // number of students that did not
  // match with a sandwich
  return students.length;
};

const students = [1,1,1,0,0,1];
const sandwiches = [1,0,0,0,1,1];

countStudents(students, sandwiches);