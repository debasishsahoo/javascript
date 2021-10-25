let count = 1;
while (count < 10) {
    console.log(count);
    count += 2;
}

let rand = [];
let count = 0;
const size = 5;

while (count < size) {
    rand.push(Math.round(Math.random() * 10))
    count++;
    console.log('The Current Size of Array is ' + count);
}

console.log(rand);