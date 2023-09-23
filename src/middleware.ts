import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/dashboard"],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (user === "fran@gmail.com" && pwd === "perez") {
      redirect("/dashboard");
    }
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
