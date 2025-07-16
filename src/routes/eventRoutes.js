import { Router } from "express";
import {
  createEvent,
  getEventDetails,
  registerUser,
  cancelRegistration,
  listUpcomingEvents,
  getEventStats
} from "../controllers/eventController.js";

const router = Router();

router.post("/", createEvent);
router.get("/upcoming", listUpcomingEvents);
router.get("/:id", getEventDetails);
router.post("/:id/register", registerUser);
router.delete("/:id/cancel/:userId", cancelRegistration);
router.get("/:id/stats", getEventStats);

export default router; 