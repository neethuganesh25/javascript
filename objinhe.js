baleno={
    model:'hatch back',
    manufacturer:'maruti',
    varient:['automatic','manuel'],
    price:150000
}
glanza={
    manufacturer:'toyota'
}

glanza.__proto__=baleno
console.log(glanza.model);
console.log(glanza.price);