function countStudents(students: number[], sandwiches: number[]): number {
  while (students.includes(sandwiches[0])) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      students.push(students[0]);
      students.shift();
    }
  }
  return sandwiches.length;
}
