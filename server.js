const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
const router = require('./router/router.js');
const testReq = require('./testRequest.http');

server.use((req, res, next) => {
    switch(req.method){
        case 'GET':
            console.log(`Calling Get using path:  ${req.url}`)
            router.handleGetResponse();
            break;
        default:
            console.log(`Method not expected ${req.method}`)
            break;
    }
    next ();
  
});

server.get('/', (req, res) => {
    const urls = req.url;

    res.send(`Requested path: ${urls}`);
  });

  server.post('/', (req, res) => {
    const urls = req.url;

    res.send(`Requested path: ${urls}`);
  });

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});