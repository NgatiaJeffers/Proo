"use strict";

import { StatusCodes } from "http-status-codes";
import * as contentType from "./contentTypes.js";
import fs from "fs";

export function getFile (file, res) {
    fs.readFile(file, (err, data) => {
        if (err) {
            res.writeHead(StatusCodes.INTERNAL_SERVER_ERROR, contentType.html);
            res.end("There was an error serving the file...");
        }
        res.end(data);
    });
}
