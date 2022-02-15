const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Mystery')
    }else{
        res.end(`<h1> oops </h1>`)
    }
})

server.listen(5000)