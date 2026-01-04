import { startServer } from "./app/server.js";
import { connectDatabase } from "./database/ConnectDB.js";

startServer();
connectDatabase();