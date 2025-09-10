(function() {
    console.log("IIFE executed immediately!");

    (function(name, version) {
        console.log(`Welcome to ${name} v${version}`);
    })("MyApp", "1.0.0");

    const result = (function(x, y) {
        return x * y + 10;
    })(5, 3);

    console.log('IIFE calculated result:', result);

    const outputDiv = document.getElementById('output');

    // Module Pattern using IIFE
    const MyModule = (function() {
        let privateVariable = 0;
        let privateArray = [];

        function privateFunction() {
            return "Private function called!";
        }

        return {
            publicMethod: function() {
                privateVariable++;
                return `Private variable incremented to: ${privateVariable}`;
            },
            addItem: function(item) {
                privateArray.push(item);
            },
            getItems: function() {
                return [...privateArray];
            },
            reset: function() {
                privateVariable = 0;
                privateArray = [];
            }
        };
    })();

    // AppConfig IIFE
    const AppConfig = (function() {
        const environment = 'development';
        const apiUrl = environment === 'development'
            ? 'http://localhost:3000/api'
            : 'https://api.myapp.com';

        return Object.freeze({
            api: { baseUrl: apiUrl, timeout: 5000 },
            features: {
                enableLogging: environment === 'development',
                enableAnalytics: environment === 'production'
            }
        });
    })();

    // Quick Calc IIFE
    const quickCalc = ((a, b) => {
        const sum = a + b;
        const product = a * b;
        return { sum, product };
    })(10, 5);

    // Expose button event functionality
    document.getElementById('showModuleInfo').addEventListener('click', function() {
        MyModule.addItem('Apple');
        MyModule.addItem('Banana');
        const items = MyModule.getItems();
        const msg = MyModule.publicMethod();
        outputDiv.textContent = `MyModule:\n${msg}\nItems: ${items.join(', ')}`;
    });

    document.getElementById('showConfig').addEventListener('click', function() {
        outputDiv.textContent = `AppConfig:\nAPI URL: ${AppConfig.api.baseUrl}\nLogging Enabled: ${AppConfig.features.enableLogging}`;
    });

    document.getElementById('quickCalcBtn').addEventListener('click', function() {
        outputDiv.textContent = `QuickCalc Result:\nSum: ${quickCalc.sum}\nProduct: ${quickCalc.product}`;
    });

    // Initialization IIFE
    (function initializeApp() {
        console.log("Initializing application...");
        document.addEventListener('DOMContentLoaded', function() {
            console.log("DOM fully loaded.");
        });
        window.addEventListener('error', function(e) {
            console.error('Global error:', e.error);
        });
        console.log("Application initialized");
    })();
})();
