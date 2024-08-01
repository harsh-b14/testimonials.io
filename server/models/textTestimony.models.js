import mongoose, { Schema } from "mongoose";

const textTestimonySchema = new Schema({
    spaceId: {
        type: Schema.Types.ObjectId,
        ref: "Space",
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    ratingInstar: {
        type: Number,
        required: true
    },
    textualTestimony: {
        type: String,
        required: true,
        trim: true
    },
    attachedImage: {
        type: String,
        required: false
    },
    userImage: {
        type: String,
        required: false
    },
    permission: {
        type: String,
        enum: ["Yes", "No"],
        default: "No",
        required: true
    }
}, { timestamps: true })

export const TextTestimony = mongoose.model("TextTestimony", textTestimonySchema);