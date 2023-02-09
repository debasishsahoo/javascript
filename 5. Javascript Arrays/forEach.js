/**
 * JavaScript Array forEach
 */

//JavaScript Array forEach()

let ranks = ['A', 'B', 'C'];

for (let i = 0; i < ranks.length; i++) {
    console.log(ranks[i]);
}

ranks.forEach(function (e) {
    console.log(e);
});

ranks.forEach(e => {
    console.log(e);
});