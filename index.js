const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

app.use(express.static('public'));
app.use(express.json());


app.get('/api', (req, res) => {
    res.json({messgae: 'Welcome to the API with middleware'})
});

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
})
