const outputDiv = document.getElementById('output');

function printOutput(message) {
    outputDiv.textContent = message;
}

// Person Constructor
function Person(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.createdAt = new Date();
    this.getInfo = function() {
        return `${this.name}, ${this.age} years old`;
    };
}

Person.prototype.introduce = function() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
};

Person.prototype.isAdult = function() {
    return this.age >= 18;
};

document.getElementById('personDemo').addEventListener('click', () => {
    const person1 = new Person("Alice", 25, "alice@example.com");
    const person2 = new Person("Bob", 17, "bob@example.com");

    const output = [
        person1.introduce(),
        `Is ${person2.name} adult? ${person2.isAdult()}`
    ].join('\n');

    printOutput(output);
});

// BankAccount Constructor
function BankAccount(accountNumber, initialBalance = 0) {
    if (!accountNumber || typeof accountNumber !== 'string') {
        throw new Error('Valid account number is required');
    }

    this._accountNumber = accountNumber;
    this._balance = initialBalance;
    this._transactions = [];
    this.createdAt = new Date();
    this.isActive = true;
}

BankAccount.prototype.deposit = function(amount) {
    this._balance += amount;
    this._transactions.push({ type: 'deposit', amount, balance: this._balance });
    return this._balance;
};

BankAccount.prototype.withdraw = function(amount) {
    if (amount > this._balance) {
        throw new Error('Insufficient funds');
    }
    this._balance -= amount;
    this._transactions.push({ type: 'withdrawal', amount, balance: this._balance });
    return this._balance;
};

BankAccount.prototype.getAccountNumber = function() {
    const num = this._accountNumber;
    return num.slice(0, 4) + '*'.repeat(num.length - 8) + num.slice(-4);
};

document.getElementById('bankAccountDemo').addEventListener('click', () => {
    const account = new BankAccount("1234567890", 100);
    account.deposit(50);
    account.withdraw(30);

    const output = [
        `Balance: $${account._balance}`,
        `Masked Account Number: ${account.getAccountNumber()}`
    ].join('\n');

    printOutput(output);
});

// Calculator Constructor with Static Methods
function Calculator() {
    this.lastResult = 0;
}

Calculator.add = (a, b) => a + b;
Calculator.multiply = (a, b) => a * b;
Calculator.PI = 3.14159;

Calculator.prototype.calculate = function(operation, a, b) {
    if (operation === 'add') return Calculator.add(a, b);
    if (operation === 'multiply') return Calculator.multiply(a, b);
    throw new Error('Unknown operation');
};

document.getElementById('calculatorDemo').addEventListener('click', () => {
    const calc = new Calculator();
    const result = calc.calculate('add', 5, 3);
    const pi = Calculator.PI;

    const output = [
        `Add: 5 + 3 = ${result}`,
        `Static PI: ${pi}`
    ].join('\n');

    printOutput(output);
});

// Inheritance Example
function Animal(name, species) {
    this.name = name;
    this.species = species;
}

Animal.prototype.getInfo = function() {
    return `${this.name} is a ${this.species}`;
};

function Dog(name, breed) {
    Animal.call(this, name, 'dog');
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function() {
    return `${this.name} barks: Woof!`;
};

Dog.prototype.fetch = function() {
    return `${this.name} fetches the ball.`;
};

document.getElementById('inheritanceDemo').addEventListener('click', () => {
    const myDog = new Dog('Buddy', 'Golden Retriever');

    const output = [
        myDog.getInfo(),
        myDog.makeSound(),
        myDog.fetch()
    ].join('\n');

    printOutput(output);
});
