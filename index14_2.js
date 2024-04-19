//1
const grades = Array.from({ length: 12 }, () =>
  Math.floor(Math.random() * 101)
);

console.log(grades);

//2
const sum = grades.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
const average = sum / grades.length;
console.log(average);

//3
const maxGrade = Math.max(...grades);
console.log(maxGrade);

//4
const minGrade = Math.min(...grades);
console.log(minGrade);

//5
const filteredGoodGrades = grades.filter((el) => el >= 60);
const goodGradesCount = filteredGoodGrades.length;
console.log(goodGradesCount);

//6
const filteredBadGrades = grades.filter((el) => el < 60);
const badGradesCount = filteredBadGrades.length;
console.log(badGradesCount);

//7
/*Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
Если оценка ниже 20, преобразуйте её в "E"*/

const letterGrades = grades.map((grade) => {
  if (grade >= 80 && grade <= 100) {
    return "A";
  } else if (grade >= 60 && grade < 80) {
    return "B";
  } else if (grade >= 40 && grade < 60) {
    return "C";
  } else if (grade >= 20 && grade < 40) {
    return "D";
  } else {
    return "E";
  }
});
console.log(letterGrades);
