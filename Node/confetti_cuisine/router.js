import { StatusCodes } from "http-status-codes";
import contentTypes from "./contentTypes";
import { getFile } from './utils';

const routes = {
    "GET": {},
    "POST": {}
};

export function handleRequest (req, res) {
    try {
        routes(req.method)[req.url](req, res);
    } catch (e) {
        res.writeHead(StatusCodes.OK, contentTypes.html);
        getFile("views/error.html", res);
    }
};

export function get (url, action) {
    routes["GET"][url] = action;
};

export function post (url, action) {
    routes["POST"][url] = action;
};