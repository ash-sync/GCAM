export declare enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}
export interface IAdmin {
    _id?: string;
    name?: string;
    email: string;
    password: string;
    role: Role;
    isActive?: boolean;
}
//# sourceMappingURL=admin.interface.d.ts.map