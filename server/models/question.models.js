import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
    question: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

export const Question = mongoose.model("Question", questionSchema)