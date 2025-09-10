// ------------------ Create BigInt ------------------
document.getElementById('createBtn').addEventListener('click', () => {
    console.log("=== Create BigInt ===");

    const big1 = 9007199254740991n;      // n suffix
    const big2 = BigInt("123456789012345678901234567890");

    console.log("big1:", big1, "Type:", typeof big1);
    console.log("big2:", big2, "Type:", typeof big2);
});

// ------------------ Large Numbers ------------------
document.getElementById('largeNumBtn').addEventListener('click', () => {
    console.log("=== Handling Large Numbers ===");

    const hugeID = 1234567890123456789012345678901234567890n;
    console.log("hugeID + 1n:", hugeID + 1n);
});

// ------------------ Avoid Precision Loss ------------------
document.getElementById('precisionBtn').addEventListener('click', () => {
    console.log("=== Avoid Precision Loss ===");

    const normalNumber = 9007199254740991; // Number.MAX_SAFE_INTEGER
    console.log("normalNumber + 2:", normalNumber + 2); // Incorrect beyond MAX_SAFE_INTEGER

    const bigIntNumber = 9007199254740991n;
    console.log("bigIntNumber + 2n:", bigIntNumber + 2n); // Correct
});

// ------------------ Time in Nanoseconds ------------------
document.getElementById('timeBtn').addEventListener('click', () => {
    console.log("=== Time in Nanoseconds ===");

    const timestamp = BigInt(Date.now()) * 1000000n; // Convert ms to ns
    console.log("Timestamp in ns:", timestamp);
});

// ------------------ Type Conversion ------------------
document.getElementById('convertBtn').addEventListener('click', () => {
    console.log("=== Explicit Type Conversion ===");

    const big = 10n;
    const num = 5;

    const correctSum = big + BigInt(num);
    console.log("big + BigInt(num):", correctSum);
});

// ------------------ Comparisons ------------------
document.getElementById('compareBtn').addEventListener('click', () => {
    console.log("=== Comparisons ===");

    console.log("10n > 5:", 10n > 5);
    console.log("10n === 10:", 10n === 10);
    console.log("10n == 10:", 10n == 10);
});
