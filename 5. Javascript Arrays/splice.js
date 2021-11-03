//JavaScript Array splice: Delete, Insert, and Replace

/**
 * Deleting elements using JavaScript Array’s splice() method
 * 
 * Syntax: Array.splice(position,num);
 * 
 */

let scores = [1, 2, 3, 4, 5];
console.log('scores:', scores)

let deletedScores = scores.splice(0, 3);
console.log('deletedScores:', deletedScores)

//After call the  Spice Method  the value of scores
console.log('scores:', scores)

/**
 * Inserting elements using JavaScript Array splice() method
 *
 * Syntax: Array.splice(position,0,new_element_1,new_element_2,...);
 *
 */

let colors = ['red', 'green', 'blue'];
colors.splice(2, 0, 'black')
console.log('colors:', colors)

colors.splice(1, 0, 'yellow', 'pink');
console.log(colors);

/**
 * Replacing elements using JavaScript Array splice() method
 *
 * Syntax: Array.splice(position,how many element to delete,new_element);
 */
let languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(1, 1, 'Python');
console.log(languages);

languages.splice(2, 1, 'C#', 'Swift', 'Go');
console.log(languages);




