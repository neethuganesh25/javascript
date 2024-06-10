array=[10,20,30,80,30,20,50,80,60,70,10,20,10]
// w a p to find the number count from the given array and display as an object
numcount={}
for( num of array){
    if(num in  numcount){
        numcount[num]+=1
    }
    else{
        numcount[num]=1
    }
} console.log(numcount);
console.log('---------------------------------------------');
//OR
nc={}
// array=[10,20,30,80,30,20,50,80,60,70,10,20,10]

array.forEach(item =>item in nc ?nc[item]+=1:nc[item]=1);
console.log(nc);
console.log('---------------------------------------------');
