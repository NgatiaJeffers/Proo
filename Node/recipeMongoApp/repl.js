import mongoose from "mongoose";
import Subscriber from "./models/subscriber.js";
import Course from "./models/course.js";

let testCourse, testSubscriber;

mongoose.connect(
    "mongodb://localhost:27017/recipeMongoApp",
    { userNewUrlParser: true }
);

mongoose.Promise = global.Promise;

Subscriber.remove({}) // Remove all subscribers and courses
    .then((items) => console.log(`Removed ${items.n} records!`))
    .then(() => {
        return Course.remove({});
    })
    .then((items) => console.log(`Removed ${items.n} records!`))
    .then(() => { // Create a new subscriber
        return Subscriber.create({
            name: "John Doe",
            email: "john@email.com",
            zipCode: "12345"
        });
    })
    .then(subscriber => console.log(`Created subscriber ${subscriber.getInfo()}`))
    .then(() =>{
        return Subscriber.findOne({
            name: "John Doe"
        });
    })
    .then(subscriber => {
        testSubscriber = subscriber;
        console.log(`Found one subscriber ${subscriber.getInfo()}`);
    })
    .then(() => { // Create a new course
        return Course.create({
            title: "Tomato Land",
            description: "Learn how to grow tomatoes",
            zipCode: 12345,
            items: ["Cherry", "Heriloom", "Tomato"]
        });
    })
    .then(course => {
        testCourse = course;
        console.log(`Created course ${course.title}`);
    })
    .then(() => { // Assocciate the course with the subscriber
        testSubscriber.courses.push(testCourse);
        testSubscriber.save();
    })
    .then(() => { // Populate course document in subscriber
        return Subscriber.populate(testSubscriber, {path: "courses"});
    })
    .then(subscriber => console.log(subscriber))
    .then(() => { // Query subscribers where ObjectId is same as course
        return Subscriber.find({ courses: mongoose.Types.ObjectId(testCourse._id)});
    })
    .then(subscriber => console.log(subscriber));