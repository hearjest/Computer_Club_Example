const http = require("http");
const fs=require("fs");
const mime=require("mime-types");
http.createServer(function(req,res){
    const path="."+(req.url||"/");
    //fs.readFile("index.html",(err,data) => {
        fs.readFile(path,(err,data) => {
        if(err){
            res.writeHead(404);
            res.end();
            return;
        } else {
        res.setHeader("Content-Type", mime.lookup(path));
            res.writeHead(200);
            res.write(data);
            //res.write("<!DOCTYPE html><html><body><p>goodbye, world</p></body></html>");
            
            res.end();
        }
    });

}).listen(8000); 