import { Request, Response } from "express";
export declare const AdminControllers: {
    createInvite: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    acceptInvite: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getMe: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllAdmins: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateAdmin: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    seedDemoData: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=admin.controller.d.ts.map