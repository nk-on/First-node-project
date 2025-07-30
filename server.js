const http = require('http');
const fs = require('fs')
const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Welcome to my page</h1>');
    }else if(pathName === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end('<h1>Lorem ipsum</h1>');
    }else if(pathName === '/api'){
        const data = fs.readFileSync('data.json','utf-8');
        res.end(`${data}`);
    }
});
server.listen(8000,()=>{
    console.log('Server is working')
})