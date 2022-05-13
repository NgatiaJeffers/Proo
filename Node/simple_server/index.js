// Reuire http and http-status-code modules
import * as http  from 'http';
import {StatusCodes} from 'http-status-codes';

const port = process.env.PORT || 3000;

// Create the server with the request and response handlers or parameters
const app = http.createServer((request, response) => {
    console.log("Received an incoming request");

    response.writeHead(StatusCodes.OK, {
        "Content-Type": "text/html"
    });

// Write the response to the client    
    let responseMessage = "<h1>Hello World!</h1>";

    response.write(responseMessage);

    response.end();

    console.log(`Sent a response with status code ${responseMessage}`);
});

// Tell the application to listen on port 3000
app.listen(port);

console.log(`The server has started and is listening on port ${port}`);