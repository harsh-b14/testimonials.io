import { Router } from "express";
import { signUpUser, signInUser, signOutUser, resetPassword } from "../controllers/user.controller.js";
// import { upload } from "../middlewares/multer.middleware.js";
import { auth } from "../middlewares/auth.middlewares.js"

const router = Router();

router.route("/signup").post(signUpUser);

router.route("/signin").post(signInUser);

router.route("/signout").get(auth, signOutUser);

router.route("/resetpassword").post(auth, resetPassword);

export default router;