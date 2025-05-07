import {Router} from "express";
import MetaLeadsAPIController from "../controller/MetaLeadsAPIController";

const metaRouter = Router();
const metaApiController = new MetaLeadsAPIController();

metaRouter.post("/", (req,res) => {
    metaApiController.execute(req,res);
}).get("/", (req,res) => {
    res.status(200).json({
        message: "Hello world Meta API Router",
        statusCode: 200,
        status: "sucess"
    })
})

export default metaRouter;