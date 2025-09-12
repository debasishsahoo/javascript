function showOutput(title, value) {
    const container = document.getElementById('output-container');
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="title">${title}</div>
      <div class="output">${JSON.stringify(value)}</div>
    `;
    container.appendChild(card);
}

document.getElementById('runBtn').addEventListener('click', () => {
    document.getElementById('output-container').innerHTML = ""; // Clear previous results

    // 1. Array Literal
    let fruits = ['apple', 'banana', 'orange'];
    let numbers = [1, 2, 3, 4, 5];
    let mixed = ['hello', 42, true, null];
    showOutput('Array Literal - Fruits', fruits);
    showOutput('Array Literal - Numbers', numbers);
    showOutput('Array Literal - Mixed', mixed);

    // 2. Array Constructor
    let emptyArray = new Array();
    let sizedArray = new Array(5); // Creates array with 5 empty slots
    let constructorArray = new Array('a', 'b', 'c');
    showOutput('Array Constructor - Empty', emptyArray);
    showOutput('Array Constructor - Sized (5 slots)', sizedArray);
    showOutput('Array Constructor - Values', constructorArray);

    // 3. Array.from()
    let stringArray = Array.from('hello'); // ['h','e','l','l','o']
    let rangeArray = Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]
    showOutput('Array.from() - String', stringArray);
    showOutput('Array.from() - Range', rangeArray);

    // 4. Array.of()
    let ofArray = Array.of(1, 2, 3, 4);
    showOutput('Array.of()', ofArray);

    // 5. Spread Operator
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let combined = [...arr1, ...arr2];
    showOutput('Spread Operator - Combined', combined);
});
