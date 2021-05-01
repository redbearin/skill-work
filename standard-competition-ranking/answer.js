const competitionRank = (students, person) => {
  // array to hold students sorted by rank
  const studentsSorted = [];
  // first rank of first student in sorted array
  let rank = 1; 
  // students with the same rank
  let numSameRank = 0;
  // build the students array for sorting
  for (let name in students) {
    studentsSorted.push([name, students[name]]);
  }
  // sort the students array - highest ranking student first
  studentsSorted.sort((a, b) => b[1] - a[1]);
  // start with the second student in array
  // cycle through student by student
  for (let i = 1; i < studentsSorted.length; i++) {
    // score of student not same as prior student
    if (studentsSorted[i-1][1] !== studentsSorted[i][1]) {
      // increase the rank
      rank++;
      // if there were students with the same rank before 
      // add to the rank to account for all students with
      // same rank before
      // reinitialize numSameRank
      if (numSameRank) {
        rank += numSameRank;
        numSameRank = 0;
      }
    }
    // score same as prior student
    else 
      numSameRank++;
    // you have reached the student you are looking for
    if (studentsSorted[i][0] === person) 
      return rank
  }
};

const students = {
  Scott: 84,
  Bruce: 87,
  Kate: 92,
  Jess: 87,
  Carol: 92
  };

const person = "Bruce";

document.getElementById('ans').textContent = competitionRank(students, person);