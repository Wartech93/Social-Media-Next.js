import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/settings(.*)","/"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {

  //skip next.js internals and all static files, unless found in search params
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)",

    //API ROUTES
  '/(api|trpc)(.*)', ],
};