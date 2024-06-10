for(i=1;i<=10;i++){
    str=''
    if(i<5){
        for(space=5;space>i;space--){
            str+=" "
        }
    for(j=1;j<=i;j++){
        
            str+=' *'
        }
    }
        else {
           for(space=6;space<=i;space++){
            str+=" "
           }
           for(j=10;j>i;j--){
            str+=" *"
           }
        }
     

    
    console.log(str);
}
