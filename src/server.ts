import express from "express"
import cors, { type CorsOptions } from "cors"
import debugRouter from "./features/debug-router/debugRouter.js"

const app = express()

const corsOptions: CorsOptions = {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["OPTIONS", "GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
}
app.use(cors(corsOptions))
app.use("/debug", debugRouter)

const port = process.env.PORT || 3000

app.listen(port, () => console.log("---- server is running on:", port))
