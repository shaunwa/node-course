import http from 'http';

const server = http.createServer((req, res) => {
    const { url } = req;
    
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Home</h1>');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Not found!</h1>');
    }
    res.end();
});

server.listen(3000, () => {
    console.log("Server is listening at port 3000");
});