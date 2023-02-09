//With out Call back function
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

createpost = (post) => {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}


getpost();
createpost({ title: 'Post Five', body: 'This is post Five' });

