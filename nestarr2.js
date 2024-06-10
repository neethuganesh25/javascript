// w a p to find even nos from the given array

b=[[2,10,][50,25],[2,100],[7,66],[36,9]]

a=b.flat()
console.log(a);

for(let num of a){
    if(num %2==0){
        console.log(num);
    }
}