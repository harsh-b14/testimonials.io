import { asyncHandler } from "../utils/asyncHandler.js"
import { APIError } from "../utils/APIError.js";
import { User } from "../models/user.models.js";
import { APIResponse } from "../utils/APIResponse.js";

const generateAndUpdateRefreshToken = async (user) => {
    const refreshToken = await user.generateRefreshToken();
    await User.findByIdAndUpdate(user._id,
        {
            $set: {
                refreshToken,
            }
        },
        {
            new: true
        }
    )
    return refreshToken;
}

const signUpUser = asyncHandler(async (req, res) => {
    const {username, email, fullname, password} = req.body;

    if (
        [username, email, fullname, password].some((field) =>
            field?.trim() === ""
        )
    ) {
        throw new APIError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if(existedUser){
        throw new APIError(409, "User with email or username already exist");
    }

    const user = await User.create({
        username: username,
        email,
        fullname,
        password
    });

    const refreshToken = await generateAndUpdateRefreshToken(user);
    const accessToken = await user.generateAccessToken();

    const createdUser = await User.findById(user._id).select( // delete password and refreshToken while returning user to frontend
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new APIError(500, "Internal server error")
    }
    
    const options = {
        httpOnly: true,
        secure: true,
    }
    
    return res.status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new APIResponse(200, createdUser, "User registered successfully")
        )
});

const signInUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body

    if(!username && !email){
        throw new APIError(400, "username and email is required")
    }

    const user = await User.findOne({
        $or: [
            {username}, {email}
        ]
    })
    if(!user){
        throw new APIError(404, "user does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)
    if(!isPasswordValid){
        throw new APIError(401, "Password is incorrect")
    }

    const refreshToken = await generateAndUpdateRefreshToken(user);
    const accessToken = await user.generateAccessToken();
    
    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    
    const options = {
        httpOnly: true,
        secure: true,
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new APIResponse(
            200, 
            {
                user: loggedInUser, 
                accessToken: accessToken, 
                refreshToken: refreshToken
            },
            "User logged In Successfully"
        )
    )
})

const signOutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: ""
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true,
    }

    return res 
            .status(200)
            .cookie("accessToken", "", options)
            .cookie("refreshToken", "", options)
            .json(
                new APIResponse(200, {}, "User logged out successfully")
            )
})

const resetPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body
    
    const user = await User.findById(req.user?._id)

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)
    if(!isPasswordCorrect){
        throw new APIError(400, "Invalid ")
    }

    user.password = newPassword
    await user.save({validateBeforeSave: false})

    return res
            .status(200)
            .json(
                new APIResponse(200, {}, "Password has been changed successfullly")
            )
})

const createNewSpace = asyncHandler(async (req, res) => {
})

export {
    signUpUser,
    signInUser,
    signOutUser,
    createNewSpace,
    resetPassword
}