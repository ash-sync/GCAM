import { Router } from "express";
import { AdminControllers } from "./admin.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "./admin.interface";

const router = Router();

router.post("/create-invite", checkAuth(Role.ADMIN), AdminControllers.createInvite);
router.post("/accept-invite", AdminControllers.acceptInvite);
router.get("/get-all", checkAuth(Role.ADMIN), AdminControllers.getAllAdmins);
router.get("/me", checkAuth(Role.ADMIN, Role.USER), AdminControllers.getMe);
router.patch("/update/:id", checkAuth(Role.ADMIN, Role.USER), AdminControllers.updateAdmin);
router.post("/seed-demo-data", checkAuth(Role.ADMIN), AdminControllers.seedDemoData);

export const AdminRoutes = router;
