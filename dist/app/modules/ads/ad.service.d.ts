import { IAd } from "./ad.interface";
export declare const AdService: {
    createAd: (payload: IAd) => Promise<import("mongoose").Document<unknown, {}, IAd, {}, import("mongoose").DefaultSchemaOptions> & IAd & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllAds: () => Promise<(import("mongoose").Document<unknown, {}, IAd, {}, import("mongoose").DefaultSchemaOptions> & IAd & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getAdById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IAd, {}, import("mongoose").DefaultSchemaOptions> & IAd & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateAd: (id: string, payload: Partial<IAd>) => Promise<(import("mongoose").Document<unknown, {}, IAd, {}, import("mongoose").DefaultSchemaOptions> & IAd & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteAd: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IAd, {}, import("mongoose").DefaultSchemaOptions> & IAd & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=ad.service.d.ts.map