import Subscriber from "../models/subscriber";

export async function getAllSubscribers(req, res, next) {
    Subscriber.find({}, (err, subscribers) => {
        if (err) return next(err);
        res.json(subscribers);
        next();
    })
}