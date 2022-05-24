import Subscriber from "../models/subscriber.js";

export const getAllSubscribers = (req, res, next) => {
    console.log(`getAllSubscribers: ${req.params.id}`);
    return Subscriber.find({}, (err, subscribers) => {
            if (err) next(err);
            // res.json(subscribers);
            req.data = subscribers;
            next();
        });
};