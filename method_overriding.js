class A{
    methoda(){
        console.log('inside first method');
    }
}
class B extends A{
    methoda(){
        console.log('inside second method');
    }
    methoda(){
        console.log('inside the third method');
    }
}
//obj
const obj=new B()
obj.methoda()