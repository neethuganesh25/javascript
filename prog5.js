// [id ,name, designation,location,salary,experience]
 //[1000,'Neel','developer','kochi',25000,3]

 //oops

 class Employee{
    //property
    empName
    empDesig
    empLocation
    empSalary
    //constructor
    constructor(ename,eDesig,empLo,empSal){
     this.empName=ename
     this.empDesig=eDesig
     this.empLocation=empLo
     this.empSalary=empSal
    }
    //methods
    display(){
        console.log(`employee name is ${this.empName}`);
        
    }
 }
 //object
 const obj=new Employee('Neel','Developer','Kochi',25000)
 obj.display()

 const obj1=new Employee('Max','HR','TVM',20000)
 obj1.display()

