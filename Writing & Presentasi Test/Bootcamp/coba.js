const http = require('http');

   http.createServer((req,res)=>{
      res.writeHead(200,{'Content-Type':'text/html'})
      res.write(req.url)
      res.end()
   }).listen(8080,()=>{
      console.log('Server running at http://localhost:8080');
   })