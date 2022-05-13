// Require http and http-status-code modules
import * as http from 'http';
import {StatusCodes} from 'http-status-codes';

const port = 3000;

const app = http.createServer();

app.on("request", (req, res) => {
    res.writeHead(StatusCodes.OK, {
        "Content-type": "text/html"
    });

    let responseMessage = "<h1>This will show on the screen.</h1>";

    res.end(responseMessage);
});

app.listen(port);

console.log(`The server has started and is listening on port ${port}`);
// Compare this snippet from simple_server\index.js: