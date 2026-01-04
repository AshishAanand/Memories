import { Router } from "express";
import { UserController } from "./user.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { container } from "../../app/container.js";


export const userRouter = Router();

const userController = new UserController(container.userService);

userRouter.get("/", authMiddleware, userController.getUsers);
userRouter.get("/:id", authMiddleware, userController.getUserById);
userRouter.post("/", authMiddleware, userController.createUser);
userRouter.put("/:id", authMiddleware, userController.updateUser);