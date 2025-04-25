const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

let posts = [
    {id:1, title: 'Post One'},
    {id:2, title: 'Post Two'},
    {id:3, title: 'Post Three'},
];

app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log("Requested ID:", id); // 🐛 Debugging line

    const post = posts.find((post) => post.id === id);

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
