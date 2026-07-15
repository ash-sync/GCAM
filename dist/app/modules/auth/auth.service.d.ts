import { IAdmin } from "../admin/admin.interface";
export declare const AuthServices: {
    loginAdmin: (payload: Partial<IAdmin>) => Promise<{
        accessToken: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map