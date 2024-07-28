import { asyncHandler } from "../utils/asyncHandler.js"
import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import { Space } from "../models/space.models.js";
import { Question } from "../models/question.models.js";

const createNewSpace = asyncHandler(async (req, res) => {
    const { userId } = req.user._id;
    if(!userId){
        throw new APIError(400, "User not found")
    }

    const { spaceName, headerTitle, customMessage, collectionType } = req.body;
    if(!spaceName || !headerTitle || !customMessage || !collectionType){
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

    const { que1, que2, que3 } = req.body;
    if(!que1 || !que2 || !que3){
        throw new APIError(400, "All questions are required")
    }

    const createdQuestions = await Question.insertMany([
        { question: que1 },
        { question: que2 },
        { question: que3 }
    ])

    if(!createdQuestions){
        throw new APIError(500, "Internal server error")
    }

    const questionsId = [
        createdQuestions[0]._id,
        createdQuestions[1]._id,
        createdQuestions[2]._id
    ]
    
    if(!questionsId){
        throw new APIError(500, "Internal server error")
    }
    
    const space = await Space.create({
        userId,
        spaceName,
        headerTitle,
        customMessage,
        collectionType,
        questions: questionsId
    })

    if(!space){
        throw new APIError(500, "Internal server error")
    }

    return res
            .status(201)
            .json(
                new APIResponse(201, { space, createdQuestions}, "Space created successfully")
            )
})

export {
    createNewSpace
}