import Subscriber from "../models/subscriber.js";

export const getAllSubscribers = (req, res, next) => {
    Subscriber.find({}, (err, subscribers) => {
            if (err) next(err);
            req.data = subscribers;
            next();
        });
};

export const getSubscriptionPage = (req, res) => {
    res.render("contact");
};

export const saveSubscriber = (req, res) => {
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });
    console.log(newSubscriber)
    newSubscriber.save((err, result) => {
        console.log(err)
        if (err) res.send(err);
        res.render("thanks");
    });
};