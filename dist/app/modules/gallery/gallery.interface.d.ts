import { Types } from "mongoose";
export interface ICategory {
    name: string;
}
export interface IImage {
    categoryId: Types.ObjectId;
    imageUrls: string[];
}
//# sourceMappingURL=gallery.interface.d.ts.map