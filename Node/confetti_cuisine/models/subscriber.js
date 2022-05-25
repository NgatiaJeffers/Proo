import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number,
    date: Date
});

export default mongoose.model("Subscriber", subscriberSchema);