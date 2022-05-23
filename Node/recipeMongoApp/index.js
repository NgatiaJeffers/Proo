import express from 'express';
import layouts from 'express-ejs-layouts';
import mongodb from 'mongodb';

const { MongoClient } = mongodb;

let dbURL = 'mongodb://localhost:27017/recipeMongoApp';
let dbName = 'recipe_db';

// Set up Mongo to my task application.
MongoClient.connect(dbURL, (error, client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("contacts").find().toArray((error, data) => {
        if (error) throw error;
        console.log(data);
    })
})

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