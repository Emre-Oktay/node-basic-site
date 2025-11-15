const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    fs.readFile('./pages/index.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error loading index page.');
            return;
        }
        res.send(data);
    });
});
app.get('/about', (req, res) => {
    fs.readFile('./pages/about.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error loading index page.');
            return;
        }
        res.send(data);
    });
});
app.get('/contact-me', (req, res) => {
    fs.readFile('./pages/contact-me.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error loading index page.');
            return;
        }
        res.send(data);
    });
});
app.use((req, res) => {
    fs.readFile('./pages/404.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error loading 404 page.');
            return;
        }
        res.status(404).send(data);
    });
});

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - running at http://127.0.0.1:${PORT}`);
});
