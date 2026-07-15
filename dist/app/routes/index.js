"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const gallery_routes_1 = require("../modules/gallery/gallery.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const admin_routes_1 = require("../modules/admin/admin.routes");
const member_routes_1 = require("../modules/members/member.routes");
const event_routes_1 = require("../modules/events/event.routes");
const ad_routes_1 = require("../modules/ads/ad.routes");
const contact_routes_1 = require("../modules/contact/contact.routes");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/gallery",
        route: gallery_routes_1.GalleryRoutes,
    },
    {
        path: "/auth",
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: "/admin",
        route: admin_routes_1.AdminRoutes,
    },
    {
        path: "/members",
        route: member_routes_1.MemberRoutes,
    },
    {
        path: "/events",
        route: event_routes_1.EventRoutes,
    },
    {
        path: "/ads",
        route: ad_routes_1.AdRoutes,
    },
    {
        path: "/contact",
        route: contact_routes_1.ContactRoutes,
    },
];
moduleRoutes.forEach((route) => {
    exports.router.use(route.path, route.route);
});
//# sourceMappingURL=index.js.map