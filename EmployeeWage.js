//UC1(Check employee is present or absent by using math.random and by using const,let,var)

const IS_ABSENT = 0;

var empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employye is Absent");
    return;
}  else {
    console.log("Employee is PRESENT")
}
console.log();
