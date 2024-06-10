// write a prgm to display all prime  numbers from 2 to 50 //

for(i=2;i<=50;i++){  // i=2,2<50 // 3,3<50 
let flag=0           // flag=0
for(j=2;j<i;j++){    // j=2,2<2   // 2,2<3  
    if(i%j==0){      //  2%3==0
        flag=1
        break
    }
}
    if(i>0 && flag==0 ){ // 2>0 && flag=0  // 3>0 
        console.log(i);    // 2/ 3
    }
}

