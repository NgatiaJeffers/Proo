import Subscriber from "../models/subscriber.js";

export const getAllSubscribers = (req, res, next) => {
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

export const getSubscriptionPage = (req, res) => {
    res.render("contact");
};

export const saveSubscriber = (req, res) => {
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });
    newSubscriber.save()
    .then(() => {
        res.render("thanks");
    })
    .catch((err) => {
        if (err) res.send(err)
    })
};