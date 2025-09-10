// IIFE to create private scope
(function() {
    console.log('IIFE: App initialized');

    // Anonymous function as callback: delayed message
    setTimeout(function() {
        console.log("This runs after 2 seconds");
    }, 2000);

    // Anonymous arrow function as event callback
    document.addEventListener('click', (event) => {
        console.log('Document clicked at:', event.clientX, event.clientY);
    });

    // User data array
    const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 }
    ];

    const adults = users.filter(function(user) {
        return user.age >= 18;
    });

    const sortedUsers = users.sort(function(a, b) {
        return b.age - a.age;
    });

    const userSummaries = users.map(function(user) {
        return `${user.name} is ${user.age} years old`;
    });

    console.log('User summaries:', userSummaries);

    // Show users on button click
    document.getElementById('showUsersBtn').addEventListener('click', function() {
        const listContainer = document.getElementById('userList');
        listContainer.innerHTML = '';
        userSummaries.forEach(function(summary) {
            const div = document.createElement('div');
            div.textContent = summary;
            listContainer.appendChild(div);
        });
    });

    // Anonymous function for button event
    const clickButton = document.createElement('button');
    clickButton.textContent = 'Click Me for Style Change';
    clickButton.addEventListener('click', function(e) {
        e.preventDefault();
        this.style.background = 'green';
        this.textContent = 'Clicked!';
    });
    document.body.appendChild(clickButton);

    // Anonymous function in Promise (using fake API endpoint)
    document.getElementById('apiFetchBtn').addEventListener('click', function() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log('Data received:', data);
                document.getElementById('apiData').textContent = JSON.stringify(data, null, 2);
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
    });

    // Custom array method with anonymous callback
    Array.prototype.customForEach = function(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    };

    [1, 2, 3].customForEach(function(item, index) {
        console.log(`Custom forEach - Item ${index}: ${item}`);
    });

})();
