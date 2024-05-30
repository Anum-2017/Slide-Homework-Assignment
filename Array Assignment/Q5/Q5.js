"use strict";
const students = [
    {
        name: "Sana",
        id: 1,
        grades: [85, 90, 95]
    },
    {
        name: "Tehreem",
        id: 2,
        grades: [75, 80, 85]
    },
    {
        name: "Maryam",
        id: 3,
        grades: [70, 60, 50]
    }
];
function addAverageGradeToStudents(students) {
    students.forEach(student => {
        const totalGrades = student.grades.reduce((acc, grade) => acc + grade, 0);
        const averageGrade = totalGrades / student.grades.length;
        student.averageGrade = parseFloat(averageGrade.toFixed(2)); // Rounding to two decimal places
    });
}
// Call the function to add average grades to each student
addAverageGradeToStudents(students);
// Print the updated array of student objects
console.log(students);
