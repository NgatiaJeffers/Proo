import express from 'express';
import layouts from 'express-ejs-layouts';
import mongodb from 'mongodb';
import mongoose from 'mongoose';

mongoose.connect(
    'mongodb://localhost:27017/recipeMongoApp',
    { useNewUrlParser: true }
    );

const db = mongoose.connection;

db.once("open", () => {
    console.log("Connected to MongoDB");
})

const subscriberSchema = new mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

let subscriber1 = new Subscriber({
    name: "John Doe",
    email: "jon@email.com",
    zipCode: 12345
});

subscriber1.save((error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
});

Subscriber.create({
    name: "Jane Doe",
    email: "jane@email.com",
    zipCode: 12345
},
    (error, savedDocument) => {
        if (error) console.log(error);
        console.log(savedDocument);
    }
);

// Instantiate the express application
const app = express();

// set the port of our application
app.set("view engine", "ejs");  // set up ejs for templating
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.use(layouts);

// Enable static files
app.use(express.static("public"));

// Application listening to port 3000
app.listen(app.get("port"), () => {
    console.log(`Application is running on port ${app.get("port")}`);
});