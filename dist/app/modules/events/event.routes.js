"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRoutes = void 0;
const express_1 = require("express");
const event_controller_1 = require("./event.controller");
const checkAuth_1 = require("../../middlewares/checkAuth");
const admin_interface_1 = require("../admin/admin.interface");
const router = (0, express_1.Router)();
router.get("/", event_controller_1.EventController.getAllEvents);
router.get("/:id", event_controller_1.EventController.getEventById);
// Admin-only write access
router.post("/", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN), event_controller_1.EventController.createEvent);
router.put("/:id", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN), event_controller_1.EventController.updateEvent);
router.delete("/:id", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN), event_controller_1.EventController.deleteEvent);
exports.EventRoutes = router;
//# sourceMappingURL=event.routes.js.map