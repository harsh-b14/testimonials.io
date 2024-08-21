import { asyncHandler } from "../utils/asyncHandler.js"
import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import { Space } from "../models/space.models.js";
import { Question } from "../models/question.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createNewSpace = asyncHandler(async (req, res) => {
    const { userId } = req.user._id;
    if(!userId){
        throw new APIError(400, "User not found")
    }

    const { spaceName, headerTitle, customMessage, collectionType, collectStarRating, colorTheme, spaceQuestions } = req.body;
    if(!spaceName || !headerTitle || !customMessage || !collectionType || !colorTheme || !spaceQuestions){
        throw new APIError(400, "All fields are required")
    }

    const existedSpace = await Space.findOne({
        spaceName
    })
    if(existedSpace){
        throw new APIError(409, "Space name already exist");
    }

    if(collectionType !== "Text" && collectionType !== "Video" && collectionType !== "Both text and video"){
        throw new APIError(400, "Invalid collection type")
    }

    if(!spaceQuestions){
        throw new APIError(400, "All questions are required")
    }

    const logoImageLocalPath = req.files?.logoImage[0]?.path;
    if(!logoImageLocalPath){
        throw new APIError(400, "Logo image is required")
    }
    const logoImage = await uploadOnCloudinary(logoImageLocalPath);

    const createdQuestions = await Question.insertMany(spaceQuestions)

    if(!createdQuestions){
        throw new APIError(500, "Internal server error")
    }

    const questionsId = createdQuestions.map(question => question._id);
    
    if(!questionsId){
        throw new APIError(500, "Internal server error")
    }
    
    const space = await Space.create({
        userId, 
        spaceName,
        headerTitle,
        customMessage,
        collectionType,
        collectStarRating,
        colorTheme,
        logoImage: logoImage?.url || "",
        questions: questionsId
    })

    if(!space){
        throw new APIError(500, "Internal server error")
    }

    return res
            .status(201)
            .json(
                new APIResponse(201, { space, createdQuestions }, "Space created successfully")
            )
})

const getAllSpaces = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    if(!userId){
        throw new APIError(400, "User not found")
    }

    const spaces = await Space.find({
        userId
    }).populate("questions")

    if(!spaces){
        throw new APIError(500, "Internal server error")
    }

    return res
            .status(200)
            .json(new APIResponse(200, spaces, "All spaces fetched successfully"))
})

export {
    createNewSpace,
    getAllSpaces
}