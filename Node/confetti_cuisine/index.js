import * as http from 'http';
import {StatusCodes} from 'http-status-codes';
import { contentTypes } from './contentTypes';
import {get, post, handleRequest} from './router';
import fs from 'fs';

const port = process.env.PORT || 3000;

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (err, data) => {
            if (err) {
                res.writeHead(StatusCodes.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end("There was an error serving the file...");
            }
            res.end(data);
        });
    }
}

get("/", (req, res) => {
    res.writeHead(StatusCodes.OK, contentTypes.html);
    getFile("views/index.html", res);
});

get("/courses.html", (req, res) => {
    res.writeHead(StatusCodes.OK, contentTypes.html);
    getFile("views/courses.html", res);
});

get("/contact.html", (req, res) => {
    res.writeHead(StatusCodes.OK, contentTypes.html);
    getFile("views/contact.html", res);
});

post("/", (req, res) => {
    res.writeHead(StatusCodes.OK, contentTypes.html);
    getFile("views/thanks.html", res);
});

get("/graph.png", (req, res) => {
    res.writeHead(StatusCodes.OK, contentTypes.png);
    getFile("pubic/images/graph.png", res);
});

get("/people.jpg", (req, res) => {
    res.writeHead(StatusCodes.OK, contentTypes.jpg);
    getFile("public/images/people.jpg", res);
});

get("/product.jpg", (req, res) => {
    res.writeHead(StatusCodes.OK, contentTypes.jpg);
    getFile("public/images/product.jpg", res);
})

get("/styles.css", (req, res) => {
    res.writeHead(StatusCodes.OK, contentTypes.css);
    getFile("public/css/styles.css", res);
});

get("/bootstrap.min.css", (req, res) => {
    res.writeHead(StatusCodes.OK, contentTypes.css);
    getFile("public/css/bootstrap.min.css", res);
});

get("/confettiCuisine.js", (req, res) => {
    res.writeHead(StatusCodes.OK, contentTypes.js);
    getFile("public/js/confettiCuisine.js", res);
});

http.createServer((req, res) => {
    handleRequest(req, res);
}).listen(port);

console.log(`Server running on port ${port}`);