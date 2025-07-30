const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res) => {
    const pathName = req.url;
    function addStatusCode(code){
        res.statusCode = code;
        res.setHeader('Content-Type', 'text/html');
    }
    if (pathName === '/') {
        addStatusCode(200);
        res.end('<h1>Welcome to my page</h1>');
    } else if (pathName === '/about') {
        addStatusCode(200);
        res.end('<h1>Lorem ipsum</h1>');
    } else if (pathName === '/api') {
        addStatusCode(200);
        const data = fs.readFileSync('data.json', 'utf-8');
        res.end(`${data}`);
    } else {
        addStatusCode(404);
        res.end('<h1>404 Not found</h1>');
    }
});
server.listen(8000, () => {
    console.log('Server is working')
})