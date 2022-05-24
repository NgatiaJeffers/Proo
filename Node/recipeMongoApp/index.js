import express from 'express';
import layouts from 'express-ejs-layouts';
import mongoose from 'mongoose';
import {getAllSubscribers} from './controllers/subscribersController.js';

mongoose.connect(
    'mongodb://localhost:27017/recipeMongoApp',
    { useNewUrlParser: true }
    );

const db = mongoose.connection;

db.once("open", () => {
    console.log("Connected to MongoDB");
})

// Instantiate the express application
const app = express();

// set the port of our application
app.set("view engine", "ejs");  // set up ejs for templating
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.use(layouts);
app.use(express.static("public")); // Enable static files

app.get("/subscribers", getAllSubscribers, (req, res, next) => {
    console.log(req.data);
    res.render("subscribers", {subscribers: req.data});
});

// Application listening to port 3000
app.listen(app.get("port"), () => {
    console.log(`Application is running on port ${app.get("port")}`);
});