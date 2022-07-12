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
   const empCard = document.createElement('div');
   empCard.setAttribute('class','card');
   empCards.appendChild(empCard);
   const image = document.createElement('img');
   image.setAttribute('src',this.img);
   empCard.appendChild(image);
   const cardText = document.createElement('div');
   cardText.setAttribute('class','cardText');
   empCard.appendChild(cardText);
   const fullName = document.createElement('h3');
   fullName.setAttribute('class','empText');
   fullName.textContent = `Name : ${this.fName}  ${this.lName} - ID : ${this.id}`;
   cardText.appendChild(fullName);
   const dep = document.createElement('p');
   dep.setAttribute('class','empText');
   dep.textContent = `Department:${this.depart}-Level:${this.level}`;
   cardText.appendChild(dep);
   const salary = document.createElement('p');
   salary.setAttribute('class','empText');
   salary.textContent = `salary = ${this.salary}`;
   cardText.appendChild(salary);
   const netSalary = document.createElement('p');
   netSalary.setAttribute('class','empText');
   netSalary.textContent = `net salary = ${this.netSalary}`;
   cardText.appendChild(netSalary);
    
}

//creat objects
const emp1 = new Employee(1000,'Ghazi','Samer','Administration','Senior','https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Ghazi.jpg');
const emp2 = new Employee(1001,'Lana','Ali','Finance','Senior','https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Lana.jpg');
const emp3 = new Employee(1002,'Tamara','Ayoub','Marketing','Senior','https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Tamara.jpg');
const emp4 = new Employee(1003,'Safi','Walid','Administration','Mid-Senior','https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Safi.jpg');
const emp5 = new Employee(1004,'Omar','Zaid','Development','Senior','https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Omar.jpg');
const emp6 = new Employee(1005,'Rana','Saleh','Development','Junior','https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Rana.jpg');
const emp7 = new Employee(1006,'Hadi','Ahmad','Finance','Mid-Senior','https://raw.githubusercontent.com/LTUC/new-prep-course-std/main/Day10/Task/assets/Hadi.jpg');

const main = document.getElementById('main');
const empCards = document.createElement('div');
empCards.setAttribute('class','empCards');
main.appendChild(empCards);

//invoke prototype functions
for(let i=0 ; i<employees.length ; i++){
    employees[i].calSalary();
    employees[i].calNetSalary();
    employees[i].render();
}
