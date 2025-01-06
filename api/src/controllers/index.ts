import {Elysia} from "elysia";
import { verifyController } from "./user/userAuth/verify";
import { FormController} from "./user/join/form";
import {adminAuthController }from "./admin/auth"
export const AdminRouter = new Elysia({
  prefix:"/api/admin",
})
.use(adminAuthController)

export const UserRouter = new Elysia({
  prefix:"/api/user",
})
.use(verifyController)
.use(FormController)