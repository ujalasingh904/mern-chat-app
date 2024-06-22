import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/userRoutes.route.js"
import cors from "cors"
dotenv.config()

mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>console.log('connected to database'))
    .catch((error)=>console.log(error))

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
const port = process.env.PORT || 5000

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

app.listen(port, () => console.log(`listening on port:`, port))