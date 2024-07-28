import { Router } from "express";
import { createNewSpace } from "../controllers/space.controller.js";
import { auth } from "../middlewares/auth.middlewares.js"

const router = Router();

router.route("/create-space").post(auth, createNewSpace);

export default router;