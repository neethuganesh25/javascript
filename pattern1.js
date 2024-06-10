
for(i=1;i<=4;i++){
    str=""
    for(j=1;j<=i;j++){
        str=str+" * "
    }
    console.log(str);
}

console.log('---------------------------------------------');

 for(row=1;row<=4;row++){          
    
    str=''
    for(col=1;col<=row;col++){
        str=str+row+ " "
    }
    console.log(str); 
} 
console.log('---------------------------------------------');

for(row=1;row<=4;row++){       //1//1<=4 // 2//2<=4
    str=''                     // ' ' 
    for(col=1;col<=row;col++){ // 1/ 1<=1 , 2,2<=1 // 
        str=str+col+" "        // 1 , 
    }
    console.log(str);  // 1 //
}