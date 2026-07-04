import { Router } from "express";
import { globalErrorHandler } from "../middlewares/globalErrorHandler";
import { GalleryRoutes } from "../modules/gallery/gallery.routes";

export const router = Router();

const moduleRoutes = [
  {
    path: "/gallery",
    route: GalleryRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
