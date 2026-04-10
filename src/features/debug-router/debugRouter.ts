import { Router } from "express"

const debugRouter = Router()

debugRouter.get("/", async (req, res) => {
    res.status(200).json({ messgae: "hello world" })
})

export default debugRouter
