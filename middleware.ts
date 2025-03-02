import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

// instead of this we use upper one
// import middleware from "next-auth/middleware";
// export default middleware;

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export const config = {
  // *: zero or more parameter => /users/:id*
  // +: one or more parameter
  // ?: zero or one

  matcher: ["/users:id"],
};
