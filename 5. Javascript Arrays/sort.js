/**
 * Introduction to JavaScript Array sort() method
 */
let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort();
console.log(numbers);

numbers = [0, 10, 1, 20, 2, 30, 3];
numbers.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(numbers);





let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
animals.sort();
console.log(animals);

//Descending order
animals.sort((a, b) => {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
});
console.log(animals);

//Number Array Sorting
let scores = [9, 80, 10, 20, 5, 70];
scores.sort((a, b) => a - b);
console.log(scores);
scores.sort((a, b) => b - a);
console.log(scores);

//Sorting an array of objects by a specified property
let employees = [
    { name: 'Azim', salary: 76000, hireDate: "July 1, 2023" },
    { name: 'Anjani', salary: 75000, hireDate: "August 15, 2023" },
    { name: 'Dinda', salary: 78000, hireDate: "December 12, 2023" },
    { name: 'Rasmie', salary: 78000, hireDate: "June 07, 2023" },
    { name: 'jit', salary: 78000, hireDate: "July 12, 2022" }
];

// Sorting objects by a numeric property
employees.sort(function (x, y) {
    return x.salary - y.salary;
});
console.table(employees);


// Sorting objects by a string property
employees.sort(function (x, y) {
    let a = x.name.toUpperCase(), b = y.name.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
});
console.table(employees);


//Sorting objects by the date property
employees.sort(function (x, y) {
    let a = new Date(x.hireDate), b = new Date(y.hireDate);
    return a - b;
});
console.table(employees);

let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];

console.log(rivers.sort())

