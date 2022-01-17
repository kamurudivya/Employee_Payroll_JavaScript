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

    let totalEmpHrs = 0;
    let totalWorkingDays = 0;

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

//UC5
/**
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