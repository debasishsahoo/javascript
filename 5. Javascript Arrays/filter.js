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

