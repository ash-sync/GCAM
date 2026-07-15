import { ICategory, IImage } from "./gallery.interface";
export declare const Category: import("mongoose").Model<ICategory, {}, {}, {}, import("mongoose").Document<unknown, {}, ICategory, {}, import("mongoose").DefaultSchemaOptions> & ICategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, ICategory>;
export declare const Gallery: import("mongoose").Model<IImage, {}, {}, {}, import("mongoose").Document<unknown, {}, IImage, {}, import("mongoose").DefaultSchemaOptions> & IImage & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IImage>;
//# sourceMappingURL=gallery.model.d.ts.map