import mongoose, { Schema } from "mongoose";

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
    logoImage: {
        type: String,
        required: true,
        trim: true
    },
    customMessage: {
        type: String,
        required: true,
        trim: true
    },
    spaceQuestions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Question"
        }
    ],
    collectionType: {
        type: String,
        enum: ["Text", "Video", "Both text and video"],
        default: "Text",
        required: true,
    },
    collectStarRating: {
        type: Boolean,
        default: false,
        required: true
    },
    colorTheme: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export const Space = mongoose.model("Space", spaceSchema)