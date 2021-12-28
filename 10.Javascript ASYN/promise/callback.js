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


createComplain = (complain, callback) => {
    setTimeout(() => {
        Complains.push(complain);
        callback()
    }, 2000);
}
getComplains()
createComplain({ id: 6, name: 'Raju', complain: 'I am not happy with PYTHON' }, getComplains);

for (let i = 0; i <= 20; i++) {//< =
    ((index) => {
        setTimeout(() => {
            createComplain({ id: `${i}`, name: `Person ${i}`, complain: `I am not happy with ${i}` }, getComplains);
        }, 5000 * index);
    })(i);
}
