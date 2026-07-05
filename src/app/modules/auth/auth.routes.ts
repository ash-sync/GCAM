import { Router } from "express";
import { AuthControllers } from "./auth.controller";

const router = Router();

router.post("/admin/login", AuthControllers.loginAdmin);

export const AuthRoutes = router;
