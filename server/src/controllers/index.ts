import {Elysia} from "elysia";
import { verifyController } from "./user/userAuth/verify";
import { FormController} from "./user/join/form";

export const AdminRouter = new Elysia({
  prefix:"/api/admin",
})

export const UserRouter = new Elysia({
  prefix:"/api/user",
})
.use(verifyController)
.use(FormController)