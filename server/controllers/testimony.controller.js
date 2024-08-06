import { asyncHandler } from "../utils/asyncHandler";
import { APIError } from "../utils/APIError";
import { APIResponse } from "../utils/APIResponse";
import { TextTestimony } from "../models/textTestimony.models";
import { VideoTestimony } from "../models/videoTestimony.models";
import { uploadOnCloudinary } from "../utils/cloudinary";

const createTextTestimony = asyncHandler(async (req, res) => {
    const { name, email, ratingInStar, textualTestimony, permission } = req.body;

    if (
        [name, email, ratingInStar, textualTestimony, permission].some((field) =>
            field?.trim() === ""
        )
    ) {
        throw new APIError(400, "All fields are required")
    }

    const attachedImageLocalPath = req.files?.attachedImage[0]?.path;
    const userImageLocalPath = req.files?.userImage[0]?.path;
    if (!attachedImageLocalPath) {
        throw new APIError(400, "Please attach an image");
    }
    if(!userImageLocalPath){
        throw new APIError(400, "Please attach an user image");
    }

    const attachedImage = await uploadOnCloudinary(attachedImageLocalPath);
    const userImage = await uploadOnCloudinary(userImageLocalPath);

    if(!attachedImage || !userImage){
        throw new APIError(500, "Failed to upload image on cloudinary");
    }

    const textTestimony = await TextTestimony.create({
        spaceId,
        name,
        email,
        ratingInStar,
        textualTestimony,
        permission,
        attachedImage: attachedImage.url,
        userImage: userImage.url
    })

    const createdTextTestimony = await TextTestimony.findById(textTestimony._id);

    if(!createdTextTestimony){
        throw new APIError(500, "Failed to create testimony");
    }

    return res.status(201).json(
        new APIResponse(200, createdTextTestimony, "Testimony created successfully")
    )
})

export {
    createTextTestimony
}