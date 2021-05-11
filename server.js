const http = require("http");
/*const fs=require("fs");*/

http.createServer(function(req,res){
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.write("<!DOCTYPE html><html><body><p>goodbye, world</p></body></html>");
    res.end();
}).listen(8000); 