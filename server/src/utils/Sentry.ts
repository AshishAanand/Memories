import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

export const initSentry = () => {

    if (!process.env.SENTRY_DSN) {
        console.warn("SENTRY_DSN not set, skipping Sentry initialization");
        return;
    }

    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV ?? "development",
        integrations: [
            Sentry.httpIntegration(),
            nodeProfilingIntegration()
        ],
        tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0, // reduce in prod later
    });
};
