// ------------------ Unique Symbols ------------------
document.getElementById('uniqueBtn').addEventListener('click', () => {
    console.log("=== Unique Symbols ===");

    const sym1 = Symbol();
    const sym2 = Symbol("desc");
    const sym3 = Symbol("desc");

    console.log("sym2 === sym3:", sym2 === sym3); // false
    console.log("Type of Symbol():", typeof Symbol());
});

// ------------------ Symbol as Property Key ------------------
document.getElementById('propertyBtn').addEventListener('click', () => {
    console.log("=== Symbol as Property Key ===");

    const mySymbol = Symbol("myKey");
    const obj = {};
    obj[mySymbol] = "secret value";

    console.log("obj[mySymbol]:", obj[mySymbol]);
    console.log("Object.keys(obj):", Object.keys(obj)); // symbol not enumerable
    console.log("Object.getOwnPropertySymbols(obj):", Object.getOwnPropertySymbols(obj));
});

// ------------------ Global Symbol Registry ------------------
document.getElementById('globalBtn').addEventListener('click', () => {
    console.log("=== Global Symbol Registry ===");

    const globalSym1 = Symbol.for('appID');
    const globalSym2 = Symbol.for('appID');

    console.log("globalSym1 === globalSym2:", globalSym1 === globalSym2);
    console.log("Symbol.keyFor(globalSym1):", Symbol.keyFor(globalSym1));
});

// ------------------ Custom Iterators ------------------
document.getElementById('iteratorBtn').addEventListener('click', () => {
    console.log("=== Custom Iterators ===");

    const range = {
        from: 1,
        to: 5,
        [Symbol.iterator]: function* () {
            for (let value = this.from; value <= this.to; value++) {
                yield value;
            }
        }
    };

    for (let num of range) {
        console.log(num); // 1 2 3 4 5
    }
});

// ------------------ Hiding Implementation Details ------------------
document.getElementById('hideBtn').addEventListener('click', () => {
    console.log("=== Hiding Implementation Details ===");

    const _balance = Symbol('balance');

    class BankAccount {
        constructor(initialAmount) {
            this[_balance] = initialAmount;
        }
        deposit(amount) {
            this[_balance] += amount;
        }
        getBalance() {
            return this[_balance];
        }
    }

    const account = new BankAccount(1000);
    account.deposit(500);

    console.log("Balance:", account.getBalance());
    console.log("Direct access (should be undefined):", account._balance);
    console.log("Symbols in account object:", Object.getOwnPropertySymbols(account));
});

// ------------------ Well-Known Symbols ------------------
document.getElementById('wellKnownBtn').addEventListener('click', () => {
    console.log("=== Well-Known Symbols ===");

    class CustomCollection {
        get [Symbol.toStringTag]() {
            return 'MyCollection';
        }
    }

    const collection = new CustomCollection();
    console.log(Object.prototype.toString.call(collection));  // [object MyCollection]
});
