import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    zipCode: {
        type: Number,
        min: [1000, "Zip code too short"],
        max: 99999
    }
});

// Add an instance method to get the full name of the subscriber
subscriberSchema.methods.getInfo = function() {
    return `Name: ${this.name} Email: ${this.email} Zip Code: ${this.zipCode}`;
};

// Add an instance method to get subscribers with the same ZIP code
subscriberSchema.methods.findLocalSubscribers = function() {
    return this.model("Subscriber").find({
        zipCode: this.zipCode
    })
    .exec(); 
};

export default mongoose.model("Subscriber", subscriberSchema);