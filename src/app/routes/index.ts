import { Router } from "express";
import { globalErrorHandler } from "../middlewares/globalErrorHandler";
import { GalleryRoutes } from "../modules/gallery/gallery.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";

export const router = Router();

const moduleRoutes = [
  {
    path: "/gallery",
    route: GalleryRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
