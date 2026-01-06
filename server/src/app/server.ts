import { PORT, NODE_ENV } from "../configs/env.js";
import { app } from "./app.js";
import { createServer } from "http";

export function startServer() {
    const server = createServer(app);

    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode.`);
    });
}