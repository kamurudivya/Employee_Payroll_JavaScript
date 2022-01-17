//UC1
/*
*Check employee is present or absent by using math.random and by using const,let,var
*/
const IS_ABSENT = 0;

var empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employye is Absent");
    return;
}  else {
    console.log("Employee is PRESENT")
}
console.log();

//UC2
/*
*Employee Wage based on part time or full time by using switch statement
*/
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

var empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME:
         empHrs = PART_TIME_HOURS;
         break;
    case IS_FULL_TIME:
          empHrs = FULL_TIME_HOURS;
          break;
    default:
        empHrs = 0;
}
var empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);
console.log(); 
