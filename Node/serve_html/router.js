"use strict";

import { StatusCodes } from "http-status-codes";

let htmlContentType = {
    "Content-Type": "text/html"
},

// Define the routes object to store routes mapped to HTTP methods
routes = {
    "GET": {
        "/info": (req, res) => {
            res.writeHead(StatusCodes.OK, htmlContentType);
            res.end("<h1>Welcome to the Info Page</h1>");
        }
    },
    "POST": {}
};

// Create a function called handleRequest to process route callback func
export function handleRequest(req, res) {
    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(StatusCodes.NOT_FOUND, htmlContentType);
            res.end("<h1>No such file exists</h1>");
        }
    } catch (ex) {
        console.log(ex);
        res.writeHead(StatusCodes.INTERNAL_SERVER_ERROR, htmlContentType);
        res.end("<h1>Internal Server Error</h1>");
    }
};

// Build get and post functions to register routes
export function get(url, action) {
    routes["GET"][url] = action;
};

export function post(url, action) {
    routes["POST"][url] = action;
}