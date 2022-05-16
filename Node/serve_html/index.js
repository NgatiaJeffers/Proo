import * as http from 'http';
import { StatusCodes } from 'http-status-codes';
import fs from 'fs';

const port = process.env.PORT || 3000;

const sendErrorResponse = (res, error) => {
    res.writeHead(StatusCodes.NOT_FOUND, { 'Content-Type': 'text/html' });
    res.write("<h1>Page Not Found</h1>");
    res.end();
}

const app = http.createServer();

app.on("request", (req, res) => {
    let url = req.url;
    if (url.indexOf(".html") !== -1) {
        res.writeHead(StatusCodes.OK, { 'Content-Type': 'text/html' });
        customReadFile(`./views/${url}`, res);
    } else if (url.indexOf(".css") !== -1) {
        res.writeHead(StatusCodes.OK, { 'Content-Type': 'text/css' });
        customReadFile(`./public/css${url}`, res);
    } else if (url.indexOf(".js") !== -1) {
        res.writeHead(StatusCodes.OK, { 'Content-Type': 'text/javascript' });
        customReadFile(`./public/js${url}`, res);
    } else if (url.indexOf(".png") !== -1) {
        res.writeHead(StatusCodes.OK, { 'Content-Type': 'image/png' });
        customReadFile(`./public/images${url}`, res);
    } else {
        sendErrorResponse(res, "Page Not Found");
    }
}).listen(port);

console.log(`The server has started and is listening on port ${port}`);

const customReadFile = (filePath, res) => {
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                sendErrorResponse(res, err);
                return;
            } else {
                res.write(data);
                res.end();
            }
        });
    } else {
        sendErrorResponse(res, "Page Not Found");
    }
}