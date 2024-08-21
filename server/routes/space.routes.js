import { Router } from "express";
import { createNewSpace, getAllSpaces } from "../controllers/space.controller.js";
import { auth } from "../middlewares/auth.middlewares.js"
import { upload } from "../middlewares/multer.middleares.js";

const router = Router();

router.route("/create-space").post(auth, 
    upload.fields([
        {
            name: "logoImage",
            maxCount: 1
        }
    ]),
    createNewSpace);

router.route("/get-all-spaces").get(auth, getAllSpaces);

export default router;