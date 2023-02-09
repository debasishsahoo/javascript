/*
 * Introduction to JavaScript array filter() method
 */

let cities = [
    { name: 'Delhi', population: 3792621 },
    { name: 'Kolkata', population: 8175133 },
    { name: 'Mumbai', population: 2695598 },
    { name: 'Bengaluru', population: 2099451 },
    { name: 'Hyderabad', population: 1526006 },
    { name: 'Chennai', population: 2894498 }
];

//using Conventional Method
let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}
console.table(bigCities);


//using filter
bigCities = cities.filter(function (e) {
    return e.population > 3000000;
});
console.table(bigCities);







//using optimizion filter
bigCities = cities.filter(city => city.population > 3000000);
console.table(bigCities);


cities.filter(city => city.population < 3000000)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ':' + city.population));



const results = [
    { id: 001, percentage: 92.7 },
    { id: 002, percentage: 87.9 },
    { id: 003, percentage: 82.7 },
    { id: 004, percentage: 62.7 },
    { id: 005, percentage: 91.7 },
    { id: 006, percentage: 59.7 },
    { id: 007, percentage: 63.7 }
]

let Data1 = [1, 2, undefined, 4, undefined, undefined, 7, 8, 9]


let Data2 = [1, 2, 0, 4, 0, 0, 7, 8, 9]


//! Q1.Only Show Student id of more then 80%

//! Q2. Only Show me number not the "undefined"

//! Q3. Only Show me number not the "0"

//! Q4. Create you Bio Data with Html,Css,Bootsrap

//! Q5.One Profile Page With html css (no Bootstrap ) for you Github







const numbers = [20, 40, 17, 99, 59, 77];
//! Q6.All Value Greater than 20  using function()
//! Q7.All Value Greater than 20  using Arraow function(()=>{})

const menu = [
    {
        name: "buttermilk pancakes",
        price: 15.99
    },
    {
        name: "diner double",
        price: 13.99
    },
    {
        name: "godzilla milkshake",
        price: 6.99
    },
    {
        name: "country delight",
        price: 20.99
    },
    {
        name: "egg attack",
        price: 22.99
    }
];

let priceRange = {
    lower: 15,
    upper: 25
};

//! Q7. removing any items with prices that aren't between 15 and 25. and out put must an Object

const users = ["John", "Doe", "Stephen", "Matt", "Abigail", "Susu"];

const topThree = users.filter((element, index) => {
    return index <= 2
});

console.log(topThree)

//! Q8. Show Top Three User
//! Q9. Show 50% of Users

const students = [
    { firstName: "John", lastName: "Doe", graduationYear: 2022 },
    { firstName: "Stephen", lastName: "Matt", graduationYear: 2023 },
    { firstName: "Abigail", lastName: "Susu", graduationYear: 2022 }
];


//! Q10. only Student whor are pass out year 2022
//! Q11. Show those Student by full name(Ex:John Doe)

const myArray = [-7, -5, -2, 2, 1, 3, 12, 14, 13, 15, 70, 17, 33, 25, 27, 30, 97];

//! Q12. Only Prime Number 

const random = ['1', 'blue', 2, '-4', 0, true, -3.4];

//! Q13. Only Number 

menu = [
    {
        name: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        status: "available"
    },
    {
        name: "diner double",
        category: "lunch",
        price: 13.99,
        status: "available"
    },
    {
        name: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        status: "available"
    },
    {
        name: "country delight",
        category: "breakfast",
        price: 20.99,
        status: "86"
    },
    {
        name: "egg attack",
        category: "lunch",
        price: 22.99,
        status: "available"
    }
];


//! Q14. want to filter out the non-breakfast items:
//! Q15. is country delight available if not Show Proper Message


let sciCourses = ["Mth101", "Chm201", "Bio301", "Mth203", "Mth205", 'Mth2346'];

//! Q16. only Show the Mth Couse
//! filtr,map,function,arraow function  but no loop


//!https://stackabuse.com/guide-to-javascripts-filter-method/











