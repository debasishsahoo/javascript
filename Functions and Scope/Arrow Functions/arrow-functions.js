document.getElementById('addBtn').addEventListener('click', () => {
    const add = (a, b) => a + b;
    console.log("Add 3 + 4 =", add(3, 4));  // 7
});

document.getElementById('doubleBtn').addEventListener('click', () => {
    const double = x => x * 2;
    console.log("Double 5 =", double(5));  // 10
});

document.getElementById('randomBtn').addEventListener('click', () => {
    const getRandom = () => Math.random();
    console.log("Random number:", getRandom());
});

document.getElementById('processNameBtn').addEventListener('click', () => {
    const processName = name => {
        const trimmed = name.trim();
        const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
        return capitalized;
    };
    console.log('Processed Name:', processName("  jOHN  "));  // "John"
});

document.getElementById('createPointBtn').addEventListener('click', () => {
    const createPoint = (x, y) => ({x, y});
    console.log('Point:', createPoint(3, 4));  // {x: 3, y: 4}
});

document.getElementById('arrayMethodsBtn').addEventListener('click', () => {
    const numbers = [1, 2, 3, 4, 5];

    const doubled = numbers.map(n => n * 2);
    const evens = numbers.filter(n => n % 2 === 0);
    const sum = numbers.reduce((acc, n) => acc + n, 0);

    console.log('Doubled:', doubled);       // [2, 4, 6, 8, 10]
    console.log('Evens:', evens);           // [2, 4]
    console.log('Sum:', sum);               // 15
});

document.getElementById('timerBtn').addEventListener('click', () => {
    class Timer {
        constructor() {
            this.seconds = 0;
        }

        start() {
            setInterval(() => {
                this.seconds++;
                console.log(`Timer: ${this.seconds}s`);
            }, 1000);
        }
    }

    const timer = new Timer();
    timer.start();
});

document.getElementById('pipeBtn').addEventListener('click', () => {
    const pipe = (...functions) => value => 
        functions.reduce((acc, fn) => fn(acc), value);

    const addOne = x => x + 1;
    const multiplyByTwo = x => x * 2;
    const square = x => x * x;

    const complexOperation = pipe(addOne, multiplyByTwo, square);

    console.log('Complex Pipe Operation Result:', complexOperation(3));  // 64
});

document.getElementById('discountBtn').addEventListener('click', () => {
    const getDiscount = customerType => 
        customerType === 'premium' ? 0.20 :
        customerType === 'gold' ? 0.15 :
        customerType === 'silver' ? 0.10 : 0;

    console.log('Discount for premium:', getDiscount('premium'));  // 0.20
});
