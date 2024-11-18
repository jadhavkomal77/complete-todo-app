const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()
mongoose.connect(process.env.MONGO_URL)


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173", credentials: true
}))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/todo", require("./routes/todo.routes"))

app.use("*", (req, res) => {
    res.status(404).json({ message: `Resource Not Found :${req.method}:${req.url}` })
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: "server error", error: err.message })
})


mongoose.connection.once("open", () => {
    app.listen(process.env.PORT, console.log("server running 🏃‍♀️"))
    console.log("MONGO CONNECTED");

})