import * as http from 'http';
import { StatusCodes } from 'http-status-codes';
import fs from 'fs';
import { get, post, handleRequest } from "./router.js";

const port = process.env.PORT || 3000;

let plainTextContentType = {
    'Content-Type': 'text/plain'
};

let htmlContentType = {
    'Content-Type': 'text/html'
};

const customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (err, data) => {
        if (err) {
            console.log("Error reading the file...");
        }
        res.end(data);
    });
};

get("/", (req, res) =>{
    res.writeHead(StatusCodes.OK, plainTextContentType);
    res.end('INDEX');
});

get("/index.html", (req, res)=> {
    res.writeHead(StatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", res);
});

get("/sample.html", (req, res)=> {
    res.writeHead(StatusCodes.OK, htmlContentType);
    customReadFile("views/sample.html", res);
});

post("/", (req, res) => {
    res.writeHead(StatusCodes.OK, plainTextContentType);
    res.end('POSTED');
});

http.createServer(handleRequest).listen(port);

console.log(`The server has started and is listening on port ${port}`);
