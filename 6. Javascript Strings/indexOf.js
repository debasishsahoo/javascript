//Using indexOf() method 
let str = 'finding substring in string';
let index = str.indexOf('str');

console.log(index);

//Using indexOf() to count occurrences of a substring in a string
str = 'finding substring in string';
index = str.indexOf('str');

console.log(index);

//Using indexOf() to count occurrences of a substring in a string
str = 'You do not know what you do not know until you know.';
let substr = 'know';
let count = 0;

index = str.indexOf(substr);
while (index !== -1) {
    count++;
    index = str.indexOf(substr, index + 1);
}

console.log(count);

//The indexOf() and case-sensitivity
str = 'JS indexOf';
substr = 'js';

index = str.indexOf(substr);

console.log(index);

index = str.toLocaleLowerCase().indexOf(substr.toLocaleLowerCase());

console.log(index);



//Using lastIndexOf() method
str = 'JavaScript';

index = str.lastIndexOf('a');
console.log(index);

index = str.lastIndexOf('a', 2);
console.log(index);

//The lastIndexOf() and case-sensitivity
str = 'Hello, World!';
substr = 'L';

index = str.lastIndexOf(substr);

console.log(index); 

index = str.toLocaleLowerCase().lastIndexOf(substr.toLocaleLowerCase());

console.log(index);

//Extracting a substring to the end of the string
str = 'JavaScript Substring';
substring = str.substring(11);

console.log(substring);

//Extracting domain from the email
let email = 'john.doe@gmail.com';
let domain = email.substring(email.indexOf('@') + 1);

console.log(domain);

//JavaScript String slice()
email = 'john@example.com'
localPart = email.slice(0,email.indexOf('@'));

console.log(localPart);

//JavaScript String includes()
email = 'admin@example.com';
console.log(email.includes('@'));

str = 'JavaScript String';
console.log(str.includes('Script'));
console.log(str.includes('Script', 5));


