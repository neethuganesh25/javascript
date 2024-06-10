str='hello'
console.log(str[3]); // index same as that of array

// w a p to check whether the given string is palindrome or not
// important ***
str='malayalam'
 start=0
 end=str.length-1
 ispal=true
 while(start<end){ 
    if(str[start]!=str[end]){ 
        ispal=false 
    }
    start++  
    end-- 
 }
 console.log(ispal?'yes':'no');
console.log('-------------------------------');
 // for method
 str1='neethu'
pal=''
 for(i=str1.length-1;i>=0;i--){ //i=5, 5>0 4>0 3>0 2>0 1>0 0>=0
pal+=str1[i] // pal[uhteen]
 }
 console.log(str1==pal?'palindrome':'not palindrome');
 