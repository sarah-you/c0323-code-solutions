/* exported getStudentNames */
function getStudentNames(students) {
  const namelist = [];
  for (let i = 0; i < students.length; i++) {
    namelist.push(students[i].name);
  }
  return namelist;
}
