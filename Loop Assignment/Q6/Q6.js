"use strict";
/* Q6 - Enums for Days of the Week
Define an enum for days of the week. Write a function that takes a day as an argument and returns "Weekend" if it's Saturday or Sunday, and "Weekday" for other days. */
// Define enum for days of the week
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));
// Function to determine if a given day is a weekend or weekday
function checkDayType(day) {
    if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
}
// Test the function
let result = checkDayType(DayOfWeek.Monday);
console.log(result);
let result1 = checkDayType(DayOfWeek.Saturday);
console.log(result1);
//console.log(checkDayType(DayOfWeek.Monday)); // Output: Weekday
//console.log(checkDayType(DayOfWeek.Saturday)); // Output: Weekend
