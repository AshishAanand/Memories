import type { Express } from "express";
import  express from "express";

// single async function to handle all middleware setups

export async function registerMiddlewares(app: Express) {
    // basic middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Extend with more middlewares as needed
}