import * as http from 'http';
import {StatusCodes} from 'http-status-codes';
import * as contentType from "./contentTypes.js";
import {get, post, handleRequest} from './router';
import { getFile } from './utils';

const port = process.env.PORT || 3000;


get("/", (req, res) => {
    res.writeHead(StatusCodes.OK, contentType.html);
    getFile("views/index.html", res);
});

get("/courses.html", (req, res) => {
    res.writeHead(StatusCodes.OK, contentType.html);
    getFile("views/courses.html", res);
});

get("/contact.html", (req, res) => {
    res.writeHead(StatusCodes.OK, contentType.html);
    getFile("views/contact.html", res);
});

post("/", (req, res) => {
    res.writeHead(StatusCodes.OK, contentType.html);
    getFile("views/thanks.html", res);
});

get("/graph.png", (req, res) => {
    res.writeHead(StatusCodes.OK, contentType.png);
    getFile("pubic/images/graph.png", res);
});

get("/people.jpg", (req, res) => {
    res.writeHead(StatusCodes.OK, contentType.jpg);
    getFile("public/images/people.jpg", res);
});

get("/product.jpg", (req, res) => {
    res.writeHead(StatusCodes.OK, contentType.jpg);
    getFile("public/images/product.jpg", res);
})

get("/styles.css", (req, res) => {
    res.writeHead(StatusCodes.OK, contentType.css);
    getFile("public/css/styles.css", res);
});

get("/bootstrap.min.css", (req, res) => {
    res.writeHead(StatusCodes.OK, contentType.css);
    getFile("public/css/bootstrap.min.css", res);
});

get("/confettiCuisine.js", (req, res) => {
    res.writeHead(StatusCodes.OK, contentType.js);
    getFile("public/js/confettiCuisine.js", res);
});

http.createServer((req, res) => {
    handleRequest(req, res);
}).listen(port);

console.log(`Server running on port ${port}`);