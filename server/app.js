import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { OAuth2Client } from "google-auth-library";

const app = express();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({
    extended:true,
    limit: "16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from "./routes/user.routes.js";
import spaceRouter from "./routes/space.routes.js";

app.use("/user", userRouter);
app.use("/space", spaceRouter);

export { app }