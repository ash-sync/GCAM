import { ICategory, IImage } from "./gallery.interface";
export declare const GalleryService: {
    createCategory: (payload: ICategory) => Promise<import("mongoose").Document<unknown, {}, ICategory, {}, import("mongoose").DefaultSchemaOptions> & ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllCategories: () => Promise<(import("mongoose").Document<unknown, {}, ICategory, {}, import("mongoose").DefaultSchemaOptions> & ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    uploadImages: (payload: IImage) => Promise<(import("mongoose").Document<unknown, {}, IImage, {}, import("mongoose").DefaultSchemaOptions> & IImage & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    getAllImages: (query: any) => Promise<(import("mongoose").Document<unknown, {}, IImage, {}, import("mongoose").DefaultSchemaOptions> & IImage & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    deleteEntireCategory: (categoryId: string) => Promise<(import("mongoose").Document<unknown, {}, ICategory, {}, import("mongoose").DefaultSchemaOptions> & ICategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteSpecificImage: (imageId: string, imageUrl: string) => Promise<(import("mongoose").Document<unknown, {}, IImage, {}, import("mongoose").DefaultSchemaOptions> & IImage & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=gallery.service.d.ts.map