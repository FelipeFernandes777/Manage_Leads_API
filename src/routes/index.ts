import {Router} from "express";
import metaRouter from "./MetaLeadsRoutes";

const router = Router();

router.use("/meta", metaRouter );
router.use("/", (req,res) => {
    res.status(200).json({
        message: "Hello world",
        statusCode: 200,
        status: "sucess"
    })
});

export default router;