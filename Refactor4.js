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
    console.log("Total Hours:" + totalEmpHrs + " Employee Wage:" + empWage);
}
