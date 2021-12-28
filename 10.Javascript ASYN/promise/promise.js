const Complains = [
    { id: 1, name: 'Azim', complain: 'I am not happy with SD' },
    { id: 2, name: 'Resam', complain: 'I am not happy java' },
    { id: 3, name: 'Rumana', complain: 'I am not happy C++' },
    { id: 4, name: 'Anjani', complain: 'I am not happy with js' },
    { id: 5, name: 'Dinda', complain: 'I am not happyb with GATE' },
];

getComplains = () => {
    setTimeout(() => {
        let output = '';
        Complains.forEach((item) => {
            output += `<li>${item.id}. ${item.name}. ${item.complain}</li>`;
        });
        document.getElementById('complains').innerHTML = output;
    }, 1000);
}


createComplain = (complain) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (complain.name.length > 0 && complain.complain.length > 0) {
                Complains.push(complain);
                resolve();
            } else {
                reject('Name and complain is required');
            }
        }, 2000);
    });
}

createComplain({ id: 6, name: 'Raju', complain: 'I am not happy with PYTHON' })
    .then(getComplains)
    .catch((err) => {
        console.log(err);
    });

for (let i = 0; i <= 20; i++) {//< =
    ((index) => {
        setTimeout(() => {
            createComplain({ id: `${i}`, name: `${i}`, complain: `I am not happy with ${i}` })
                .then(getComplains)
                .catch((err) => {
                    console.log(err);
                });

        }, 5000 * index);
    })(i);
}


