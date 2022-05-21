import * as http from 'http';
import {StatusCodes} from 'http-status-codes';
import * as express from 'express';

// Instantiate the express application
const app = express();

// set the port of our application
app.set("port", process.env.PORT || 3000);

// Add a route for the root path
app.get("/", (req, res) => {
    res.send("Welcome to the Confetti Cuisine!");
});

// Set the application up to listen on port 3000
app.listen(app.get("post"), () => {
    console.log(`Serving Confetti Cuisine on port ${app.get("port")}`);
});