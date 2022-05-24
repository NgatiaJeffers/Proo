import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
});

export default mongoose.model("Subscriber", subscriberSchema);