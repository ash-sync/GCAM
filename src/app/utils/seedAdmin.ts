import { envVars } from "../config/env";
import { IAdmin, Role } from "../modules/admin/admin.interface";
import { Admin } from "../modules/admin/admin.model";
import bcryptjs from "bcryptjs";

export const seedAdmin = async () => {
  try {
    const isAdminExist = await Admin.findOne({
      email: envVars.ADMIN_EMAIL,
    });

    if (isAdminExist) {
      console.log("Super Admin Already Exists. Skipping seeding");
      return;
    }

    console.log("Trying to create Admin");

    const hashedPassword = await bcryptjs.hash(
      envVars.ADMIN_PASSWORD,
      Number(envVars.BCRYPT_SALT_ROUND),
    );

    const payload: IAdmin = {
      name: "Admin",
      role: Role.ADMIN,
      email: envVars.ADMIN_EMAIL,
      password: hashedPassword,
    };

    await Admin.create(payload);
    console.log("Admin user created Successfully");
  } catch (error) {
    console.log(error);
  }
};
