"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = require("express");
const admin_controller_1 = require("./admin.controller");
const checkAuth_1 = require("../../middlewares/checkAuth");
const admin_interface_1 = require("./admin.interface");
const router = (0, express_1.Router)();
router.post("/create-invite", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN), admin_controller_1.AdminControllers.createInvite);
router.post("/accept-invite", admin_controller_1.AdminControllers.acceptInvite);
router.get("/get-all", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN), admin_controller_1.AdminControllers.getAllAdmins);
router.get("/me", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN, admin_interface_1.Role.USER), admin_controller_1.AdminControllers.getMe);
router.patch("/update/:id", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN, admin_interface_1.Role.USER), admin_controller_1.AdminControllers.updateAdmin);
router.post("/seed-demo-data", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN), admin_controller_1.AdminControllers.seedDemoData);
exports.AdminRoutes = router;
//# sourceMappingURL=admin.routes.js.map