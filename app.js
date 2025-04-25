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

app.get('/api/posts', (req, res) => {
    res.json(posts);
})

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
