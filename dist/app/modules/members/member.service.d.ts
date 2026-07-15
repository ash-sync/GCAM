import { IMember } from "./member.interface";
export declare const MemberService: {
    createMember: (payload: IMember) => Promise<import("mongoose").Document<unknown, {}, IMember, {}, import("mongoose").DefaultSchemaOptions> & IMember & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllMembers: (query: any) => Promise<(import("mongoose").Document<unknown, {}, IMember, {}, import("mongoose").DefaultSchemaOptions> & IMember & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getMemberById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IMember, {}, import("mongoose").DefaultSchemaOptions> & IMember & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateMember: (id: string, payload: Partial<IMember>) => Promise<(import("mongoose").Document<unknown, {}, IMember, {}, import("mongoose").DefaultSchemaOptions> & IMember & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteMember: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IMember, {}, import("mongoose").DefaultSchemaOptions> & IMember & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=member.service.d.ts.map