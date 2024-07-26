import mongoose, { Schema } from "mongoose";
import { space } from "postcss/lib/list";

const spaceSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    spaceName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        index: true
    },
    headerTitle: {
        type: String,
        required: true,
        trim: true
    },
    customMessaage: {
        type: String,
        required: true,
        trim: true
    },
    collectionType: {
        type: String,
        enum: ["Text", "Video", "Both text and video"],
        default: "Text",
        required: true,
    },
    questions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Question"
        }
    ]
}, { timestamps: true })

export const Space = mongoose.model("Space", spaceSchema)