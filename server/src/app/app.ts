import express from 'express';
import * as Sentry from "@sentry/node";
import { initSentry } from '../utils/Sentry.js';
import { registerMiddlewares } from '../middlewares/index.js';
import { registerRoutes } from "../api/index.js"
import { errorHandler } from '../middlewares/error.middleware.js';

export const app = express();

//Initializing Sentry
initSentry();

//Mounting middlewares
registerMiddlewares(app);

// Mounting routes
registerRoutes(app);

// The Sentry error handler must be before any other error middleware
app.use(Sentry.expressErrorHandler());

//Mounting our custome error handler
app.use(errorHandler);