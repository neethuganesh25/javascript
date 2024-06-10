for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=row;col++){
    if((row+col)%2==0){
        str=str+' 1 '
    }
    else{
        str=str+" 0 "
    }
}
console.log(str);
}