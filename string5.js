// [array]
//[id,name,designation,location,salary,experience]
arr=[1000,'Noel','developer','kochi',25000,3]

employee={
    id:1000,
    name:'noel',
    desig:'developer',
    location:'kochi',
    salary:25000,
    exp:3,
    age:22
    
}
console.log(arr[2]);
// console.log(typeof(arr));
// console.log(typeof(employee));

// different ways to access values stored in a key
console.log(employee['desig']);    // in object the key is used insted of index in array ,object is a non primitive datatype

console.log(employee.desig);
console.log('-------------------------------------');
// how to access a key from an object
// ans: in method is used to follow the keys in the object
console.log('===============================================');
for(let key in employee){
    console.log(key);
}
console.log('--------------------------------------');

// w a p to check whether location key is present in the given object
console.log('+++++++++++++++++++++++++++++++++++');
ispresnt=false
for(let i in employee){
    console.log(i);
    if(i=='location'){
        ispresnt=true
        
    }
}
console.log(ispresnt?'yes':'no'); // OR
console.log('+++++++++++++++++++++++++++++++++++');
if('emplocation' in employee){
    console.log('present');
}
else{
    console.log('not present');

}
console.log('----------------------------');
  // how to add a key: value pair into an object 
  //  objname['key']=value

  employee['dist']='kollam'
 
  console.log(employee);
console.log('------------------------------------');
// check 'gender' key is present in the given employee.if present print else add gender key into the object with value male

console.log(('gender' in employee)?'present':'not present');
employee['gender']='male'
console.log(employee);
console.log('--------------------------------------------------');
 

// howto update a value in an object
employee.age+=5
console.log(employee);
console.log('--------------------------------------------------');
  

// how to delete a value in an object
   // -- delete method

   delete employee.age
   console.log(employee);
  
   console.log('--------------------------------------------------');
 