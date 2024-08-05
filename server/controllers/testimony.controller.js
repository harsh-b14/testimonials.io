import { asyncHandler } from "../utils/asyncHandler";
import { APIError } from "../utils/APIError";
import { APIResponse } from "../utils/APIResponse";
import { TextTestimony } from "../models/textTestimony.models";
import { VideoTestimony } from "../models/videoTestimony.models";

const createTextTestimony = asyncHandler(async (req, res) => {
    const { name, email, ratingInStar, textualTestimony, permission } = req.body;
    
})

export {
    createTextTestimony
}