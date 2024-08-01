import mongoose, { Schema } from "mongoose";

const videoTestimonySchema = new Schema({
    spaceId: {
        type: Schema.Types.ObjectId,
        ref: "Space",
    },
    video: {
        type: String,
        required: true
    },
    permission: {
        type: String,
        enum: ["Yes", "No"],
        default: "No",
        required: true
    }
}, { timestamps: true });

export const VideoTestimony = mongoose.model("VideoTestimony", videoTestimonySchema);