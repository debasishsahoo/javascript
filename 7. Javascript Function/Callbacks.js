//javascript
let numbers = [1, 2, 4, 7, 3, 5, 6];
function isOddNumber(number) {
    return number % 2;
}
let oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers);

//in ES6
oddNumbers = numbers.filter(number => number % 2);
console.log('oddNumbers:', oddNumbers)











//Synchronous callback functions
numbers = [1, 2, 4, 7, 3, 5, 6];
numbers.sort((a, b) => a - b);
console.log(numbers);













//Asynchronous callback functions
function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        // process the picture once it is completed
        callback(url);
    }, 3 * 1000);  
}

function process(picture) {
    console.log(`Processing ${picture}`);
}
let url = 'https://www.w3schools.com/html/pic_trulli.jpg';
download(url, process);

