str='neethu'
// startsWith
console.log(str.startsWith('nee'));
console.log(str.endsWith('u'));
console.log('===========================');
console.log(str.startsWith('Nee'));
console.log(str.endsWith('U'));
console.log('===========================');
console.log(str.toUpperCase());
console.log('===========================');
console.log(str.trim());

str1='NEETHU'
console.log(str1.toLowerCase());
console.log('--------------------');
str2='  neethu   '
str3=str2.trim();
console.log(str3);

console.log('*************************');
str4='welcome'
str5=str4.substring(1)
console.log(str5);
console.log('--------------------');
console.log(str4.slice(1,4));
console.log(str4.slice(-4));
console.log('===========================');
//split()
str=' neethu ganesh nandu '
console.log(str.split('  '))
console.log('--------------------');
// replace
str= ' neethu ganesh  '
console.log(str.replace('neethu','nandu'))
console.log('--------------------');

//trim with replace
s='hello  world  '
console.log(s.replaceAll('  ',' '));

//replaceAll

s1=' i joined microsoft .But the office of microsoft is too far.'
console.log(s1.replaceAll('microsoft','google'));