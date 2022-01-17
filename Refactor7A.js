// UC3
/*
*Refactor code And write function to get work hours
*/
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
var empDailyWageArr = new Array();
var totEmpWage =0;
var totalEmpHrs = 0;
var totalWorkingDays = 0;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
var empCheck = Math.floor(Math.random() * 10) % 3;
var empHrs = getWorkingHours(empCheck);
var empWage = empHrs * WAGE_PER_HOUR;
console.log(" Emp Hour:" + empHrs + "," + " Emp Wage: " + empWage);
console.log();

//UC4
/*
 * Calculating wages for a month
 */
 {
    var totalEmpHrs = 0;
    for (var day = 0; day < NUM_OF_WORKING_DAYS; day++) {
        var empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    var empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Total Hours:" + totalEmpHrs + "," + " Employee Wage:" + empWage);
}
console.log();

//UC5
/*
 * Calculating wages till total woking hours 160 or max day 20 days
 */
 {
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        var empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    var empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Total Days:" + totalWorkingDays + "," + " Total Hours:" + totalEmpHrs + "," + " Employee Wage:" + empWage);
}
console.log();

//UC6
/*
* function for calculating daily wage
 */
function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    var empCheck = Math.floor(Math.random() * 10) % 3;
    var empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calculateDailyWage(empHrs));
}
var empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days:" + totalWorkingDays + "," + " Total Hour(s:" + totalEmpHrs + "," + " Employee Wage: " + empWage + "," + " Daily Wages: " + "[" + empDailyWageArr + "]");
console.log();

//Array Helper Functions
//UC 7A 
/*
* Calc total wage using Array forEach traversal or reduce method
*/
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days:" + totalWorkingDays + "," + " Total Hrs:" + totalEmpHrs + "," + " Emp Wage " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage
}
console.log();
console.log("Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));
console.log();
