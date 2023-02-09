/**
 * JavaScript Array reduce & reduceRight
 */

let numbers = [1, 2, 3];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

sum = numbers.reduce(function (accumulator, current) {
    return accumulator + current;
});
console.log(sum);

//reduce((sum,1){
//sum=sum+1
//})

//reduce((1,2){
//sum=1+2
//})

//reduce((3,3){
//sum=3+3
//})






//JavaScript Array reduce()
let shoppingCart = [{
    product: 'phone',
    qty: 1,
    price: 699
},
{
    product: 'Screen Protector',
    qty: 1,
    price: 9.98
},
{
    product: 'Memory Card',
    qty: 2,
    price: 20.99
}
];

let total = shoppingCart.reduce(function (acc, curr) {
    return acc + curr.qty * curr.price;
},0);


console.log(total);

//JavaScript Array reduceRight()

numbers = [1, 2, 3];
sum = numbers.reduceRight(function (acc, curr) {
    console.log('acc: ', acc, 'curr:', curr);
    return acc + curr;
});
console.log(sum);
