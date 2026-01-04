import type { Express } from "express";
import {v1routes} from "./v1/index.js";

export function registerRoutes(app: Express) {
  app.use("/v1", v1routes);
}