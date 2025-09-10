const outputDiv = document.getElementById('output');

function printOutput(message) {
    outputDiv.textContent = message;
}

// --- Helper async functions from your code ---
async function fetchUserData(userId) {
    const response = await new Promise(resolve => {
        setTimeout(() => resolve({
            id: userId,
            name: `User ${userId}`,
            email: `user${userId}@example.com`
        }), 1000);
    });
    return response;
}

async function validateOrder(orderData) {
    return new Promise(resolve => {
        setTimeout(() => {
            const errors = [];
            if (!orderData.items || orderData.items.length === 0) errors.push("No items in order");
            if (!orderData.shippingAddress) errors.push("Missing shipping address");

            resolve({ valid: errors.length === 0, errors });
        }, 500);
    });
}

async function calculatePricing(orderData) {
    return new Promise(resolve => {
        setTimeout(() => {
            const subtotal = orderData.items.reduce((sum, item) => sum + item.price, 0);
            const tax = subtotal * 0.08;
            resolve({ subtotal, tax, total: subtotal + tax });
        }, 300);
    });
}

async function saveOrder(orderData) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ ...orderData, id: Math.random().toString(36).substr(2, 9), status: "confirmed" });
        }, 400);
    });
}

async function sendOrderConfirmation(email, order) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Confirmation sent to ${email} for order ${order.id}`);
        }, 200);
    });
}

function createAsyncProcessor(config) {
    return async function (data) {
        await new Promise(resolve => setTimeout(resolve, config.delay || 1000));
        return { processed: true, config, data, timestamp: new Date().toISOString() };
    };
}

// --- Button Handlers ---
document.getElementById('fetchUserBtn').addEventListener('click', async () => {
    const user = await fetchUserData(101);
    printOutput(JSON.stringify(user, null, 2));
});

document.getElementById('processOrderBtn').addEventListener('click', async () => {
    const orderData = {
        items: [{ name: "Book", price: 12 }, { name: "Pen", price: 3 }],
        shippingAddress: "123 Main St"
    };

    try {
        const user = await fetchUserData(102);
        const validation = await validateOrder(orderData);
        if (!validation.valid) throw new Error(validation.errors.join(", "));
        const pricing = await calculatePricing(orderData);
        const order = await saveOrder({
            userId: user.id,
            items: orderData.items,
            total: pricing.total,
            tax: pricing.tax
        });
        const confirmation = await sendOrderConfirmation(user.email, order);

        printOutput(`Order Processed Successfully:\n${JSON.stringify(order, null, 2)}\n\n${confirmation}`);
    } catch (err) {
        printOutput(`Error: ${err.message}`);
    }
});

document.getElementById('parallelFetchBtn').addEventListener('click', async () => {
    const userIds = [201, 202, 203];
    const users = await Promise.all(userIds.map(fetchUserData));
    printOutput(JSON.stringify(users, null, 2));
});

document.getElementById('sequentialVsParallelBtn').addEventListener('click', async () => {
    console.time('Sequential');
    const u1 = await fetchUserData(301);
    const u2 = await fetchUserData(302);
    const u3 = await fetchUserData(303);
    console.timeEnd('Sequential');

    console.time('Parallel');
    const [p1, p2, p3] = await Promise.all([
        fetchUserData(301),
        fetchUserData(302),
        fetchUserData(303)
    ]);
    console.timeEnd('Parallel');

    printOutput(`Sequential Result:\n${JSON.stringify([u1, u2, u3], null, 2)}\n\nParallel Result:\n${JSON.stringify([p1, p2, p3], null, 2)}`);
});

document.getElementById('asyncGeneratorBtn').addEventListener('click', async () => {
    async function* asyncDataGenerator() {
        for (let i = 1; i <= 5; i++) {
            await new Promise(resolve => setTimeout(resolve, 500));
            yield `Chunk ${i}`;
        }
    }

    let result = '';
    for await (const chunk of asyncDataGenerator()) {
        result += `${chunk}\n`;
    }
    printOutput(result);
});

document.getElementById('robustFunctionBtn').addEventListener('click', async () => {
    async function riskyOperation(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() > 0.5 ? resolve(`Success: ${data}`) : reject(new Error('Random failure'));
            }, 500);
        });
    }

    let retries = 3;
    let result = '';

    while (retries > 0) {
        try {
            result = await riskyOperation("important data");
            printOutput(result);
            return;
        } catch (err) {
            retries--;
            if (retries === 0) {
                printOutput(`Failed after retries: ${err.message}`);
            }
        }
    }
});

document.getElementById('processorBtn').addEventListener('click', async () => {
    const processor = createAsyncProcessor({ delay: 500, priority: "high" });
    const result = await processor({ data: "Sample payload" });
    printOutput(JSON.stringify(result, null, 2));
});
