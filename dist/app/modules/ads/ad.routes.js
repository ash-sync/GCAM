"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRoutes = void 0;
const express_1 = require("express");
const ad_controller_1 = require("./ad.controller");
const checkAuth_1 = require("../../middlewares/checkAuth");
const admin_interface_1 = require("../admin/admin.interface");
const router = (0, express_1.Router)();
router.get("/", ad_controller_1.AdController.getAllAds);
router.get("/:id", ad_controller_1.AdController.getAdById);
// Admin-only write access
router.post("/", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN), ad_controller_1.AdController.createAd);
router.put("/:id", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN), ad_controller_1.AdController.updateAd);
router.delete("/:id", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN), ad_controller_1.AdController.deleteAd);
exports.AdRoutes = router;
//# sourceMappingURL=ad.routes.js.map