// Reuire http and http-status-code modules
import * as http  from 'http';
import {StatusCodes} from 'http-status-codes';

const port = process.env.PORT || 3000;

// Router Responses Map
const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/about": "<h1>About Page</h1>",
    "/contact": "<h1>Contact Page</h1>",
    "/help": "<h1>Help Page</h1>",
    "/error": "<h1>Error Page</h1>"
};

const app = http.createServer();

app.on("request", (req, res) => {
    const url = req.url;
    const response = routeResponseMap[url];
    if (response) {
        res.writeHead(StatusCodes.OK, {'Content-Type': 'text/html'});
        setTimeout(() => {
            res.end(response);
        }, 2000);
    } else {
        res.writeHead(StatusCodes.NOT_FOUND, {'Content-Type': 'text/html'});
        res.end("<h1>Page Not Found</h1>");
    }
})

// Tell the application to listen on port 3000
app.listen(port);

console.log(`The server has started and is listening on port ${port}`);