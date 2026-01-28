"use client";

import { useEffect } from "react";

export const ChunkErrorHandler = () => {
    useEffect(() => {
        function handleError(event: ErrorEvent) {
            const error = event.error || event;
            if (
                (typeof error?.message === "string" &&
                    (error.message.includes("ChunkLoadError") ||
                        error.message.includes("Loading chunk"))) ||
                (typeof error === "string" &&
                    (error.includes("ChunkLoadError") || error.includes("Loading chunk")))
            ) {
                // Prevent infinite loops by checking simpler session storage or just relying on
                // the fact that the new page load typically fixes it.
                // If the server is truly broken, this might loop, so a safety check is good.
                const lastReload = sessionStorage.getItem("chunk-error-reload");
                const now = Date.now();

                if (!lastReload || now - parseInt(lastReload) > 10000) {
                    sessionStorage.setItem("chunk-error-reload", String(now));
                    window.location.reload();
                }
            }
        }

        window.addEventListener("error", handleError);
        return () => window.removeEventListener("error", handleError);
    }, []);

    return null;
};
