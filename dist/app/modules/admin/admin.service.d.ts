import { IAdmin } from "./admin.interface";
import { JwtPayload } from "jsonwebtoken";
export declare const AdminService: {
    createInvite: (email: string, createdBy?: string) => Promise<{
        email: string;
        inviteToken: string;
        createdBy: string | undefined;
    }>;
    acceptInvite: (payload: any) => Promise<{
        message: string;
        payload: any;
    }>;
    getAllAdmins: (query: Record<string, string>) => Promise<(import("mongoose").Document<unknown, {}, IAdmin, {}, import("mongoose").DefaultSchemaOptions> & IAdmin & Required<{
        _id: string;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getMe: (adminId: string) => Promise<import("mongoose").Document<unknown, {}, IAdmin, {}, import("mongoose").DefaultSchemaOptions> & IAdmin & Required<{
        _id: string;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    updateAdmin: (adminId: string, payload: Partial<IAdmin>, verifiedToken: JwtPayload) => Promise<import("mongoose").Document<unknown, {}, IAdmin, {}, import("mongoose").DefaultSchemaOptions> & IAdmin & Required<{
        _id: string;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map