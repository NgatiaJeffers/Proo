// Add the express module to the project
import express from 'express';
import * as homeController from './controllers/homeController.js';

// Assign the express() function to the variable app
const port = 3000;

const app = express();

// Set up the view engine / GET route for the homepage
// Issue a response from the server to the client with res.send
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/contact", (req, res) => {
    res.send("Contact information submitted successfully!");
});

app.get("/item/:vegetable", homeController.sendRegParam);

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

