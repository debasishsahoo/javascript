const outputDiv = document.getElementById('output');

function printOutput(message) {
    outputDiv.textContent = message;
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMemoized(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
    return memo[n];
}

function power(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent < 0) return 1 / power(base, -exponent);
    if (exponent % 2 === 0) {
        const half = power(base, exponent / 2);
        return half * half;
    } else {
        return base * power(base, exponent - 1);
    }
}

function isPalindrome(str, start = 0, end = null) {
    str = str.replace(/\s+/g, '').toLowerCase();
    if (end === null) end = str.length - 1;
    if (start >= end) return true;
    if (str[start] !== str[end]) return false;
    return isPalindrome(str, start + 1, end - 1);
}

function flattenArray(arr) {
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

function getPermutations(arr) {
    if (arr.length <= 1) return [arr];
    const permutations = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const remainingPermutations = getPermutations(remaining);
        for (const perm of remainingPermutations) {
            permutations.push([current, ...perm]);
        }
    }
    return permutations;
}

function isEven(n) {
    if (n === 0) return true;
    return isOdd(n - 1);
}

function isOdd(n) {
    if (n === 0) return false;
    return isEven(n - 1);
}

// Handlers
function runFactorial() {
    const n = parseInt(document.getElementById('factorialInput').value);
    const result = factorial(n);
    printOutput(`factorial(${n}) = ${result}`);
}

function runFibonacci() {
    const n = parseInt(document.getElementById('fibonacciInput').value);
    const result = fibonacciMemoized(n);
    printOutput(`fibonacci(${n}) = ${result}`);
}

function runPower() {
    const base = parseInt(document.getElementById('powerBase').value);
    const exp = parseInt(document.getElementById('powerExp').value);
    const result = power(base, exp);
    printOutput(`${base}^${exp} = ${result}`);
}

function runPalindrome() {
    const str = document.getElementById('palindromeInput').value;
    const result = isPalindrome(str);
    printOutput(`Is "${str}" a palindrome? ${result}`);
}

function runFlatten() {
    const input = document.getElementById('flattenInput').value;
    const arr = eval(`[${input}]`);  // Warning: For demo only (avoid eval in production)
    const result = flattenArray(arr);
    printOutput(`Flattened Array:\n[${result.join(', ')}]`);
}

function runPermutations() {
    const input = document.getElementById('permInput').value;
    const arr = input.split(',').map(x => isNaN(x) ? x : Number(x));
    const result = getPermutations(arr);
    printOutput(`Permutations:\n${JSON.stringify(result, null, 2)}`);
}

function runEvenOdd() {
    const n = parseInt(document.getElementById('evenOddInput').value);
    const even = isEven(n);
    printOutput(`${n} is Even? ${even}\n${n} is Odd? ${!even}`);
}
