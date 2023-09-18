const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
const router = require('./router/router.js');

server.use((req, res, next) => {
    if (req.path ==='/'){
        res.status(404);
        res.send("Missing endpoint following /");
        next();
    }else {
        switch(req.method){
            case 'GET':
                console.log(`Calling Get using path:  ${req.url}`);
                router.handleGetResponse(req, res);
                break;
            case 'POST':
                console.log("inside POST");
                break;
            default:
                console.log(`Method not expected ${req.method}`);
                break;
        }
        next ();    
    }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});