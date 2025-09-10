const outputDiv = document.getElementById('output');

function printOutput(message) {
    outputDiv.textContent = message;
}

// === Count To Three Generator Demo ===
function* countToThree() {
    yield 1;
    yield 2;
    yield 3;
}

document.getElementById('counterDemo').addEventListener('click', () => {
    const counter = countToThree();
    const result = [
        counter.next(),
        counter.next(),
        counter.next(),
        counter.next()
    ];
    printOutput(JSON.stringify(result, null, 2));
});

// === Fibonacci Generator Demo ===
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

document.getElementById('fibonacciDemo').addEventListener('click', () => {
    const fibGen = fibonacci();
    const sequence = [];
    for (let i = 0; i < 10; i++) {
        sequence.push(fibGen.next().value);
    }
    printOutput(sequence.join(', '));
});

// === Dialogue Generator Demo ===
function* dialogue() {
    const name = yield "What's your name?";
    const age = yield `Hello ${name}! How old are you?`;
    return `Nice to meet you, ${name}. Age ${age}`;
}

document.getElementById('dialogueDemo').addEventListener('click', () => {
    const chat = dialogue();
    let step1 = chat.next().value;
    let step2 = chat.next('Alice').value;
    let step3 = chat.next(25).value;
    printOutput(`${step1}\n${step2}\n${step3}`);
});

// === Async Task Simulator Demo ===
function* asyncTaskSimulator() {
    yield new Promise(resolve => setTimeout(() => resolve("Task 1 done"), 1000));
    yield new Promise(resolve => setTimeout(() => resolve("Task 2 done"), 1500));
    yield new Promise(resolve => setTimeout(() => resolve("Task 3 done"), 800));
    return "All tasks completed";
}

document.getElementById('asyncTasksDemo').addEventListener('click', async () => {
    const tasks = asyncTaskSimulator();
    const results = [];
    for (const task of tasks) {
        results.push(await task);
    }
    printOutput(results.join('\n'));
});

// === Data Processing Pipeline Demo ===
function* dataProcessor(data) {
    const filtered = data.filter(item => item.active);
    yield filtered;
    
    const transformed = filtered.map(item => ({
        ...item,
        fullName: `${item.firstName} ${item.lastName}`
    }));
    yield transformed;
    
    const sorted = transformed.sort((a, b) => a.fullName.localeCompare(b.fullName));
    yield sorted;
    
    return "Processing complete";
}

document.getElementById('dataPipelineDemo').addEventListener('click', () => {
    const userData = [
        {firstName: "John", lastName: "Doe", active: true},
        {firstName: "Jane", lastName: "Smith", active: false},
        {firstName: "Bob", lastName: "Johnson", active: true}
    ];
    const processor = dataProcessor(userData);
    const step1 = processor.next().value;
    const step2 = processor.next().value;
    const step3 = processor.next().value;

    printOutput(
        `Step 1 (Filtered):\n${JSON.stringify(step1, null, 2)}\n\n` +
        `Step 2 (Transformed):\n${JSON.stringify(step2, null, 2)}\n\n` +
        `Step 3 (Sorted):\n${JSON.stringify(step3, null, 2)}`
    );
});

// === Pagination Generator Demo ===
function* paginate(array, pageSize) {
    for (let i = 0; i < array.length; i += pageSize) {
        yield array.slice(i, i + pageSize);
    }
}

document.getElementById('paginationDemo').addEventListener('click', () => {
    const items = Array.from({length: 12}, (_, i) => `Item ${i + 1}`);
    const pages = paginate(items, 5);
    const output = [];
    for (const page of pages) {
        output.push(`Page: [${page.join(', ')}]`);
    }
    printOutput(output.join('\n'));
});

// === Error Handling Generator Demo ===
function* errorProneGenerator() {
    try {
        yield 1;
        yield 2;
        throw new Error("Something went wrong!");
        yield 3;
    } catch (error) {
        yield `Error caught: ${error.message}`;
    } finally {
        yield "Cleanup completed";
    }
}

document.getElementById('errorHandlingDemo').addEventListener('click', () => {
    const gen = errorProneGenerator();
    const results = [
        gen.next().value,
        gen.next().value,
        gen.next().value,
        gen.next().value
    ];
    printOutput(results.join('\n'));
});

// === Generator Delegation Demo ===
function* delegatingGenerator() {
    yield* [1, 2, 3];
    yield* countToThree();
    yield "Final value";
}

document.getElementById('delegationDemo').addEventListener('click', () => {
    const delegator = delegatingGenerator();
    const results = [];
    for (const val of delegator) {
        results.push(val);
    }
    printOutput(results.join(', '));
});
