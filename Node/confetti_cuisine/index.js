import * as http from 'http';
import {StatusCode} from 'http-status-codes';
import { contentTypes } from './contentTypes';
import fs from 'fs';

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (err, data) => {
            if (err) {
                res.writeHead(StatusCode.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end("There was an error serving the file...");
            }
            res.end(data);
        });
    }
}