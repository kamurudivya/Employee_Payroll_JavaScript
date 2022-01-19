class Employeepayrolldata {
    id;
    salary;
    gender;
    startDate;

    constructor(id,name,salary,gender,startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }
    get name(){ 
        console.log("inside getter")
        return this._name; }
    set name(name) { 
        console.log("inside setter")
        this._name =name; }
    toString(){
        const options = { years: 'numaric', month: 'long', day: 'numaric'};
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocalDateString("en-US", options);
        return "id=" + this.id + "name=" + this.name + "salary" + this.salary + "gender" + this.gender + "startDate" + this.startDate;            
    }
}
let Employeepayrolldata = new EmployeePayroll(1,"divya",37000);
    console.log(Employeepayrolldata.toString());
    Employeepayrolldata.name = "divya"
    console.log (Employeepayrolldata.toString());
let newEmployeePayroll = new EmployeePayroll(1,"vindya",20000, "F", new Date());
    console.log(newEmployeePayroll.toString());
