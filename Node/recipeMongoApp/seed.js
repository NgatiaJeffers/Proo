import mongoose from "mongoose";
import Subscriber from "./models/subscriber.js";

mongoose.connect(
    "mongodb://localhost:27017/recipeMongoApp",
    { useNewUrlParser: true }
);

mongoose.connection;

let contacts = [
    {
        name: "John Doe",
        email: "john@email.com",
        zipCode: "12345"
    },
    {
        name: "Jane Doe",
        email: "jane@email.com",
        zipCode: "54321"
    },
    {
        name: "Joe Smith",
        email: "smith@email.com",
        zipCode: "22435"
    }
];

Subscriber.deleteMany()
.exec()
.then(() => {
    console.log("Subscriber data is empty!");
});

let commands = [];

contacts.forEach((c) => {
    commands.push(Subscriber.create(
        {
            name: c.name,
            email: c.email,
        }
    ));
});

Promise.all(commands)
    .then((r) => {
        console.log(JSON.stringify(r));
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log(`ERROR: ${err}`);
});