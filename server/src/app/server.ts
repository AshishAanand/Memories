import { env } from "../configs/env.js";
import { app } from "./app.js";
import { createServer } from "http";

export function startServer() {
    const server = createServer(app);

    server.listen(env.PORT, () => {
        console.log(`Server is running on port ${env.PORT} in ${env.NODE_ENV} mode.`);
    });
}