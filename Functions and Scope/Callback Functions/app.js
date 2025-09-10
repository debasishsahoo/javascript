const outputDiv = document.getElementById('output');

// Helper to print output
function printOutput(message) {
    outputDiv.textContent = message;
}

// 1. withLogging HOF
function withLogging(fn, functionName) {
    return function(...args) {
        console.log(`Calling ${functionName} with arguments:`, args);
        const result = fn(...args);
        console.log(`${functionName} returned:`, result);
        return result;
    };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add, 'add');

document.getElementById('loggedAddBtn').addEventListener('click', () => {
    const result = loggedAdd(5, 3);
    printOutput(`Logged Add: 5 + 3 = ${result}`);
});

// 2. createMultiplier HOF
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

document.getElementById('multiplierBtn').addEventListener('click', () => {
    const output = [
        `Double of 5: ${double(5)}`,
        `Triple of 5: ${triple(5)}`,
        `Quadruple of 5: ${quadruple(5)}`
    ].join('\n');
    printOutput(output);
});

// 3. createValidator HOF
function createValidator(rules) {
    return function(data) {
        const errors = [];
        for (const field in rules) {
            const value = data[field];
            const rule = rules[field];
            
            if (rule.required && (value === undefined || value === '')) {
                errors.push(`${field} is required`);
            }
            
            if (rule.minLength && value && value.length < rule.minLength) {
                errors.push(`${field} must be at least ${rule.minLength} characters`);
            }
            
            if (rule.pattern && value && !rule.pattern.test(value)) {
                errors.push(`${field} format is invalid`);
            }
        }
        return { isValid: errors.length === 0, errors };
    };
}

const validateUser = createValidator({
    name: { required: true, minLength: 2 },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    age: { required: true }
});

document.getElementById('validateUserBtn').addEventListener('click', () => {
    const valid = validateUser({
        name: 'John',
        email: 'john@example.com',
        age: 25
    });

    const invalid = validateUser({
        name: 'J',
        email: 'invalid-email'
    });

    const output = [
        `Valid User: ${JSON.stringify(valid)}`,
        `Invalid User: ${JSON.stringify(invalid)}`
    ].join('\n');

    printOutput(output);
});

// 4. Functional composition
function compose(...fns) {
    return function(value) {
        return fns.reduceRight((acc, fn) => fn(acc), value);
    };
}

const addTax = price => price * 1.08;
const addShipping = price => price + 9.99;
const formatCurrency = price => `$${price.toFixed(2)}`;

const calculateTotal = compose(formatCurrency, addShipping, addTax);

document.getElementById('calculateTotalBtn').addEventListener('click', () => {
    const total = calculateTotal(100);
    printOutput(`Total Price: ${total}`);
});

// 5. Partial application
function partial(fn, ...presetArgs) {
    return function(...remainingArgs) {
        return fn(...presetArgs, ...remainingArgs);
    };
}

const greetWith = (greeting, punctuation, name) => `${greeting}, ${name}${punctuation}`;
const sayHello = partial(greetWith, "Hello", "!");
const askQuestion = partial(greetWith, "Hello", "?");

document.getElementById('partialAppBtn').addEventListener('click', () => {
    const output = [
        sayHello('Alice'),
        askQuestion('Bob')
    ].join('\n');

    printOutput(output);
});

// 6. Memoization
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Cache hit for:', args);
            return cache.get(key);
        }
        console.log('Computing for:', args);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const slowFibonacci = n => {
    if (n <= 1) return n;
    return slowFibonacci(n - 1) + slowFibonacci(n - 2);
};

const fastFibonacci = memoize(slowFibonacci);

document.getElementById('fibonacciMemoBtn').addEventListener('click', () => {
    const first = fastFibonacci(10);
    const second = fastFibonacci(10);
    const output = `Fibonacci(10):\nFirst Call: ${first}\nSecond Call (from cache): ${second}`;
    printOutput(output);
});
