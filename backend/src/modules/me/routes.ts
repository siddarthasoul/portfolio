import me from "./controllers.js"
import {Router} from "express"

const router = Router();

router.get("/me", me);


export default router;