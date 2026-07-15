import { Request, Response } from "express";
export declare const GalleryController: {
    createCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllCategories: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    uploadImages: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllImages: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteEntireCategory: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteSpecificImage: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=gallery.controller.d.ts.map