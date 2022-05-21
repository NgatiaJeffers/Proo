import * as http from 'http';
import {StatusCodes} from 'http-status-codes';
import express from 'express';
import layoutes from 'express-ejs-layouts';
import { showCourses, showSignUp, postedSignUp } from './controllers/homeController.js';
import { internalServerError, pageNotFoundError } from './controllers/errorController.js';

// Instantiate the express application
const app = express();

// set the port of our application
app.set("view engine", "ejs");  // set up ejs for templating
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json
app.use(layoutes); // Set the app to use the layout engine

// Enable static assets
app.use(express.static("public"));


// Add a route for the root path
app.get("/", (req, res) => {
    res.send("Welcome to the Confetti Cuisine!");
});
app.get("/courses", showCourses);
app.get("/contact", showSignUp);
app.post("/contact", postedSignUp);

// Add error handlers as middleware functions
app.use(pageNotFoundError);
app.use(internalServerError);

// Set the application up to listen on port 3000
app.listen(app.get("port"), () => {
    console.log(`Serving Confetti Cuisine on port ${app.get("port")}`);
});