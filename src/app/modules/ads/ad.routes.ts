import { Router } from "express";
import { AdController } from "./ad.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../admin/admin.interface";

const router = Router();

router.get("/", AdController.getAllAds);
router.get("/:id", AdController.getAdById);

// Admin-only write access
router.post("/", checkAuth(Role.ADMIN), AdController.createAd);
router.put("/:id", checkAuth(Role.ADMIN), AdController.updateAd);
router.delete("/:id", checkAuth(Role.ADMIN), AdController.deleteAd);

export const AdRoutes = router;
