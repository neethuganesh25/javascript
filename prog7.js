//write methodsfor solving the given qns

class Bank{
    //property
    accountDetails={
        1000:{acno:1000,username:'userone',password:'userone',balance:50000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{acno:1003,username:'userfour',password:'userfour',balance:6000}
    }


// validate a given account number
validate(acno){
  return   acno in this.accountDetails?'valid':'invalid'
  
}

//authenticate the account

authenticate(acno,password){
   return acno==password in this.accountDetails
}
// check the balance

balance(){
    
}
// fund transfer
fundTransfer(fromAcno,ToAcno,fpswd,amount){
  if(this.validate(fromAcno)&& this.validate(ToAcno)){
    if(this.accountDetails[fromAcno].password==fpswd){
      if(this.accountDetails[fromAcno].balance>=amount){
        console.log(`current balance of ${fromAcno} is ${this.accountDetails[fromAcno].balance} and ${ToAcno}
         is ${this.accountDetails[ToAcno].balance} before fund transfer`);
         this.accountDetails[fromAcno].balance-=amount
        this.accountDetails[ToAcno].balance+=amount
      console.log(`current balance of ${fromAcno}is ${this.accountDetails[fromAcno].balance} and ${ToAcno} is ${this.accountDetails[ToAcno].balance} after fund transfer`);  
       }
       else{
        console.log('insufficeint balance');
       }
    }
    else{
      console.log('invalid password');
    }
  }else{
    console.log('invalid account number');
  }
}
}
const user=new Bank()
console.log(user.validate(1000))
const user1=new Bank()
console.log(user1.authenticate(1000,'userone')?'same':'no');
console.log(user.fundTransfer(1000,1001,'userone',100))