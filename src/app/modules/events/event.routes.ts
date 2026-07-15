import { Router } from "express";
import { EventController } from "./event.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../admin/admin.interface";

const router = Router();

router.get("/", EventController.getAllEvents);
router.get("/:id", EventController.getEventById);

// Admin-only write access
router.post("/", checkAuth(Role.ADMIN), EventController.createEvent);
router.put("/:id", checkAuth(Role.ADMIN), EventController.updateEvent);
router.delete("/:id", checkAuth(Role.ADMIN), EventController.deleteEvent);

export const EventRoutes = router;
