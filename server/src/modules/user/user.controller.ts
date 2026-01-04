import type { Request, Response } from "express";
import { UserService } from "./user.service.js";

export class UserController {
    constructor(private userService: UserService) {}

    getUsers = async (req: Request, res: Response) => {
        const users = await this.userService.getAllUsers();
        res.json(users);
    }

    getUserById = async (req: Request, res: Response) => {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "ID parameter is required" });
            return;
        }
        const user = await this.userService.getUserById(id);
        res.json(user);
    }

    createUser = async (req: Request, res: Response) => {
        const userData = req.body;
        const newUser = await this.userService.createUser(userData);
        res.status(201).json(newUser);
    }

    updateUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "ID parameter is required" });
            return;
        }
        const userData = req.body;
        const updatedUser = await this.userService.updateUser(id, userData);
        res.json(updatedUser);
    }
}