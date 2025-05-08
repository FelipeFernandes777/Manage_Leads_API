import {Router} from "express";
import MetaLeadsAPIController from "../controller/MetaLeadsAPIController";

const metaRouter = Router();
const metaApiController = new MetaLeadsAPIController();

metaRouter.post("/send", (req,res) => {
    metaApiController.execute(req,res);
}).get("/leads", (req,res) => {
    metaApiController.getAllLeads(req,res);
})

export default metaRouter;