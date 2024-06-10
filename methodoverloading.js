class A{
    methoda(){
        console.log('inside first method');
    }
    methoda(n){
        this.n1=n
        console.log(`inside the method with argument ${this.n1}`);
    }
    methoda(n1,m1){
        
        console.log(`method with argumet ${n1}  and ${m1}`);
    }
}
//obj
const obj=new A()
obj.methoda()