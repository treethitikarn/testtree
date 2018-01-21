const http = require('http');
const port = process.env.PORT || 3000;

const handler = (req, res) =>{
    console.log("Server reveived request.")
    res.end('hello world!');
};

const server = http.createServer(handler);
server.listen(port, err => {
    if(err){
        console.log(err);
    } else{
        console.log(`server listening on port: ${port}`);
    }
})