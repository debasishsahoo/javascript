// Normal if Else
var age = 19;
var canDrive;
if (age > 16) {
    canDrive = 'yes';
} else {
    canDrive = 'no';
}
console.log('canDrive: ' + canDrive)

//ternary operator
var age = 19;
var canDrive = age > 16 ? 'yes' : 'no';
console.log(canDrive)

//Set Default Paramiter

function fun(val) {
    val = typeof val !== 'undefined' ? val : 20
    console.log(val)
}

fun()
fun(45)


//Perform multiple operations
var auth = 1
var regirect = auth ? (
    console.log('you will redirect to admin area'),
    '/admin'

) : (
    console.log('Access Denide'),
    '/403'
)
console.log(regirect)


//Simplify ternary operator
var locked = 1;
var canChanged = locked != 1 ? true : false;
console.log(canChanged)

var locked = 1;
var canChanged = locked != 1
console.log(canChanged)

//Use multiple JavaScript ternary operators
var speed = 120;
var msg = speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 'OK');
console.log(msg)

