import { NextResponse } from "next/server";
import { VerifyToken } from "@/utility/JwtHelper";

// Set headers for a valid user
export async function CheckCookieAuth(req) {
    try {
        const token = req.cookies.get("token");
        const payload = await VerifyToken(token["value"]);
        const requestHeader = new Headers(req.headers);
        requestHeader.set("email", payload["email"]);
        return NextResponse.next({ request: { headers: requestHeader } });
    } catch (error) {
        return NextResponse.redirect(new URL("/", req.url));
    }
}
