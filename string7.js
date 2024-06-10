var car = {
    name:'boleno',
    model:'hatch back',
    manufacturer:'maruti',
    price:'10lakh'
}

// w a p to print price model and manufacturer of the given car

console.log(`model is ${car.model} manufacturer is ${car.manufacturer} and price is${car.price}` );

//  w a p to add varient key to the car object with value has "manuel"
car['varient']=['manuel']
console.log(car);
console.log('------------------------------');

 // w ap to add a new value 'automatic' to the key varient

 car.varient.push('automatic')
 console.log(car);
 console.log('----------------------------------');
 // w a p to add a new key as 'colour' with value as red,blue and white
car['color']=['red','blue','white']
car.color.push('green')
                               
console.log(car);