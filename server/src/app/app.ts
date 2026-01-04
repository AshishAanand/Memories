import express from 'express';
import { registerMiddlewares } from '../middlewares/index.js';
import { registerRoutes } from "../api/index.js"
import { errorHandler } from '../middlewares/error.middleware.js';

export const app = express();


//Mounting middlewares
registerMiddlewares(app);

// Mounting routes
registerRoutes(app);


//Mounting our custome error handler
app.use(errorHandler);