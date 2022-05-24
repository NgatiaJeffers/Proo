import mongoose from "mongoose";

subscribeSchema = new mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
});

export default mongoose.model("Subscriber", subscribeSchema);