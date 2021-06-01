const http = require("http");
const fs=require("fs");
const mime=require("mime-types");
const express=require("express");

const path=require("path");

const app=express();
app.get("*",(req,res) => {
    let page="."+(req.url||"/");
    if(page.endsWith("/")){
        page=page+"index.html";
    }
  
    //fs.readFile("index.html",(err,data) => {
        fs.readFile(page,(err,data) => {
        if(err){
            res.status(404);
            if(ext===".html"||ext===""){
                fs.readFile("/404.html",(err,data)=>{
                    if(err){
                        res.status(500);
                    }else{
                        res.write(data);
                    }
                });
            }
            res.end();
            return;
        } else {
            res.type(path.extname(page));
       // res.setHeader("Content-Type", mime.lookup(path));
            res.status(200);
            res.write(data);
            //res.write("<!DOCTYPE html><html><body><p>goodbye, world</p></body></html>");
            
            res.end();
        }
    });
});
app.listen(process.env.PORT||8000);
/*
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

}).listen(process.env.PORT||8000); 
*/
