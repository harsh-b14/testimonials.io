import { Router } from "express";
import { signUpUser, signInUser, signOutUser, resetPassword, sendOTP, verifyOTP, googlesignup, createNewSpace } from "../controllers/user.controller.js";
// import { upload } from "../middlewares/multer.middleware.js";
import { auth } from "../middlewares/auth.middlewares.js"

const router = Router();

router.route("/signup").post(signUpUser);

router.route("/signin").post(signInUser);

router.route("/signout").get(auth, signOutUser);

router.route("/resetpassword").post(auth, resetPassword);

router.route("/sendotp").get(sendOTP);

router.route("/verifyotp").post(verifyOTP);

router.route("/googlesignup").post(googlesignup);

export default router;