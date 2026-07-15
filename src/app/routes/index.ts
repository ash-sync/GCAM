import { Router } from "express";
import { GalleryRoutes } from "../modules/gallery/gallery.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { AdminRoutes } from "../modules/admin/admin.routes";
import { MemberRoutes } from "../modules/members/member.routes";
import { EventRoutes } from "../modules/events/event.routes";
import { AdRoutes } from "../modules/ads/ad.routes";
import { ContactRoutes } from "../modules/contact/contact.routes";

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
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/members",
    route: MemberRoutes,
  },
  {
    path: "/events",
    route: EventRoutes,
  },
  {
    path: "/ads",
    route: AdRoutes,
  },
  {
    path: "/contact",
    route: ContactRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

