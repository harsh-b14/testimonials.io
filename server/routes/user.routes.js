import { Router } from "express";
import { signUpUser, signInUser } from "../controllers/user.controller.js";
// import { upload } from "../middlewares/multer.middleware.js";
// import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(signUpUser);

router.route("/signin").post(signInUser);

export default router;