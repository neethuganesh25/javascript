// H W  get,add,update,delete
student={
    rollno:12,
    name:'neethu',
    course:'MCA',
    location:'alp',
    
    
}
//add
student['age']=22
console.log(student);

//update
student.age+=10
console.log(student);

// delete
 delete student.location
 console.log(student);

// get
console.log(`name of student is  ${student.name}`);