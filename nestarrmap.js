a=[10,11,12,13,14,15]
// find the sqaure of each element in the given array
sq=a.map(num=>num**2)
console.log(sq);
console.log('----------------------------------------------------');

// for of
for(let num of a){
    console.log(num**2);
}
console.log('----------------------------------------------------');

//forEach

a.forEach(num => {
    console.log(num**2);
});