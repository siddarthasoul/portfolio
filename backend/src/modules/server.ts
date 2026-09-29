import { Router } from "express";
import routerMe from "./me/routes.js"
import routerProject from "./project/routes.js"
import routerSkills from "./skills/routes.js";  
import routerContact from "./contect/routes.js"
import routerResume from "./files/resumeroutes.js"
const router = Router();



router.use('/user', routerMe)

router.use('/project',routerProject)

router.use("/skills", routerSkills)

router.use("/contact", routerContact)

router.use("/files", routerResume);

export default router;