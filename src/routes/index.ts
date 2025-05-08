import {Router} from "express";
import metaRouter from "./MetaLeadsRoutes";

const router = Router();

router.use("/meta", metaRouter );

export default router;