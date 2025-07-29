const http = require('http');
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
    }
});
server.listen(8000,()=>{
    console.log('Server is working')
})