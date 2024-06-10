text= 'hai hello all hello world all'
// w a p toprint the word count from the given string
// p={hai:1,hello:2,all:2,world:1}
// 1) converts the text into array of word
words=text.split(' ')
console.log(words);
// create a new empty object
obj={}
// 3)fetch each words from the array
for(word of words){
    //4) check each word is present in the created object
    if(word in obj){
    //5) if present increment the count
        obj[word]+=1
    }
    else{
        // else add a new key:value to the object
        obj[word]=1
    }
} //7) display the object
console.log(obj);
console.log('---------------------------------------------------');

//  array method

wc={}
text.split(' ').forEach(item =>item in wc ?wc[item]+=1:wc[item]=1);
console.log(wc);