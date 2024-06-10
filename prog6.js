//[studid,studentname,student class,student course]

class Student{


constructor(sid,sname,sclass,scourse){
    this.studId=sid
    this.studName=sname
    this.studClass=sclass
    this.studCourse=scourse
    this.display()
}
display(){
    console.log(`student id:${this.studId} name:${this.studName} course:${this.studCourse}`);
}
}
const obj=new Student(1,'neethu','MCA','CS')
const obj1=new Student(2,'sandra','BCA','IOT')
const obj2=new Student(3,'adarsh','Bsc','Mern')
