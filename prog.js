//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log('All product name');
console.log('---------------------');
products.forEach(pro => {
    console.log(pro[1]);
});


//2. display product whose price < Rs.50
console.log('product whose price < Rs.50');
console.log('----------------------');
price=products.filter(price=>(price[2]<50))
console.log(price);

//3. print price of oreo

console.log(' print price of oreo');
console.log('----------------------');
oreo=products.find(price=>price[1]=='oreo')
console.log(oreo[2]);

//4. print costly product name
console.log('costly product name');
console.log('-------------------');
costly=products.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(costly[1]);

//5. display out of stock product
console.log('out of stock product');
console.log('-----------------------------');
products.filter(pro=>pro[3]==0).forEach(item=>console.log(item[1]))


//6. sort products based on stock in decsending order
console.log('products based on stock in decsending order');
console.log('-------------------------------------------------');
desc=products.sort((n1,n2)=>n2[3]-n1[3]).forEach(item=>console.log(item[1]))
console.log('----------------------------------------------');

//7. print product having maximum available stock
console.log('product having maximum available stock');
max=products.reduce((pro1,pro2)=>pro1[3]>pro2[3]?pro1:pro2)
console.log(max[1]);
console.log('----------------------------------------------');

//8. is there any product can be purchased by Rs. 10
console.log('Is there any product can be purchased by Rs. 10');
purchase=products.some(pro=>pro[2]<=10)
console.log(purchase?'yes':'no');
console.log('-----------------------------------------------');
//9. Is there any product in the range of 10 to 30
console.log('Is there any product in the range of 10 to 30');
b=products.some(pro=>pro[2]=10 && pro[2]<=30)
console.log(b?'yes':'no');
console.log('---------------------------------------------');
//10. print all products in the range of 10 to 30
console.log('all products in the range of 10 to 30');
products.filter(pro=>pro[2]>=10 && pro[2]<=30).forEach(item=>console.log(item))
