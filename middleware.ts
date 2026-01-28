import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up",
    "/api/webhook",
    "/api/uploadthing",
  ],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
