import { Router } from "express";
import { MemberController } from "./member.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../admin/admin.interface";

const router = Router();

router.get("/", MemberController.getAllMembers);
router.get("/:id", MemberController.getMemberById);

// Admin-only write access
router.post("/", checkAuth(Role.ADMIN), MemberController.createMember);
router.put("/:id", checkAuth(Role.ADMIN), MemberController.updateMember);
router.delete("/:id", checkAuth(Role.ADMIN), MemberController.deleteMember);

export const MemberRoutes = router;
