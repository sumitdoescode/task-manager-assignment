import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    if (pathname.startsWith("/dashboard") && !session?.user) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (pathname === "/" && session?.user) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/dashboard/:path*"],
};
