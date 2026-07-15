"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRoutes = void 0;
const express_1 = require("express");
const member_controller_1 = require("./member.controller");
const checkAuth_1 = require("../../middlewares/checkAuth");
const admin_interface_1 = require("../admin/admin.interface");
const router = (0, express_1.Router)();
router.get("/", member_controller_1.MemberController.getAllMembers);
router.get("/:id", member_controller_1.MemberController.getMemberById);
// Admin-only write access
router.post("/", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN), member_controller_1.MemberController.createMember);
router.put("/:id", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN), member_controller_1.MemberController.updateMember);
router.delete("/:id", (0, checkAuth_1.checkAuth)(admin_interface_1.Role.ADMIN), member_controller_1.MemberController.deleteMember);
exports.MemberRoutes = router;
//# sourceMappingURL=member.routes.js.map