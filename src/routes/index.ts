import {Router} from "express";

const router = Router();

router.use("/", (req,res) => {
    res.status(200).json({
        message: "Hello world",
        statusCode: 200,
        status: "sucess"
    })
});

export default router;