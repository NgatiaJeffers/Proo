import express from 'express';
import layouts from 'express-ejs-layouts';
import mongoose from 'mongoose';
import {getAllSubscribers, getSubscriptionPage, saveSubscriber} from './controllers/subscribersController.js';
import {showCourses} from './controllers/homeController.js';
import {index, indexView, newUser, createUser, redirectView, showUser, showView} from './controllers/usersController.js';

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
const router = express.Router();

app.use("/", router);
// set the port of our application
app.set("view engine", "ejs");  // set up ejs for templating
app.set("port", process.env.PORT || 3000);
router.use(express.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded
router.use(express.json());
router.use(layouts);
router.use(express.static("public")); // Enable static files

router.get("/users", index, indexView);
router.get("/users/new", newUser);
router.post("/users/create", createUser, redirectView);
router.get("/users/:id", showUser, showView);

router.get("/subscribers", getAllSubscribers, (req, res, next) => {
    console.log(req.data);
    res.render("subscribers", {subscribers: req.data});
});
router.get("/courses", showCourses);

router.get("/contact", getSubscriptionPage);
router.post("/subscribe", saveSubscriber);

// Application listening to port 3000
app.listen(app.get("port"), () => {
    console.log(`Application is running on port ${app.get("port")}`);
});