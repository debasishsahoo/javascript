const outputDiv = document.getElementById('output');

function printOutput(message) {
    outputDiv.textContent = message;
}

// User Object Methods Demo
const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    
    introduce: function() {
        return `Hi, I'm ${this.name}`;
    },
    
    getAge() {
        return this.age;
    },
    
    updateProfile(newName, newAge) {
        this.name = newName;
        this.age = newAge;
        return this;
    },
    
    isAdult() {
        return this.age >= 18;
    },
    
    getEmailDomain() {
        return this.email.split('@')[1];
    }
};

document.getElementById('userDemo').addEventListener('click', () => {
    user.updateProfile("Alice Smith", 26);
    
    const output = [
        user.introduce(),
        `Email domain: ${user.getEmailDomain()}`,
        `Is adult? ${user.isAdult()}`
    ].join('\n');

    printOutput(output);
});

// Timer Object Demo
const timer = {
    seconds: 0,
    interval: null,

    start: function() {
        this.interval = setInterval(() => {
            this.seconds++;
            console.log(`${this.seconds}s`);
        }, 1000);
    },
    
    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            printOutput(`Timer stopped at ${this.seconds}s`);
        }
    }
};

document.getElementById('timerDemo').addEventListener('click', () => {
    timer.seconds = 0;
    timer.start();

    setTimeout(() => {
        timer.stop();
    }, 5000); // Stops after 5 seconds
});

// ShoppingCart Class Demo
class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
    }
    
    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ ...product, quantity });
        }
        
        this.calculateTotal();
        return this;
    }
    
    calculateTotal() {
        this.total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
    
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }
    
    clearCart() {
        this.items = [];
        this.total = 0;
        return this;
    }
    
    get summary() {
        return {
            itemCount: this.getItemCount(),
            total: this.total,
            items: [...this.items]
        };
    }
}

document.getElementById('cartDemo').addEventListener('click', () => {
    const cart = new ShoppingCart();
    cart.addItem({ id: 1, name: "Laptop", price: 999 }, 1);
    cart.addItem({ id: 2, name: "Mouse", price: 49 }, 2);

    const output = [
        `Items in cart: ${cart.summary.itemCount}`,
        `Total: $${cart.summary.total}`,
        `Items: ${cart.summary.items.map(i => `${i.name} (x${i.quantity})`).join(', ')}`
    ].join('\n');

    printOutput(output);
});
