//        *
//      *   *
//     *  *   *
//    *  *  *   *

  for(i=1;i<=4;i++){ //row
    str=''
    for(k=4;k>i;k--){ // for creating space//
        str=str+" "
    }
    for(j=1;j<=i;j++){ // column
        str=str+"* "
    }
    console.log(str);
}
console.log('---------------------------------------------');



   //     *
  //   *     *
  //  *        *
  // * * * * * * *

  for(i=1;i<=4;i++){ //row
    str=''
    
    for(j=1;j<=7;j++){ // column
        
    if(i+j==5 || j-i==3 || i==4 ){
        str=str+"*"
       
    }
    else
str=str+" "
  }
  console.log(str);
}