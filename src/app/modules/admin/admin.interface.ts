export enum Role {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface IAdmin {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  isActive: boolean;
  createdAt: Date;
}
