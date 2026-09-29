import { Router } from "express";

import {
  contact,
  sendMessage,
  updateMessageStatus,
} from "./controllers.js";
import { validate } from "../../middleware/validation.js";
import { contactSchema } from "./validation.js";

import { contactRateLimit } from "../../middleware/rateLimit.js";

const router = Router();

router.get("/", contact);

router.post(
  "/message",
  contactRateLimit,
  validate(contactSchema),
  sendMessage,
);

router.patch(
  "/message/:id/status",
  updateMessageStatus,
);

export default router;