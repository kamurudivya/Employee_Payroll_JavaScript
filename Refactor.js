// UC3 
/*
*Refactor code And write function to get work hours
*/
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;

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
    console.log(" Emp Hour:" + empHrs + " Emp Wage: " + empWage);
