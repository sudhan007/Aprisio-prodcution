import cors from "@elysiajs/cors";
import {Elysia } from "elysia";
import mongoose from "mongoose";
import { AdminRouter, UserRouter } from "./controllers";
// import { authMiddleware } from "./middleware/authMiddleware";

const app = new Elysia();
//app.use(authMiddleware);
app.use(cors());

const URL = "mongodb+srv://stainsrubus:Stains2001@cluster0.ogeipvb.mongodb.net";
// const URL = process.env.MONGO_URL;
try {
  await mongoose.connect(URL as string, {
    dbName: "aprisio",
  });

  console.log("Connected to Database");
} catch (e) {
  console.log(e);
}

app.onError(({ code, error }) => {
  if (code === "VALIDATION") {
    return {
      status: 400,
      body: error.all,
    };
  }
});

app.use(AdminRouter);
app.use(UserRouter);
export { app };
