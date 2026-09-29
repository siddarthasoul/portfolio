import { Router } from "express";
import project from "./controllers.js";

const router = Router();

router.get('/', project)

export default router;
