 // write a program to print a number is prime or not //
  
 num=5
 isprime=true
 for (i = 2; i <num; i++) {
    if (num % i == 0) {
       isprime=false
       break
    }
}
    isprime?console.log(`${num} is prime`):console.log(`${num} is not prime`);;
