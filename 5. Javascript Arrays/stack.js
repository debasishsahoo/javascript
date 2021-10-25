//JavaScript Array type provides the push() and pop() methods that allow you to use an array as a stack.

//push()
let stack = [];

stack.push(1);
console.log(stack);

stack.push(2);
console.log(stack);

stack.push(3);
console.log(stack);

stack.push(4);
console.log(stack);

//pop()
console.log(stack.pop());
console.log(stack);

console.log(stack.pop());
console.log(stack);

console.log(stack.pop());
console.log(stack);

console.log(stack.pop());
console.log(stack);

console.log(stack.pop());
console.log(stack);



//Reverse a string using a JavaScript stack
function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('oohas hsisabad'));
//oohas hsisabad