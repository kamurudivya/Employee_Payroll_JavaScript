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
var empDailyWageMap = new Map();
var totEmpWage =0;
var totalEmpHrs = 0;
var totalWorkingDays = 0;
var empDailyHrsMap = new Map();
var fullWorkingDays = new Array();
var partWorkingDays = new Array();
var nonWorkingDays = new Array();
var empDailyHrsArray = new Array();



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
//7B
/*
*show the day along with daily wage using ArrayMap
*/
var dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}
var mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log(" Daily wage using map : " + mapDayWithWageArr);

//7c 
/*
*Show days when full time wage of 160 were earned using filter
*/
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
var fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("7c Daily wage filter when fulltime wage is 160 earned " + fullDayWageArr);

//7d 
/*
*find first occurence when full time wage earned using find function
*/
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
var findFullTimeWage = mapDayWithWageArr.find(fullTimeWage);
console.log("7d First full time wage using find function " + findFullTimeWage);

//7e 
/*
*check if every element of full time wage is truely holding Full time wage
*/
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
var isAllFullTimeWage = fullDayWageArr.every(fullTimeWage);
console.log("7e Check all elment having full time wage using every function : " + isAllFullTimeWage);

//7f 
/*
*Check if there is any part time wage
*/
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
var anyPartTimeWage = mapDayWithWageArr.some(isAnyPartTimeWage);
console.log("7f Check if any part time wage using some function : " + anyPartTimeWage);

//7g 
/*
*Find the number of days employee worked
*/
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
var numOfWorkingDays = empDailyWageArr.reduce(totalDaysWorked, 0);
console.log("7g Total number of days employee worked :" + numOfWorkingDays);
//UC8 
/*
*Store the day and daily wage along with total wage 
*/ 
console.log("UC8 Store the day and daily wage:");
console.log(empDailyWageMap);

console.log("Total wage using reduce method :" + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

var totalWagesUsingMap = 0;
function totalWagesMap(dailyWage) {
    totalWagesUsingMap += dailyWage;
}
Array.from(empDailyWageMap.values()).map(totalWagesMap)
console.log("Total wage using map method :" + totalWagesUsingMap);
