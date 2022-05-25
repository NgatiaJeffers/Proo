import Subscriber from "../models/subscriber.js";

// get all subscribers from the database
export const getAllSubscribers = (req, res) => {
    Subscriber.find({})
        .exec()
        .then(subscribers => {
            res.render("subscribers", {
                subscribers: subscribers
            });
        })
        .catch((err) => {
            console.log(err.message);
            return [];
        })
        .then(() => {
            console.log("Promise complete");
        });
};

// Get contact page
export const getSubscriptionPage = (req, res) => {
    res.render("contact");
};

// Save subscriber after form submission
export const saveSubscriber = (req, res) => {
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode,
        date: new Date()
    });

    newSubscriber.save()
        .then(() => {
            res.render("thanks");
        })
        .catch((err) => {
            res.send(err);
        })
}