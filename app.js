//use strict
'use strict';

//Array of employees
const employees = [];

//create constructor
function Employee (id , fName , lName , depart , level , img){
    this.id = id;
    this.fName = fName;
    this.lName = lName;
    this.depart = depart;
    this.level = level;
    this.img = img;
    employees.push(this);
}

//create prototype function to  calculat the salary
Employee.prototype.calSalary = function(){
    if(this.level === "Senior"){
        Employee.prototype.salary = Math.floor((Math.random() * 500) + 1) + 1500;
        }else if(this.level === "Mid-Senior"){
            Employee.prototype.salary = Math.floor((Math.random() * 500) + 1) + 1000; 
        }else if(this.level === "Junior"){
            Employee.prototype.salary =  Math.floor((Math.random() * 500) + 1) + 500;
        }
};

//create prototype function to calculate net salary
Employee.prototype.calNetSalary = function(){
    Employee.prototype.netSalary = Math.floor(this.salary - ((this.salary * 7.5) / 100));
}

//creat prototype function to render employees
Employee.prototype.render = function(){
   
    document.writeln(`full name : ${this.fName} ${this.lName}
    <br>
    salary before taxes = ${this.salary}
    <br>
    net salray = ${this.netSalary}
    <br><br>`);
}

//creat objects
const emp1 = new Employee(1000,'Ghazi','Samer','Administration','Senior','./assets/Ghazi.jpg');
const emp2 = new Employee(1001,'Lana','Ali','Finance','Senior','./assets/Lana.jpg');
const emp3 = new Employee(1002,'Tamara','Ayoub','Marketing','Senior','./assets/Tamara.jpg');
const emp4 = new Employee(1003,'Safi','Walid','Administration','Mid-Senior','./assets/Safi.jpg');
const emp5 = new Employee(1004,'Omar','Zaid','Development','Senior','./assets/Omar.jpg');
const emp6 = new Employee(1005,'Rana','Saleh','Development','Junior','./assets/Rana.jpg');
const emp7 = new Employee(1006,'Hadi','Ahmad','Finance','Mid-Senior','./assets/Hadi.jpg');


//invoke prototype functions
for(let i=0 ; i<employees.length ; i++){
    employees[i].calSalary();
    employees[i].calNetSalary();
    employees[i].render();
}
