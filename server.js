const http = require('http');
const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName === '/'){
        res.end('<h1>Welcome to my page</h1>');
    }
});
server.listen(8000,()=>{
    console.log('Server is working')
})