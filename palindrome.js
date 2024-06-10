num=101
reverse=0
rem=0
temp=num
while(num>0){
    rem=num%10
    reverse=(reverse*10)+rem
    num = Math.floor(num/10)

}
temp==reverse?console.log('palindrome'):console.log('not');;