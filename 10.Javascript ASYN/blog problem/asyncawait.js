
//With promise functions

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
    { title: 'Post Three', body: 'This is post Three' },
    { title: 'Post Four', body: 'This is post Four' },
];

function getpost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createpost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (post.title.length > 0 && post.body.length > 0) {
                posts.push(post);
                resolve();
            } else {
                reject('Please provied some Value');
            }
        }, 2000);
    });
}
async function init() {
    for (let i = 0; i <= 20; i++) {
        await createpost({ title: `Post ${i}`, body: `This is post ${i}` })
            .then(getpost)
            .catch((err) => {
                console.error(err);
            });
    }
}

init();

//Async & Await With Fetch
async function FecthData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.table('data:', data)

}

FecthData();