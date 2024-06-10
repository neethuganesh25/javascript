x=22
y=2
z=25


if(x>y && x>z)
{
    console.log(`${x} is larger`);
    console.log(`descending order is ${y},${z},${x}`);
}
else if(y>z && y>x){
    console.log(`${y} is larger`)
    console.log(`descending order is ${z},${x},${y}`);
}
else{
    console.log(`${z} is larger`)
    console.log(`descending order is ${z},${x},${y}`);
    
}