"use client";

import { useEffect } from "react";

function isChunkLoadError(error: unknown): boolean {
    if (!error) return false;

    const errorMessage =
        (error as Error)?.message ||
        (error as Error)?.name ||
        String(error);

    return (
        errorMessage.includes("ChunkLoadError") ||
        errorMessage.includes("Loading chunk") ||
        errorMessage.includes("Failed to fetch dynamically imported module") ||
        errorMessage.includes("error loading dynamically imported module")
    );
}

function handleChunkError() {
    const lastReload = sessionStorage.getItem("chunk-error-reload");
    const now = Date.now();

    // Prevent infinite reload loops - only reload once every 10 seconds
    if (!lastReload || now - parseInt(lastReload) > 10000) {
        sessionStorage.setItem("chunk-error-reload", String(now));
        // Clear Next.js cache and reload
        if ('caches' in window) {
            caches.keys().then((names) => {
                names.forEach((name) => caches.delete(name));
            });
        }
        window.location.reload();
    }
}

export const ChunkErrorHandler = () => {
    useEffect(() => {
        function handleError(event: ErrorEvent) {
            if (isChunkLoadError(event.error || event)) {
                handleChunkError();
            }
        }

        function handleRejection(event: PromiseRejectionEvent) {
            if (isChunkLoadError(event.reason)) {
                handleChunkError();
            }
        }

        window.addEventListener("error", handleError);
        window.addEventListener("unhandledrejection", handleRejection);

        return () => {
            window.removeEventListener("error", handleError);
            window.removeEventListener("unhandledrejection", handleRejection);
        };
    }, []);

    return null;
};
