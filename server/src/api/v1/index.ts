import { Router } from "express";
// import entity routers her
import { userRouter } from "../../modules/user/user.routes.js";

export const v1routes = Router();

// mount entity routers here
v1routes.use("/users", userRouter);