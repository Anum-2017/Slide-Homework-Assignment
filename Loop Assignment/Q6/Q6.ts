/* Q6 - Enums for Days of the Week
Define an enum for days of the week. Write a function that takes a day as an argument and returns "Weekend" if it's Saturday or Sunday, and "Weekday" for other days. */

// Define enum for days of the week
enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// Function to determine if a given day is a weekend or weekday
function checkDayType(day: DayOfWeek): string {
    if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}

// Test the function
console.log(checkDayType(DayOfWeek.Monday)); // Output: Weekday
console.log(checkDayType(DayOfWeek.Saturday)); // Output: Weekend
