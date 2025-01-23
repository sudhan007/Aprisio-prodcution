import { Elysia } from "elysia";
import { verifyController } from "./user/userAuth/verify";
import { FormController } from "./user/join/form";
import { adminAuthController } from "./admin/auth";
import { userController } from "./admin/userController";
import { adminController } from "./admin/adminController";
import { FileController } from "./file-controller";
export const AdminRouter = new Elysia({
    prefix: "/api/admin",
})
    .use(adminAuthController)
    .use(userController)
    .use(adminController)
    .use(FileController);
export const UserRouter = new Elysia({
    prefix: "/api/user",
})
    .use(verifyController)
    .use(FormController);
