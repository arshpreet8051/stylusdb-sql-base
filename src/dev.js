const { executeDELETEQuery } = require("./queryExecutor");
const { parseINSERTQuery } = require("./queryParser");
const { readCSV, writeCSV } = require("./csvReader");

const SQL_QUERY = "DELETE FROM courses WHERE course_id = '2'";

executeDELETEQuery(SQL_QUERY).then((data) => {
  console.log("Query Executed", data);
});
// execute(SQL_QUERY).then((data) => {
//   console.log(data);
// });

// console.log(
//   parseINSERTQuery(
//     "INSERT INTO grades (student_id, course, grade) VALUES ('4', 'Physics', 'A')"
//   )
// );

// readCSV("enrollment.csv").then((data) => {
//   console.log(data);
// });

// const data = [
//   { student_id: "1", course: "Mathematics", grade: "A" },
//   { student_id: "2", course: "Chemistry", grade: "B" },
//   { student_id: "3", course: "Mathematics", grade: "C" },
// ];
// console.log(writeCSV(data));