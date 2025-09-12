const element = document.querySelector('#content');

function useTextContent() {
    element.textContent = '<script>alert("hack")</script>';
    console.log('textContent:', element.textContent);
}

function useInnerHTML() {
    element.innerHTML = '<strong>Bold Text</strong>';
    console.log('innerHTML:', element.innerHTML);
}

function useInnerText() {
    element.innerText = 'Visible text only';
    console.log('innerText:', element.innerText);
}

function safeDisplay() {
    const userInput = document.querySelector('#userInput').value;
    document.querySelector('#output').textContent = userInput;
}

function showHiddenContent() {
    const hiddenDiv = document.querySelector('#hidden');

    console.log('innerText:', hiddenDiv.innerText);       // Will be empty if hidden
    console.log('textContent:', hiddenDiv.textContent); // Will always return content

    alert(`innerText: "${hiddenDiv.innerText}"\ntextContent: "${hiddenDiv.textContent}"`);
}
