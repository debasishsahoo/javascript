let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];

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

function clearOutput() {
  document.getElementById('output-container').innerHTML = "";
}

// Reset arrays before each demo (so buttons always start fresh)
function resetArrays() {
  fruits = ['apple', 'banana', 'orange'];
  numbers = [1, 2, 3, 4, 5];
}

function runMethod(method) {
  resetArrays();

  switch (method) {
    case 'push':
      fruits.push('grape');
      showOutput("push()", fruits);
      break;

    case 'pop':
      let removed = fruits.pop();
      showOutput("pop() - removed", removed);
      showOutput("After pop()", fruits);
      break;

    case 'unshift':
      fruits.unshift('mango');
      showOutput("unshift()", fruits);
      break;

    case 'shift':
      let first = fruits.shift();
      showOutput("shift() - removed", first);
      showOutput("After shift()", fruits);
      break;

    case 'indexOf':
      showOutput("indexOf('banana')", fruits.indexOf('banana'));
      break;

    case 'includes':
      showOutput("includes('banana')", fruits.includes('banana'));
      break;

    case 'find':
      showOutput("find(num > 3)", numbers.find(num => num > 3));
      break;

    case 'findIndex':
      showOutput("findIndex(num > 3)", numbers.findIndex(num => num > 3));
      break;

    case 'map':
      showOutput("map(x*2)", numbers.map(num => num * 2));
      break;

    case 'filter':
      showOutput("filter(even numbers)", numbers.filter(num => num % 2 === 0));
      break;

    case 'reduce':
      showOutput("reduce(sum)", numbers.reduce((total, num) => total + num, 0));
      break;

    case 'slice':
      showOutput("slice(1,3)", fruits.slice(1, 3));
      showOutput("Original fruits", fruits);
      break;

    case 'splice':
      let removed2 = fruits.splice(1, 1, 'kiwi', 'pear');
      showOutput("splice() - removed", removed2);
      showOutput("After splice()", fruits);
      break;

    case 'sort':
      let unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
      unsorted.sort((a, b) => a - b);
      showOutput("sort()", unsorted);
      break;

    case 'reverse':
      fruits.reverse();
      showOutput("reverse()", fruits);
      break;

    case 'forEach':
      let collected = [];
      fruits.forEach((fruit, index) => {
        collected.push(`${index}: ${fruit}`);
      });
      showOutput("forEach()", collected);
      break;

    case 'every':
      showOutput("every(num > 0)", numbers.every(num => num > 0));
      break;

    case 'some':
      showOutput("some(num > 10)", numbers.some(num => num > 10));
      break;

    case 'join':
      showOutput("join(', ')", fruits.join(', '));
      break;

    default:
      showOutput("Unknown method", method);
  }
}
