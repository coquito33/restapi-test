import { Router } from "express";
import { ping } from "../controllers/index.controllers.js";


const routerIndex = Router();

routerIndex.get('/ping' , ping)

export default routerIndex;