sentence='good morning all'
// w a p to print all vowels in the given sentence.

vowels=['a','e','i','o','u','A','E','I','O','U']
character=sentence.split('')
console.log(character);
console.log('==============================');
for(let char of character){
   
    if(vowels.includes(char)){
        console.log(char);
    }
}

// another method
console.log('-------------------------------------------');
character.filter(char=>vowels.includes(char)).forEach(item => {console.log(item);});
console.log('-----------------------------------------------');
    
// another method
Array.from(sentence).filter(char=>vowels.includes(char)).forEach(Element=>{console.log(Element);});
