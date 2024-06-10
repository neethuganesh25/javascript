// reduce() method

a=[10,11,12,13,2,7,3,6,1]

//w a p to find the highest of the given array
highest= a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log('the highest value is ',highest);
console.log('---------------------------------------');
// w a p to find the lowest of the given array
lowest= a.reduce((n1,n2)=>n1<n2?n1:n2)
console.log('the lowest value is',lowest);
console.log('---------------------------------------');

// w a p to find the sum of the given array
sum= a.reduce((n1,n2)=>n1+n2)
console.log('the sum is',sum);
