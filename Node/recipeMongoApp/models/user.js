import mongoose from "mongoose";
import Subscriber from "./subscriber.js";

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        first: {
            type: String,
            trim: true,
        },
        last: {
            type: String,
            trim: true,
        }
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
    },
    password: {
        type: String,
        required: true
    },
    courses: [ // Add a course property to connect users to courses
        {
            type: Schema.Types.ObjectId,
            ref: "Course"
        }
    ],
    subscribedAccount: { // Add a subscriberAccount to connect user to subscribers
        type: Schema.Types.ObjectId,
        ref: "Subscriber"
    }
}, {
    timestamps: true // Add a timestamp property to record createdAt and updatedAt dates.
});

userSchema.pre("save", function(next) {
    let user = this;
    if (user.subscribedAccount === undefined) {
        Subscriber.findOne({
            email: user.email
        })
        .then(subscriber => {
            user.subscribedAccount = subscriber;
            next();
        })
        .catch(err => {
            console.log(`Error in connecting subscriber: ${err.message}`);
            next(err);
        });
    } else {
        next();
    }
});

userSchema.virtual("fullName").get(function() {
    return `${this.name.first} ${this.name.last}`;
});

export default mongoose.model("User", userSchema);