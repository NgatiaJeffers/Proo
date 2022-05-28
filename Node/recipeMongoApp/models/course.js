import mongoose from "mongoose";
import subscriber from "./subscriber";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: trusted,
    },
    description: {
        type: String,
        required: true,
    },
    items: [],
    zipCode: {
        type: Number,
        min: [1000, "Zip code too short"],
        max: 99999
    },
    subscribers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subscriber"
    }]
});

export default mongoose.model("Course", courseSchema);