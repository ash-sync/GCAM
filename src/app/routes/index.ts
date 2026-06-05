import { Router } from "express";
import { globalErrorHandler } from "../middlewares/globalErrorHandler";

export const router = Router();

const moduleRoutes = [
  {
    path: "/admin",
    route: AdminRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

