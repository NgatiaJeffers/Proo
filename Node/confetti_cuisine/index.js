import * as http from 'http';
import {StatusCodes} from 'http-status-codes';
import express from 'express';
import { showCourses, showSignUp, postedSignUp } from './controllers/homeController.js';

// Instantiate the express application
const app = express();

// set the port of our application
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({
    extended: false
})); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json


// Add a route for the root path
app.get("/", (req, res) => {
    res.send("Welcome to the Confetti Cuisine!");
});
app.get("/courses", showCourses);
app.get("/contact", showSignUp);
app.post("/contact", postedSignUp);

// Set the application up to listen on port 3000
app.listen(app.get("port"), () => {
    console.log(`Serving Confetti Cuisine on port ${app.get("port")}`);
});