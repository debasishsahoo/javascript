//?Outputs an informational message to the console
function info() {
    console.info('This is console.info');
    console.info('This is information');
    console.info({ firstName: 'abc', lastName: 'xyz' });
    console.info([1, 2, 3, 4, 5]);
}
//todo:Outputs a warning message to the console
function warn() {
    console.warn('This is console.warn');
}
//@param:Outputs a message to the console
function log() {
    console.log('This is console.log');
    console.log('name');
    console.log(1);
    console.log(true);
    console.log(['a', 'b', 'c', 'd']);
    console.log({ one: 1, two: 2, three: 3 });
}
// ! Outputs an error message to the console
function error() {
    console.error('This is console.error');
}
//* Clears the console
function clr() {
    console.clear();
}
//! Writes an error message to the console if the assertion is false
function assert() {
    console.assert(document.getElementById("demo"), 'When the expression is false, an error message is printed to the console.');
}
//*Logs the number of times that this particular call to count() has been called
function CountNum() {
    for (i = 0; i < 10; i++) {
        console.count(i);
    }
}


//? First function is called the Second Function and this call the trace
function FunctionOne() {
    FunctionTwo();
}
function FunctionTwo() {
    console.trace();
}

//Todo:Displays tabular data as a table
function studentDetails(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
let steve = new studentDetails('Steve', 'Smith');
let peter = new studentDetails('Peter', 'parker');
let harry = new studentDetails('Harry', 'potter');

function tbl() {
    console.table(['Zero', 'One', 'Two']);
    console.table([steve, peter, harry]);
}
//!Console   //!Console:frown
//? output
//* info
//Todo:Outputs an informational message to the console
//@param:
function timeCalculator() {
    i = 0;
    console.time('While loop for 10 iterations');//Time Start Here
    while (i < 10) {
        i++;
    }
    console.timeEnd('While loop for 10 iterations');//Time end method
}

function GroupDisscurction() {
    console.group('Different types of programming languages'); // Group Method with parameter             
    console.log('JavaScript');
    console.log('Java');
    console.log('Python');
    console.log('C');
    console.log('C++');
    console.groupEnd(); // GroupEnd Method   
    console.groupCollapsed();
    console.group('Web development skills');// Group Method with parameter 
    console.log('HTML');
    console.log('CSS');
    console.log('JavaScript');
    console.groupEnd();
}

function CustomCss() {
    const style1 = "color: fuchsia";
    const style2 = "background-color: fuchsia ; color: white ; font-weight: bold ;font-size: 20px ; font-style: italic ; text-decoration: underline ; font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ; ";
    const style3 = "display: inline-block ; border: 3px solid red ; border-radius: 7px ;padding: 10px ; margin: 20px ;";
    const style4 = "display: inline-block ; background-image: url( 'https://bennadel.github.io/JavaScript-Demos/demos/console-log-css/rock.png' ) ; " +
        "background-size: cover ; padding: 10px 175px 158px 10px ; " +
        "border: 2px solid black ; font-size: 11px ; line-height: 11px ; " +
        "font-family: monospace ;";

    console.log("%cAltering the text color", style1);
    console.log("%cAltering the text experience", style2);

    // NOTE: In this demo, inline-block isn't needed in Chrome; but, it is needed in
    // Firefox or the block properties, like padding, don't work. Trying to use
    // "block" will work in Chrome; but, will go full-width in Firefox.
    console.log("%cAltering the box display", style3);

    // NOTE: Background-images work in Chrome, but not in Firefox. Also, at least
    // locally, only fully qualified URLs seems to work (but that may have been
    // something I was messing up).
    // --
    // Also, it doesn't look like width/height work on box-model. As such, I am using
    // padding to push-out the box size.
    console.log("%cBackground image", style4);
    // The same CSS styling can be used with many of the other console methods, like
    // the .group() method.
    console.group("%cGrouped Output", "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;");
    console.log("Groups are cool for grouped stuff.");
    console.log("Totes magotes");
    console.groupEnd();

}
function ViolationFunc() {
    const duration = 3000;
    const start = new Date().getTime();
    while (new Date().getTime() < start + duration) {
        //! it will Block The thrade  for 3 Seconds
    }
}

function CustomError() {
    document.getElementById('demo').innerHTML = 'Click Me';
}
function NetWorkError() {
    fetch('/styles')
    //! nothing is returned

}