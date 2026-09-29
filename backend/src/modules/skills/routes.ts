import { Router } from "express";
import skills from "./controllers.js";

const router = Router();

router.get('/', skills)


export default router;
