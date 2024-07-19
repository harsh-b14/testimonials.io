import dotenv from "dotenv"
import connectDB from "./config/db.js"
import { app } from "./app.js"

dotenv.config({
    path: '../env'
})

app.get("/", (req, res) => {
    res.send("API is running");
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on prt: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection failed :: ", err);
})