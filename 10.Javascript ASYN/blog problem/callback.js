
//With call back functions

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
    { title: 'Post Three', body: 'This is post Three' },
    { title: 'Post Four', body: 'This is post Four' },
];

getpost = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createpost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createpost({ title: 'Post Five', body: 'This is post Five' }, getpost);












for (let i = 0; i <= 20; i++) {
    ((index) => {
        setTimeout(() => {
            createpost({ title: `Post ${i}`, body: `This is post ${i}` }, getpost);
        }, 3000 * index);

    })(i);
}

