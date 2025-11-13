import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer((req, res) => {
    let filePath;
    let statusCode = 200;

    if (req.url === '/' || req.url === '') {
        filePath = './pages/index.html';
    } else if (req.url === '/about') {
        filePath = './pages/about.html';
    } else if (req.url === '/contact-me') {
        filePath = './pages/contact-me.html';
    } else {
        filePath = './pages/404.html';
        statusCode = 404;
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading page.');
            return;
        }
        res.writeHead(statusCode, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(8000, () => {
    console.log('Server is running at http://127.0.0.1:8000');
});
